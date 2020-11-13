import React, { Component } from 'react';
import Photowall from './PhotoWall';
import AddPhoto from './AddPhoto';
import { Link, Route } from 'react-router-dom';

class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Photowall</Link>
                </h1>
                <Route exact path="/" render={() => (
                    <div>
                        <Photowall {...this.props} />
                    </div>
                )} />
                <Route path="/AddPhoto" render={({ history }) => (
                    <AddPhoto {...this.props} onHistory={history} />
                )} />
            </div>
        )
    }
}

export default Main;