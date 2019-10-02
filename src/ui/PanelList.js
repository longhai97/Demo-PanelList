import React, { Component } from 'react';

export class PanelListItem extends Component {

    render() {
        return (
            <div style={style.panelItemStyle}>
                { this.props.children }
            </div>
        );
    }
}

export default class PanelList extends Component {

    render() {
        const { list, renderItem } = this.props;

        return (
            <ul style={style.panelListStyle }>
                {
                    list.map((data, index) => {
                        return (
                            <li key={index}>
                                <PanelListItem>
                                    { renderItem({ data, index }) }
                                </PanelListItem>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

const style = {
    panelListStyle: {
        listStyle: 'none',
    },
    panelItemStyle: {
        borderRadius: 3,
        border: 'solid 0.5px #cccccc',
        padding: '40px 0px',
        margin: '5px 0px',
        backgroundColor:'#fff'
    },
};
