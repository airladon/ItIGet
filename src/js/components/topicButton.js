// @flow
import Fig from 'figureone';
import * as React from 'react';
import DropDownButtonBase from './dropDownButtonBase';

const { round } = Fig.tools.math;

export type TypeTopicButtonListItem = {
  label: string;
  rating?: number;
  numReviews?: number;
  numHighRatings?: number;
  description?: string;
  link?: Function | string;
  active?: boolean;
  separator?: boolean;
  type?: 'presentation' | 'singlePage' | 'generic' | 'video';
};

type Props = {
  label?: string;
  id?: string;
  direction?: 'up' | 'down';
  xAlign?: 'left' | 'right' | 'center';
  list?: Array<TypeTopicButtonListItem>;
  selected?: boolean;
};

export default class TopicButton extends React.Component <Props> {
  // eslint-disable-next-line class-methods-use-this
  renderListLabel(listItem: TypeTopicButtonListItem) {
    if (listItem.separator === true) {
      return listItem.label;
    }
    let numReviews = listItem.numReviews || 0;
    let rating = listItem.rating || 0;
    let numHighRatings = listItem.numHighRatings || 0;
    if (numReviews > 0) {
      // rating = '\u2605'.repeat(Math.round(listItem.rating || 0));
      // if (rating === '') {
      //   rating = '-';
      // }
      rating = (rating).toLocaleString('en');
      numReviews = `${(numReviews).toLocaleString('en')}`;
      numHighRatings = `${round(parseInt(numHighRatings, 10) / parseInt(numReviews, 10) * 100, 0)}%`;
    }
    if (numReviews === 0) {
      numReviews = '';
      rating = '';
      numHighRatings = '';
      // highRatingsSubText = '';
    }
    let label = '';
    let description = '';
    if (listItem.label != null) {
      ({ label } = listItem);
    }
    if (listItem.description != null) {
      ({ description } = listItem);
    }
    let typeClass = 'topic_button__type_icon_generic';
    const { type } = listItem;
    if (type === 'presentation') {
      typeClass = 'topic_button__type_icon_presentation';
    } else if (type === 'singlePage') {
      typeClass = 'topic_button__type_icon_singlePage';
    }

    return <table className="topic_button__listItem">
      <tbody>
      <tr>
        <td className="topic_button__type">
          <div className={typeClass}>
          </div>
        </td>
        <td className="topic_button__label">
          <div className="topic_button__label_title">
            {label}
          </div>
          <div className="topic_button__label_description">
            {description}
          </div>
        </td>
        <td className="topic_button__rating">
          <div className="topic_button__rating_value">
            {rating}
          </div>
        </td>
        <td className="topic_button__rating">
          <div className="topic_button__rating_value">
            {numHighRatings}
          </div>
        </td>
        <td className="topic_button__rating">
          <div className="topic_button__rating_value">
            {numReviews}
          </div>
        </td>
      </tr>
      </tbody>
    </table>;
  }

  // eslint-disable-next-line class-methods-use-this
  renderTitle() {
    return <table className="topic_button__listItem topic_button_listItem_title">
      <tbody>
      <tr>
        <td className="topic_button__type">
          <div className="topic_button__type_title">
            Type
          </div>
        </td>
        <td className="topic_button__label">
          <div className="topic_button__label_title">
            Version
          </div>
        </td>
        <td className="topic_button__rating">
          <div className="topic_button__rating_num_reviews">
            Ave
          </div>
          <div className="topic_button__rating_num_reviews">
            Rating
          </div>
        </td>
        <td className="topic_button__rating">
          <div className="topic_button__rating_value">
            {'\u2605\u2605\u2605\u2605'}
          </div>
          <div className="topic_button__rating_num_reviews">
            {'or more'}
          </div>
        </td>
        <td className="topic_button__rating">
          <div className="topic_button__rating_num_reviews">
            Num
          </div>
          <div className="topic_button__rating_num_reviews">
            Ratings
          </div>
        </td>
      </tr>
      </tbody>
    </table>;
  }

  render() {
    const props = Object.assign({}, this.props);
    const listItems = [];
    let addTitle = false;
    props.list.forEach((listElement) => {
      if (listElement.numReviews != null && listElement.numReviews > 0) {
        addTitle = true;
      }
    });
    if (addTitle) {
      listItems.push({ label: this.renderTitle() });
    }
    props.list.forEach((listElement) => {
      listItems.push({
        label: this.renderListLabel(listElement),
        link: listElement.link,
        active: listElement.active,
        separator: listElement.separator == null ? false : listElement.separator,
      });
    });
    return <DropDownButtonBase
      label={props.label}
      id={props.id}
      direction={props.direction}
      xAlign={props.xAlign}
      list={listItems}
      selected={props.selected}
      classes='topic_button'
    />;
  }
}
