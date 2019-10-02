import React, {Component} from 'react';
import Button from "./ui/Button";
import PanelList from "./ui/PanelList";
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import {images} from "./assets";


export default class App extends Component {

    render() {

        const data = ['20 NOV 2018','20 NOV 2018','20 NOV 2018'];
        const { type } = this.props;
        const signDateStyle = style[type];

        return (
            <div style={{backgroundColor: '#eff3f6'}}>

                <Button type={'success'} onClick={() => {
                    console.log('Hello world');
                }}>
                    <i className={'fa fa-plus'}/> &nbsp;
                    Create new
                </Button>

                <PanelList
                    list={data}
                    renderItem={item => {

                        return (
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-evenly',
                                alignItems: 'center'
                            }}>
                                <div>
                                <img
                                    style={{width:40, height:40}}
                                    src={images.arrowRight}
                                    alt={'arrowRight'}
                                />
                                </div>
                                <div style={signDateStyle}>
                                    <div>Sign date: {item.data}</div>
                                    <div>index: {item.index}</div>
                                </div>

                                <img
                                    style={{width: 10, height: 15}}
                                    src={images.more}
                                    alt={'more'}
                                />
                            </div>)
                    }}
                />
            </div>
        );
    }
}

const style = {
    signDate: {
        display: 'flex',
        flexiDrection: 'column-reverse'
    }
}

