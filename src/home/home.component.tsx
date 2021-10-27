import React from 'react';

import Home from './home.model';

/*
type HomeProps = {
    name: string;
}
*/

class HomeComponent extends React.Component<Home> {

    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

export default HomeComponent;