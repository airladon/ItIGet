// // @flow

import React from 'react';
import ReactDOM from 'react-dom';
// import '../../../css/style.scss';
import Navbar from '../../components/navbar';
import LessonComponent from '../../components/lesson';
import Lesson from '../../Lesson/Lesson';
import { LessonContent } from '../../Lesson/LessonContent';
import NavbarSpacer from '../../components/navbarSpacer';
import Footer from '../../components/footer';

const renderLesson = (content: LessonContent, lessonDetails: Object, versionDetails: Object) => {
  const lessonId: HTMLElement | null = document.getElementById('single-page-lesson');
  const lesson = new Lesson(content);
  console.log(versionDetails)
  if (lessonId instanceof HTMLElement) {
    ReactDOM.render(
      <div>
        <Navbar active='Single Page Lesson'/>
        <NavbarSpacer/>
        <div>
          <div>
            <div>
              <LessonComponent
                lesson={lesson}
                lessonDetails={lessonDetails}
                versionDetails={versionDetails}
              />
            </div>
          </div>
        </div>
        <Footer/>
      </div>,
      lessonId,
    );
  }
};

export default renderLesson;
