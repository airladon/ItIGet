// @flow
import Fig from 'figureone';
import type { TypeParsablePoint } from 'figureone';
// import LessonDescription from './lessonDescription';
// import getLessonIndex from '../../Lessons/index';
// import { loadRemote, loadRemoteCSS } from '../tools/misc';
import SimpleLessonContent from './SimpleLessonContent';
// import PopupBoxCollection from '../../Lessons/LessonsCommon/DiagramCollectionPopup';

const {
  Diagram, HTMLObject, Point,
  DiagramElementPrimative, DiagramElementCollection,
  DiagramElement, Rect, Equation, parsePoint,
} = Fig;

const { generateUniqueId, joinObjects } = Fig.tools.misc;

const { setOnClicks, applyModifiers, click } = Fig.tools.html;

function initializeItemSelector(
  methodToExecute: Function,
  bindingObject: Object,
  index: number = 0,
) {
  const elem = document
    .getElementById(`id__lesson_item_selector_${index}`);
  if (elem != null) {
    if (elem.children.length > 0) {
      for (let i = 0; i < elem.children.length; i += 1) {
        elem.children[i].onclick = methodToExecute.bind(bindingObject, i);
      }
    }
  }
}

type TypeInteractiveElement = DiagramElementCollection
                              | DiagramElementPrimative
                              | string
                              | HTMLElement;
type TypeInteractiveElementLocation = 'center' | 'zero' | ''
                                      | 'topLeft' | 'topRight'
                                      | 'topRightText'
                                      | 'vertexLeft' | TypeParsablePoint;
type TypeInteractiveElements = Array<{
    element: TypeInteractiveElement,
    location: TypeInteractiveElementLocation,
  }>;

type TypeInteractiveItem = {
  element: TypeInteractiveElement;
  location: TypeInteractiveElementLocation;
};

function interactiveItem(
  element: TypeInteractiveElement,
  location: TypeInteractiveElementLocation = '',
) {
  return {
    element,
    location,
  };
}

function infoList(listItems: Array<string>) {
  const out = ['<ul>'];
  listItems.forEach((item) => {
    out.push(`<li>${item}</li>`);
  });
  out.push(['</ul>']);
  return out.join(' ');
}

function diagramCanvas(
  id: string,
  DiagramClass: Object,
  classes: string = '',
): Object {
  return {
    replacementText: () => `<div id="${id}" class="canvas_container ${classes}">
        <canvas class="diagram__gl"></canvas>
        <div class="diagram__html"></div>
        <canvas class="diagram__text"></canvas>
      </div>`,
    type: 'diagram',
    DiagramClass,
    id,
  };
}

class Section {
  title: string;
  modifiers: Object | Function;
  infoModifiers: Object;
  hint: Array<string> | string;
  blank: Array<string>;
  diagram: Diagram;
  skipWhenComingFromNext: boolean;
  infoElements: Array<DiagramElementCollection | DiagramElementPrimative>;
  showOnly: Array<DiagramElementPrimative | DiagramElementCollection>
           | () => {};

  hideOnly: Array<DiagramElementPrimative | DiagramElementCollection>
           | () => {};

  show: Array<DiagramElementPrimative | DiagramElementCollection> | () => {};
  hide: Array<DiagramElementPrimative | DiagramElementCollection> | () => {};
  initialPositions: Object | () => {};
  blankTransition: {
    toNext: boolean;
    toPrev: boolean;
    fromNext: boolean;
    fromPrev: boolean;
    toGoto: boolean;
    fromGoto: boolean;
  };

  fadeInFromPrev: boolean;

  interactiveElementsOnly: TypeInteractiveElements;
  interactiveElements: TypeInteractiveElements;
  interactiveElementsRemove: Array<TypeInteractiveElement>;
  interactiveElementList: TypeInteractiveElements;
  currentInteractiveItem: number;
  refresh: ?() => void;

