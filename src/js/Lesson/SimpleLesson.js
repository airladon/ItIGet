// @flow
// import Fig from 'figureone';
// import SimpleLessonContent from './SimpleLessonContent';
// import { PresentationLessonContent } from './PresentationLessonContent';
// import Diagram from '../diagram/Diagram';

// const { Diagram } = Fig;

class SimpleLesson {
  content: Object;

  constructor(content: Object) {
    this.content = content;
  }

  initialize() {
    this.content.initialize();
  }
}

export default SimpleLesson;
