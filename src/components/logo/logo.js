import React, { Component } from 'react';
import './logo.scss';

class Logo extends Component {
    render() {
        return (
            <div>
                <svg id="headphones-logo" data-name="headphones-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100">
                    <title>Headphones Logo</title>
                    <path d="M147.5,101.5v-71a12,12,0,0,0-12-12h-71a12,12,0,0,0-12,12v71a12,12,0,0,0-12,12v56a12,12,0,0,0,12,12h10a12,12,0,0,0,12-12v-56a12,12,0,0,0-12-12v-71a2,2,0,0,1,2-2h71a2,2,0,0,1,2,2v71a12,12,0,0,0-12,12v56a12,12,0,0,0,12,12h10a12,12,0,0,0,12-12v-56A12,12,0,0,0,147.5,101.5Z"/>
                </svg>
            </div>
        )
    }
}

export default Logo;