  constructor(diagram: Diagram) {
    this.diagram = diagram;
    this.title = '';
    this.modifiers = {};
    this.infoModifiers = {};
    this.showOnly = [];
    this.blank = [];
    this.infoElements = [];
    this.fadeInFromPrev = true;
    this.blankTransition = {
      toNext: false,
      toPrev: false,
      fromNext: false,
      fromPrev: false,
      toGoto: false,
      fromGoto: false,
    };
    this.interactiveElementList = [];
    this.currentInteractiveItem = -1;
    this.skipWhenComingFromNext = false;
    this.refresh = null;
  }

  setContent(): Array<string> | string {
    return [];
  }

  // eslint-disable-next-line class-methods-use-this
  setInfo(): Array<string> | string {
    return [];
  }

  setOnClicks() {
    setOnClicks(this.modifiers);
    setOnClicks(this.infoModifiers);
  }

  getInfo(): string {
    let htmlText = '';
    let info = '';
    if (typeof this.setInfo === 'string'
        || Array.isArray(this.setInfo)) {
      info = this.setInfo;
    } else {
      info = this.setInfo();
    }
    if (typeof info === 'string') {
      info = [info];
    }

    let contentInBullets = [];
    if (info.length > 1) {
      info.forEach((line) => {
        if (line.startsWith('<li>') || line.startsWith('<ul>') || line.startsWith('</ul>')) {
          contentInBullets.push(line);
        } else {
          contentInBullets.push(`<li>${line}</li>`);
        }
      });
      if (info[0] !== '<ul>') {
        htmlText = '<ul>';
      }
    } else {
      contentInBullets = info;
    }

    contentInBullets.forEach((element) => {
      htmlText = `${htmlText}${element}`;
    });

    if (info.length > 1 && info[0] !== '<ul>') {
      htmlText = `${htmlText}</ul>`;
    }

    // info.forEach((element) => {
    //   htmlText = `${htmlText}${element}`;
    // });
    // htmlText += '\n';
    htmlText = applyModifiers(htmlText, this.infoModifiers);

    // Go through all text, and replace all characters between | | with
    // with default keywords
    // const r = RegExp(/\|([^|]*)\|/, 'gi');
    // return htmlText.replace(r, '<span class="highlight_word">$1</span>');
    return htmlText;
  }

  // eslint-disable-next-line class-methods-use-this
  hideInfoButton() {
    const infoElement = document.getElementById('id_lesson__info_button');
    if (infoElement instanceof HTMLElement) {
      infoElement.classList.add('lesson__info_hide');
    }
  }

  setInfoButton() {
    const infoHtml = this.getInfo();
    const infoElement = document.getElementById('id_lesson__info_button');
    const infoBox = document.getElementById('id_lesson__info_box__text');
    if (infoElement instanceof HTMLElement) {
      if (infoHtml) {
        infoElement.classList.remove('lesson__info_hide');
        if (infoBox instanceof HTMLElement) {
          infoBox.innerHTML = infoHtml;
        }
      } else {
        infoElement.classList.add('lesson__info_hide');
      }
    }
  }

  setInteractiveElementsButton() {
    // const infoHtml = this.getInfo();
    const button = document
      .getElementById('id_lesson__interactive_element_button');
    // const infoBox = document.getElementById('id_lesson__info_box__text');
    if (button instanceof HTMLElement) {
      if (this.interactiveElementList.length > 0 && this.getNextInteractiveItem()) {
        this.currentInteractiveItem = -1;
        button.classList.remove('lesson__interactive_element_button__hide');
      } else {
        button.classList.add('lesson__interactive_element_button__hide');
      }
    }
  }

