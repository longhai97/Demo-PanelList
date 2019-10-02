import React, { Component } from 'react';

export default class Button extends Component {

    render() {
        const { type, onClick } = this.props;
        const buttonStyle = style[type] || style['default'];

        return (
            <button style={buttonStyle} onClick={onClick}>
                {this.props.children}
            </button>
        );
    }
}

const style = {
    default: {

    },
    success: {
        background: '#39b54a',
        borderRadius: 3,
        border: 'solid 0.5px #cccccc',
        padding: '10px 20px',
        color: '#fff',
        fontSize: 12,
        lineHeight: 1.2
    }
};
