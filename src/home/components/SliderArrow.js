import React, {Component} from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleLeft, faArrowCircleRight, faSpinner} from "@fortawesome/free-solid-svg-icons";

export const NEXT = 'next';
export const PREV = 'prev';

class SliderArrow extends Component {

    scrollToTop() {

    }

    getArrow() {
        return (
            <div className='col'>
                <a href={'#' + this.props.targetSliderId} role="button" data-slide={this.props.direction}>
                    <FontAwesomeIcon icon={this.props.direction == PREV ? faArrowCircleLeft : faArrowCircleRight}
                                     className='fa-3x arrow'
                                     onClick={this.scrollToTop()}/>
                </a>
            </div>
        );
    }

    render() {
        return this.getArrow();
    }
}

export default SliderArrow;