  getNextInteractiveItem(): null | TypeInteractiveItem {
    if (this.interactiveElementList.length > 0) {
      let index = this.currentInteractiveItem + 1;
      let counter = 0;
      while (counter < this.interactiveElementList.length) {
        if (index > this.interactiveElementList.length - 1) {
          index = 0;
        }
        let { element } = this.interactiveElementList[index];
        let elementIsVisible = false;
        if (typeof element === 'string') {
          element = document.getElementById(element);
        }
        if (element instanceof HTMLElement) {
          const rect = element.getBoundingClientRect();
          if (rect.left > 0 && rect.width > 0) {
            elementIsVisible = true;
          }
        } else if (element instanceof DiagramElementPrimative
                   && element.drawingObject instanceof HTMLObject) {
          if (element.isShown) {
            elementIsVisible = true;
          }
        } else if ((element instanceof DiagramElementPrimative
          || element instanceof DiagramElementCollection)
          && element.isShown) {
          if (element.isMovable || element.isTouchable || element.isInteractive) {
            elementIsVisible = true;
          }
        }
        let elementIsTouchable = false;
        if (element instanceof DiagramElementCollection) {
          if (element.isTouchable || element.isMovable
            || element.hasTouchableElements || element.isInteractive) {
            elementIsTouchable = true;
          }
        } else if (element instanceof DiagramElementPrimative) {
          if (element.isTouchable || element.isMovable || element.isInteractive) {
            elementIsTouchable = true;
          }
        } else if (element instanceof HTMLElement) {
          elementIsTouchable = true;
          if (element.classList.contains('not_interactive_word')) {
            elementIsVisible = false;
          } else {
            elementIsVisible = true;
          }
        }
        if (elementIsVisible && elementIsTouchable
          && element != null && element.isInteractive !== false) {
          this.currentInteractiveItem = index;
          return {
            element,
            location: this.interactiveElementList[index].location,
          };
        }
        index += 1;
        if (index > this.interactiveElementList.length - 1) {
          index = 0;
        }
        counter += 1;
      }
    }
    return null;
  }

  getContent(modify: boolean = true): string {
    if (typeof this.modifiers === 'function') {
      this.modifiers = this.modifiers();
    }
    let htmlText = '';
    let content = '';
    if (typeof this.setContent === 'string'
        || Array.isArray(this.setContent)) {
      content = this.setContent;
    } else {
      content = this.setContent();
    }
    if (typeof content === 'string') {
      content = [content];
    }
    const contentInParagraphs = [];
    content.forEach((line) => {
      if (line.charAt(0) !== '<') {
        contentInParagraphs.push(`<p>${line}</p>`);
      } else {
        contentInParagraphs.push(line);
      }
    });
    contentInParagraphs.forEach((element) => {
      htmlText = `${htmlText}${element}`;
    });
    // htmlText += '\n';
    if (modify) {
      htmlText = applyModifiers(htmlText, this.modifiers);
    }
    // Object.keys(this.modifiers).forEach((key) => {
    //   const mod = this.modifiers[key];
    //   htmlText = modifyText(htmlText, key, mod);
    // });

    // Go through all text, and replace all characters between | | with
    // with default keywords
    // const r = RegExp(/\|([^|]*)\|/, 'gi');
    // return htmlText.replace(r, '<span class="highlight_word">$1</span>');
    return htmlText;
  }

  /* eslint-disable no-unused-vars */
  setSteadyState(previousState: Object) {
  }

  /* eslint-disable no-unused-vars */
  setEnterState(previousState: Object) {
  }

  /* eslint-disable no-unused-vars */
  setLeaveState(): ?Object {
  }

  setBlanks() {
    this.blank.forEach((element) => {
      if (element in this.blankTransition) {
        this.blankTransition[element] = true;
      }
    });
    // if ('blank' in this) {
    //   Object.keys(this.blank).forEach((key) => {
    //     this.blankTransition[key] = this.blank[key];
    //   });
    // }
  }

  getInteractiveElementIndex(
    element: TypeInteractiveElement,
  ) {
    let elem = element;
    if (typeof element === 'string') {
      elem = document.getElementById(element);
    }
    for (let i = 0; i < this.interactiveElementList.length; i += 1) {
      const item = this.interactiveElementList[i];
      if (item.element === elem || item.element === element) {
        return i;
      }
    }
    return -1;
  }

  removeInteractiveElement(element: TypeInteractiveElement) {
    const index = this.getInteractiveElementIndex(element);
    if (index > -1) {
      this.interactiveElementList.splice(index, 1);
    }
  }

  replaceInteractiveElement(
    element: TypeInteractiveElement,
    location: TypeInteractiveElementLocation,
  ) {
    const index = this.getInteractiveElementIndex(element);
    if (index > -1) {
      this.interactiveElementList[index] = interactiveItem(element, location);
      return true;
    }
    return false;
  }

