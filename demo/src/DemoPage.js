import React, {Component} from 'react';

export default class DemoPage extends Component {

    constructor(props) {
        super(props);

        this.setState = {
            numberOfItemsPerSlide: 4
        }
    }

    componentDidMount() {
        console.log(this.state.numberOfItemsPerSlide);
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col pt-3 pb-3">
                        <h1>Demo page</h1>
                    </div>
                </div>
            </div>
        );
    }
}