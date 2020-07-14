import React, { Component } from 'react'

export default class EventBinding extends Component {
    handleClick =()=>{
        alert('Hello');
    }
    showMessage=(mess)=>{
        alert('Hello '+ mess);
    }
    render() {
        return (
            <div className="container">
                {/* cach 1: truyen callback function xu li su kien */}
                {/* <button onClick={()=>{
                    alert('hello');
                }}>Click me!</button> */}
                <button onClick={this.handleClick}>Click me!</button>
                <button onClick={this.showMessage.bind(this,'Cybersoft')}>Show Message</button>
                <br/>
                <br/>
                {/* cach 2: dung arrowfunction (uu tien dung)*/}
                <button onClick={()=>{
                    this.handleClick();
                }}>Click me!</button>
                <br/>
                <br/>
                <button onClick={()=>{
                    this.showMessage('Cybersoft');
                }}>Show Message</button>
            </div>
        )
    }
}