  replaceOrAddInteractiveElement(
    element: TypeInteractiveElement,
    location: TypeInteractiveElementLocation,
  ) {
    const replaced = this.replaceInteractiveElement(element, location);
    if (!replaced) {
      this.interactiveElementList.push(interactiveItem(element, location));
    }
  }

  setInteractiveElements() {
    this.interactiveElementList = [];
    if ('interactiveElementsOnly' in this) {
      // this.interactiveElementList = this.interactiveElementsOnly;
      this.interactiveElementsOnly.forEach((element) => {
        if (element instanceof DiagramElementCollection
          || element instanceof DiagramElementPrimative) {
          this.replaceOrAddInteractiveElement(element, '');
        } else if (typeof element === 'string') {
          const elem = document.getElementById(element);
          if (elem != null) {
            this.replaceOrAddInteractiveElement(element, '');
          }
        } else {
          this.replaceOrAddInteractiveElement(element.element, element.location);
        }
      });
    } else {
      // Get all action words
      const elements = document.getElementsByClassName('interactive_word');
      for (let i = 0; i < elements.length; i += 1) {
        const element = elements[i];
        if (element.id != null) {
          this.interactiveElementList.push({
            element: element.id,
            location: 'topRightText',
          });
        } else {
          this.interactiveElementList.push({
            element,
            location: 'topRightText',
          });
        }
      }

      // Get all movable diagram elements
      const diagramElements = this.diagram.elements.getAllPossiblyInteractiveElements();
      // console.log(this.diagram.elements)
      // debugger;
      diagramElements.forEach((element) => {
        this.interactiveElementList.push({
          element,
          location: '',
        });
      });
    }

    // Overwrite or add single elements
    if ('interactiveElements' in this) {
      this.interactiveElements.forEach((element) => {
        if (element instanceof DiagramElementCollection
          || element instanceof DiagramElementPrimative) {
          this.replaceOrAddInteractiveElement(element, '');
        } else {
          this.replaceOrAddInteractiveElement(element.element, element.location);
        }
      });
    }
    // Remove elements
    if ('interactiveElementsRemove' in this) {
      this.interactiveElementsRemove.forEach((element) => {
        this.removeInteractiveElement(element);
      });
    }
  }

  setVisible() {
    if ('showOnly' in this) {
      const elementsOrMethod = this.showOnly;
      if (Array.isArray(elementsOrMethod)) {
        this.diagram.elements.showOnly(elementsOrMethod);
      } else {
        elementsOrMethod();
      }
    }
    if ('hideOnly' in this) {
      const elementsOrMethod = this.hideOnly;
      if (Array.isArray(elementsOrMethod)) {
        this.diagram.elements.hideOnly(elementsOrMethod);
      } else {
        elementsOrMethod();
      }
    }
    if ('show' in this) {
      const elementsOrMethod = this.show;
      if (Array.isArray(elementsOrMethod)) {
        elementsOrMethod.forEach((element) => {
          if (element instanceof DiagramElementCollection) {
            element.showAll();
          } else {
            element.show();
          }
        });
      } else {
        elementsOrMethod();
      }
    }
    if ('hide' in this) {
      const elementsOrMethod = this.hide;
      if (Array.isArray(elementsOrMethod)) {
        elementsOrMethod.forEach((element) => {
          if (element instanceof DiagramElementCollection) {
            element.hideAll();
          } else {
            element.hide();
          }
        });
      } else {
        elementsOrMethod();
      }
    }
  }

  getState(diagram: Diagram): Object {
    return {};
  }

  transitionToNext(done: () => void = function temp() {}): void {
    done();
  }

  transitionFromNext(done: () => void = function temp() {}): void {
    done();
  }

  transitionToPrev(done: () => void = function temp() {}): void {
    done();
  }

  transitionFromPrev(done: () => void = function temp() {}): void {
    done();
  }

  transitionFromAny(done: () => void = function temp() {}): void {
    done();
  }

