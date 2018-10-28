import React, {Component} from 'react';
import 'bootstrap';

import '../style/layout.scss';

import firstImage from '../img/01.jpg';

class Slider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            itemsPerSlide: this.props.numberOfItemsPerSlide,
            autoPlay: false,
            items: null
        }
    }

    componentDidMount() {
        this.setState({
            items: this.sliceItemsForSlides()
        });

        $('#'+this.props.sliderId).carousel();
    }

    sliceItemsForSlides() {
        let items = [];
        this.props.items.map((item, index) => {
            if ((index % this.state.itemsPerSlide) == 0) {
                const begin = index;
                const end = (index + (this.state.itemsPerSlide - 1)) + 1;
                items.push(this.props.items.slice(begin, end));
            }
        });
        return items;
    }

    calculateItemWidth() {
        const all = 12;
        const perPage = this.state.itemsPerSlide;
        const itemWidth = Math.round(12 / this.state.itemsPerSlide);
        return 'pb-2 col-12 col-md-' + itemWidth;
    }

    getItem(item) {
        return (
            <div className={this.calculateItemWidth()} key={item.id + Math.random(1000)}>
                <div className="card">
                    <img className="card-img-top" src={firstImage}/>
                    <div className="card-body">
                        <h1>{item.title}</h1>
                        <p className="card-text lead pt-2 pb-2">{} {item.description}</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h2>{item.author}</h2>
                            <h3>&euro;{item.prize}</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getNewSlide(items, index) {
        const itemBaseClassName = 'carousel-item';
        const itemClassName = index == 0 ? itemBaseClassName + ' active' : itemBaseClassName;

        return (
            <div className={itemClassName} key={items[0].id}>
                <div className="row">
                    {
                        items.map((item, index) => {
                            return this.getItem(item)
                        })
                    }
                </div>
            </div>
        );
    }

    render() {
        if (this.state.items) {
            return (
                <div className='container'>
                    <div className="row">
                        <div className="col">
                            <div id={this.props.sliderId} className="carousel slide w-auto" data-interval={this.state.autoPlay} data-ride="carousel">
                                <div className="carousel-inner">
                                    {
                                        this.state.items.map((item, index) => {
                                            return this.getNewSlide(item, index);
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Slider;