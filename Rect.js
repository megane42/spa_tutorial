import React from 'react'

export default class Rect extends React.Component {
    constructor (props) {
        super(props);
        this.state     = { number : this.props.initialNum };
        this.rectStyle = {
            background    : this.props.bgcolor,
            display       : 'table-cell',
            border        : '1px #000 solid',
            fontSize      : 20,
            width         : 30,
            height        : 30,
            textAlign     : 'center',
            verticalAlign : 'center',
        };
        this.textStyle = {
            color : '#eeeeee'
        };
    }

    countUp () {
        this.setState({ number : this.state.number + 1 })
    }

    render () {
        return (
            <div style={ this.rectStyle } onClick={ (e) => this.countUp() }>
                <span style={ this.textStyle }>{ this.state.number }</span>
            </div>
        )
    }
}