  transitionToAny(done: () => void = function temp() {}): void {
    done();
  }
  /* eslint-enable no-unused-vars */
}

// class diagramClass {
// }
const whichAnimationEvent = () => {
  // let t;
  const el = document.createElement('fakeelement');

  const transitions = {
    animation: 'animationend',
    OAnimation: 'oAnimationEnd',
    MozAnimation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
  };
  // for (t in transitions) {
  //   console.log(t)
  //   if (el.style[t] !== undefined) {
  //     return transitions[t];
  //   }
  // }
  for (let i = 0; i < Object.keys(transitions).length; i += 1) {
    const key = Object.keys(transitions)[i];
    if (key in el.style) {
      return transitions[key];
    }
  }
  return '';
};

class PresentationLessonContent extends SimpleLessonContent {
  title: string;
  sections: Array<Section>;
  // diagram: Object;
  // overlayDiagram: Object;
  diagramHtmlId: string;
  goingTo: 'next' | 'prev' | 'goto';
  comingFrom: 'next' | 'prev' | 'goto';
  // iconLink: string;
  // iconLinkGrey: string;
  toggleInfo: (?boolean) => void;
  animationEnd: string;
  next: () => void;
  prev: () => void;
  // questions

  constructor(htmlId: string = 'lesson__content') {
    super(htmlId);
    this.diagramHtmlId = `${htmlId}_diagram`;
    // this.qrDiagram = null;
    // this.sections = [];
    // this.iconLink = '/';
    // this.iconLinkGrey = '/';
    // this.setTitle();

    this.animationEnd = whichAnimationEvent();
    if (window.quickReference == null) {
      window.quickReference = {};
    }
  }

  initialize() {
    this.setDiagram(this.diagramHtmlId);
    this.next = () => { this.diagram.lesson.nextSection(); };
    this.prev = () => { this.diagram.lesson.nextSection(); };
    this.setElementContent();
    this.addSections();
    this.addInfoBox();
    this.addStar();
    this.diagram.setFirstTransform();
  }

  // eslint-disable-next-line class-methods-use-this
  toggleInfo(toState: ?boolean = null) {
    const infoButton = document.getElementById('id_lesson__info_button');
    const infoBox = document.getElementById('id_lesson__info_box');
    if (infoButton instanceof HTMLElement && infoBox instanceof HTMLElement) {
      if (typeof toState === 'boolean' && toState === true) {
        infoButton.classList.add('lesson__info_button_show');
        infoBox.classList.remove('lesson__info_hide');
      } else if (typeof toState === 'boolean' && toState === false) {
        infoButton.classList.remove('lesson__info_button_show');
        infoBox.classList.add('lesson__info_hide');
      } else {
        infoButton.classList.toggle('lesson__info_button_show');
        infoBox.classList.toggle('lesson__info_hide');
      }
      if (infoBox.classList.contains('lesson__info_hide')) {
        this.diagram.elements.hasTouchableElements = true;
      } else {
        this.diagram.elements.hasTouchableElements = false;
      }
    }
    // if (infoBox instanceof HTMLElement) {
    //   infoBox.classList.toggle('lesson__info_hide');
    // }
  }

