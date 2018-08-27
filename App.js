import React from 'react'
import Rect  from './Rect'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Rect initialNum={1} bgcolor='#e02020' />
                <Rect initialNum={2} bgcolor='#20e020' />
                <Rect initialNum={3} bgcolor='#2020e0' />
            </div>
        );
    }
}
