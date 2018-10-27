import React, {Component} from "react";
import {connect} from 'react-redux';

import {getAllLectures} from "../actions";
import Slider from "./Slider";
import SliderArrow from "./SliderArrow";

import {NEXT, PREV} from './SliderArrow';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            firstColumn: 1,
            numberOfItemsPerSlide: 4,
        }

        this.getNumberOfPages = this.getNumberOfPages.bind(this);
    }

    componentDidMount() {
        this.props.getAllLectures().then(result => {
        });
    }

    getNumberOfPages() {
        return Math.round(this.props.lectures.length / this.state.numberOfItemsPerSlide);
    }

    getInformation() {
        if (this.props.lectures) {
            return (
                <div className="row">
                    <div className="col text-center pt-4">
                        {this.state.currentPage}/
                        {this.getNumberOfPages()}
                    </div>
                </div>
            );
        }
    }

    getSlider() {
        if (this.props.lectures) {
            return (
                <Slider sliderId='lectureSlider'
                        items={this.props.lectures}
                        numberOfItemsPerSlide={this.state.numberOfItemsPerSlide}/>
            );
        }
    }

    getSliderArrows() {
        return (
            <div className="container p-3">
                <div className="row">
                    <div className="col-6 text-right">
                        <SliderArrow targetSliderId='lectureSlider' direction={PREV}/>
                    </div>
                    <div className="col-6 text-left">
                        <SliderArrow targetSliderId='lectureSlider' direction={NEXT}/>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.lectures) {
            return (
                <div>
                    {this.getSliderArrows()}
                    {this.getSlider()}
                </div>
            );
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col text-center p-4">
                            <FontAwesomeIcon icon={faSpinner} pulse className='fa-3x spinner'/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return ({
        lectures: state.lectures.lectures
    });
}

export default connect(mapStateToProps, {getAllLectures})(Home);