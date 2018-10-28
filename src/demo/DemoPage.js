import React, {Component} from 'react';

import Slider from '../Slider';
import SliderArrow, {PREV} from '../SliderArrow';
import { NEXT } from '../SliderArrow';

export default class DemoPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            boxesPerSlide: 4
        }
    }

    getLectures() {
        let lectures = [];
        lectures.push(
            {
                id: 0,
                title: 'Build an app with React, Redux and Firestore from scratch',
                description: 'Learn how to build a web app with React, Redux and Firestore from beginning to publishing',
                author: 'Maximilian Schwarzmüller',
                prize: '7.99'
            }
        );
        lectures.push(
            {
                id: 1,
                title: 'JavaScript Algorithms',
                description: 'Learning to Solve JavaScript Algorithms as a JavaScript Newbie',
                author: 'Dávid Csejtei',
                prize: '24.99'
            }
        );
        lectures.push(
            {
                id: 2,
                title: 'The Essential Algorithms and Data Structures',
                description: 'Learn how to master the most important algorithms and data structures to become a professional-grade engineer',
                author: 'Brad Traversy',
                prize: '19'
            }
        );
        lectures.push(
            {
                id: 3,
                title: 'React 16 - The Complete Guide (incl. React Router 4 & Redux)',
                description: 'Dive in and learn React from scratch! Learn Reactjs, Redux, React Routing, Animations, Next.js basics and way more!',
                author: 'Dávid Csejtei',
                prize: '99.99'
            }
        );
        lectures.push(
            {
                id: 4,
                title: 'aaaaa',
                description: 'Learn how to build a web app with React, Redux and Firestore from beginning to publishing',
                author: 'Maximilian Schwarzmüller',
                prize: '7.99'
            }
        );
        lectures.push(
            {
                id: 5,
                title: 'bbb',
                description: 'Learning to Solve JavaScript Algorithms as a JavaScript Newbie',
                author: 'Dávid Csejtei',
                prize: '24.99'
            }
        );
        lectures.push(
            {
                id: 6,
                title: 'cccc',
                description: 'Learn how to master the most important algorithms and data structures to become a professional-grade engineer',
                author: 'Brad Traversy',
                prize: '19'
            }
        );
        lectures.push(
            {
                id: 7,
                title: 'ddd',
                description: 'Learn CSS Flexbox by Building Website Projects',
                author: 'Dávid Csejtei',
                prize: '199.99'
            }
        );
        return lectures;
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col pt-3 pb-3">
                        <h1>Demo page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col p-0">
                        <Slider sliderId='lectureSlider'
                                items={this.getLectures()}
                                numberOfItemsPerSlide={this.state.boxesPerSlide}/>
                    </div>
                    <div className="col-2 p-0">
                        <SliderArrow targetSliderId='lectureSlider' direction={NEXT}/>
                        <SliderArrow targetSliderId='lectureSlider' direction={PREV}/>
                    </div>
                </div>
            </div>
        );
    }
}