  // eslint-disable-next-line class-methods-use-this
  prepareToShowQR() {
    // this.qrDiagram.container.style.zIndex = '10';
    const overlay = document.getElementById('presentation_lesson__qr__overlay');
    if (overlay != null) {
      overlay.style.zIndex = '10';
    }
    const next = document.getElementById('lesson__button-next');
    if (next) {
      next.classList.add('lesson__button-next-disabled');
    }
    const prev = document.getElementById('lesson__button-previous');
    if (prev) {
      prev.classList.add('lesson__button-prev-disabled');
    }
    const gotoButton =
      document.getElementById('id__lesson__button-goto_container');
    if (gotoButton) {
      gotoButton.classList.add('lesson__button-goto_container-disabled');
    }
    const interactive =
      document.getElementById('id_lesson__interactive_element_button');
    if (interactive) {
      interactive.classList.add('lesson__interactive_element_button__disable');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  prepareToHideQR() {
    const overlay = document.getElementById('presentation_lesson__qr__overlay');
    if (overlay != null) {
      overlay.style.zIndex = '-1';
    }
    const next = document.getElementById('lesson__button-next');
    if (next
      && this.diagram.lesson.currentSectionIndex
        < this.diagram.lesson.content.sections.length - 1
    ) {
      next.classList.remove('lesson__button-next-disabled');
    }
    const prev = document.getElementById('lesson__button-previous');
    if (prev && this.diagram.lesson.currentSectionIndex > 0) {
      prev.classList.remove('lesson__button-prev-disabled');
    }
    const gotoButton =
      document.getElementById('id__lesson__button-goto_container');
    if (gotoButton) {
      gotoButton.classList.remove('lesson__button-goto_container-disabled');
    }
    const interactive =
      document.getElementById('id_lesson__interactive_element_button');
    if (interactive) {
      interactive.classList.remove('lesson__interactive_element_button__disable');
    }
  }

  // eslint-disable-next-line class-methods-use-this
  addInfoBox() {
    const container = document.createElement('div');
    container.classList.add('lesson__info_box');
    container.classList.add('lesson__info_hide');
    container.id = 'id_lesson__info_box';

    const title = document.createElement('div');
    title.classList.add('lesson__info_box__title');
    container.appendChild(title);

    const infoSymbol = document.createElement('div');
    infoSymbol.classList.add('lesson__info_box__title_i');
    infoSymbol.innerHTML = 'i';
    title.appendChild(infoSymbol);

    const close = document.createElement('div');
    close.classList.add('lesson__info_box__close');
    close.id = 'id_lesson__info_box__close';
    close.innerHTML = 'X';
    close.onclick = this.toggleInfo.bind(this);
    title.appendChild(close);

    const titleText = document.createElement('div');
    titleText.classList.add('lesson__info_box__title_text');
    titleText.innerHTML = 'What can you do on this page?';
    title.appendChild(titleText);

    const text = document.createElement('div');
    text.classList.add('lesson__info_box__text');
    text.id = ('id_lesson__info_box__text');
    container.appendChild(text);

    this.diagram.htmlCanvas.appendChild(container);
  }

  // eslint-disable-next-line class-methods-use-this
  pulseStar() {
    const star = document.getElementById('id_lesson__star');
    if (star instanceof HTMLElement) {
      star.classList.toggle('lesson__info_star_pulse');
    }
  }

  // starOnNextInteractiveItem() {
  //   const index = this.
  // }

  highlightInteractiveElement(
    element: TypeInteractiveElement,
    location: TypeInteractiveElementLocation,
  ) {
    const star = document.getElementById('id_lesson__star');
    if (star instanceof HTMLElement) {
      const animationEnd = () => {
        star.removeEventListener(this.animationEnd, animationEnd);
        star.classList.remove('lesson__info_star_pulse');
        // this next line triggers a relflow, making the class removal stick
        // eslint-disable-next-line no-unused-vars
        const w = star.offsetWidth;
      };
      animationEnd();

      let cssPosition = new Point(0, 0);
      if (element instanceof DiagramElementPrimative
        || element instanceof DiagramElementCollection) {
        let diagramPosition;
        if (location === 'center'
          || (location === '' && element.interactiveLocation === 'center')
        ) {
          diagramPosition = element.getCenterDiagramPosition();
        } else if (location === 'zero'
        || (location === '' && element.interactiveLocation === 'zero')) {
          diagramPosition = element.getDiagramPosition();
        } else if (location === 'topLeft'
          || (location === '' && element.interactiveLocation === 'topLeft')
        ) {
          const rect = element.getDiagramBoundingRect();
          diagramPosition = new Point(rect.left, rect.top);
        } else if (location === 'topRight'
          || (location === '' && element.interactiveLocation === 'topRight')
        ) {
          const rect = element.getDiagramBoundingRect();
          diagramPosition = new Point(rect.right, rect.top);
        } else if (location === 'vertexLeft'
          || (location === '' && element.interactiveLocation === 'vertexLeft')
        ) {
          const borders = element.getVertexSpaceBoundaries();
          let minXPoint;
          borders.forEach((border) => {
            border.forEach((borderPoint) => {
              if (minXPoint == null) {
                minXPoint = borderPoint._dup();
              } else if (minXPoint.x > borderPoint.x) {
                minXPoint = borderPoint._dup();
              }
            });
          });
          if (minXPoint) {
            minXPoint.y = 0;
            diagramPosition = element.getVertexSpaceDiagramPosition(minXPoint);
          } else {
            diagramPosition = new Point(0, 0);
          }
        } else if (location instanceof Point
          || typeof location === 'number'
          || Array.isArray(location)
        ) {
          const p = parsePoint(location);
          const rect = element.getDiagramBoundingRect();
          diagramPosition = new Point(
            rect.left + p.x * rect.width,
            rect.bottom + p.y * rect.height,
          );
        } else {
          diagramPosition = element
            .getVertexSpaceDiagramPosition(parsePoint(element.interactiveLocation));
        }
        cssPosition = diagramPosition
          .transformBy(this.diagram.spaceTransforms.diagramToPixel.matrix());
      } else {
        let html = element;
        if (typeof element === 'string') {
          html = document.getElementById(element);
        }
        if (html instanceof HTMLElement) {
          const rect = html.getBoundingClientRect();

          const fontSize = parseFloat(
            window.getComputedStyle(html, null).getPropertyValue('font-size'),
          );
          const rectBase = this.diagram.htmlCanvas.getBoundingClientRect();
          if (location === 'topLeft') {
            cssPosition = new Point(
              rect.left - rectBase.left,
              rect.top - rectBase.top,
            );
          } else if (location === 'topRight') {
            cssPosition = new Point(
              rect.left - rectBase.left + rect.width,
              rect.top - rectBase.top,
            );
          } else if (location === 'topRightText') {
            cssPosition = new Point(
              rect.left - rectBase.left + rect.width,
              rect.top - rectBase.top + fontSize * 0.3,
            );
          } else if (location === 'vertexLeft') {
            cssPosition = new Point(
              rect.left - rectBase.left + rect.width * 0.05,
              rect.top - rectBase.top + rect.height * 0.5,
            );
          } else if (location instanceof Point
            || typeof location === 'number'
            || Array.isArray(location)
          ) {
            const p = parsePoint(location);
            cssPosition = new Point(
              rect.left - rectBase.left + rect.width * p.x,
              rect.top - rectBase.top + rect.height * p.y,
            );
          } else {
            cssPosition = new Point(
              rect.left - rectBase.left + rect.width / 2,
              rect.top - rectBase.top + rect.height / 2,
            );
          }
        }
      }
      star.classList.add('lesson__info_star_pulse');
      const rect = star.getBoundingClientRect();
      star.style.left = `${cssPosition.x - rect.width / 2}px`;
      star.style.top = `${cssPosition.y - rect.height / 2}px`;
      star.addEventListener(this.animationEnd, animationEnd.bind(this));
    }
  }

  bindNext(color: Array<number> = this.diagram.layout.colors.diagram.action) {
    return click(this.next, [this], color);
  }

  bindShowQR(
    uid: string,
    qrid: string,
    color: Array<number> = this.diagram.layout.colors.diagram.action,
  ) {
    return click(this.showQR, [this, uid, qrid], color);
  }

  addStar() {
    const img = document.createElement('img');
    img.setAttribute('src', '/static/star.png');
    img.id = 'id_lesson__star';
    img.classList.add('lesson__info_star');

    this.diagram.htmlCanvas.appendChild(img);
  }

  setTitle() {
    this.title = '';
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  setDiagram(htmlId: string = '') {
  }

  // eslint-disable-next-line class-methods-use-this
  setElementContent() {
  }

  // eslint-disable-next-line class-methods-use-this
  addSections() {
  }

  addSection(...sectionObjects: Array<Object>) {
    const s = new Section(this.diagram);
    const section = Object.assign({}, ...sectionObjects);
    Object.keys(section).forEach((key) => {
      // $FlowFixMe
      s[key] = section[key];
    });
    this.sections.push(s);
  }

  addSectionEqnStep(
    optionsIn: {
      eqn: { eqn: Equation } & Equation,  // or navigator
      from: string,                       // From form
      to: string,                         // To Form
      duration?: number,                   // duration
      animate?: 'dissolve' | 'move',
    },
    ...sectionObjects: Array<Object>
  ) {
    const defaultOptions = {
      animate: 'move',
      duration: 0.8,
    };
    const options = joinObjects({}, defaultOptions, optionsIn);
    const userSections = Object.assign({}, ...sectionObjects);
    let { eqn } = options;
    const { animate, duration } = options;
    let nav = null;
    if (eqn.table != null) {
      nav = eqn;
      ({ eqn } = nav);
    }
    const fromForm = options.from;
    const toForm = options.to;
    const eqnSection = {
      transitionFromPrev: (done) => {
        if (userSections.transitionFromPrev != null) {
          userSections.transitionFromPrev(() => {});
        }
        if (fromForm === toForm) {
          done();
          return;
        }
        eqn.showForm(fromForm);
        eqn.goToForm({
          name: toForm,
          duration,
          callback: done,
          animate,
        });
        if (nav != null) {
          nav.updateButtons();
        }
      },
      setSteadyState: () => {
        if (userSections.setSteadyState != null) {
          userSections.setSteadyState();
        }
        eqn.showForm(toForm);
        if (nav != null) {
          nav.updateButtons();
        }
      },
    };
    const section = Object.assign({}, ...sectionObjects, eqnSection);
    this.addSection(section);
  }
}

function makeFig(
  optionsIn: {
    id?: string,
    scale?: string,
    window?: Array<number>,
    left?: ?number,
    top?: ?number,
    width?: ?number,
    height?: ?number,
    borderDebug?: boolean,
    element: DiagramElement | Array<DiagramElement>,
    classes?: string,
  },
  // id: string = `id_figure__${generateUniqueId()}`,
  // elements: DiagramElement | Array<DiagramElement>,
  // scale: string = 'fit',
  // limits: Rect | null | Array<number> = null,
) {
  const defaultOptions = {
    id: `id_figure__${generateUniqueId()}`,
    scale: 'fit',
    window: [-1, -1, 2, 2],
    left: null,
    top: null,
    width: null,
    height: null,
    borderDebug: false,
    classes: '',
  };
  const options = joinObjects(defaultOptions, optionsIn);

  let leftMargin = '';
  let topMargin = '';
  let width = '';
  let height = '';
  let border = '';
  let classes = '';
  if (options.left != null) {
    leftMargin = `margin-left:${options.left}%;`;
  }
  if (options.top != null) {
    topMargin = `margin-top:${options.top}%;`;
  }
  if (options.left != null) {
    width = `width:${options.width}%;`;
  }
  if (options.left != null) {
    height = `height:${options.height}%;`;
  }
  if (options.borderDebug) {
    border = 'border-style:solid;border-width:1px;border-color:red;';
  }
  if (options.classes) {
    classes = ` class="${options.classes}"`;
  }

  let elementsToUse;
  if (Array.isArray(options.element)) {
    elementsToUse = options.element;
  } else {
    elementsToUse = [options.element];
  }
  elementsToUse.forEach((element) => {
    // eslint-disable-next-line no-param-reassign
    element.tieToHTML.element = options.id;
    // eslint-disable-next-line no-param-reassign
    element.tieToHTML.scale = options.scale;
    if (options.window != null) {
      if (Array.isArray(options.window)) {
        // eslint-disable-next-line no-param-reassign
        element.tieToHTML.window = new Rect(
          options.window[0], options.window[1],
          options.window[2], options.window[3],
        );
      } else {
        // eslint-disable-next-line no-param-reassign
        element.tieToHTML.window = options.window;
      }
    }
  });
  return `<div id="${options.id}" style="${width}${height}${topMargin}${leftMargin}${border}"${classes}></div>`;
}

export {
  Section, PresentationLessonContent, diagramCanvas, initializeItemSelector,
  applyModifiers, interactiveItem, infoList, makeFig,
};
