import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import Home from './home/components/Home';

export default class App extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <Route path='/' exact={true} component={Home}/>
            </div>
        );
    }
}
