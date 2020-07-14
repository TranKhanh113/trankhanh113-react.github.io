import React, { Component } from 'react'

export default class RenderWithState extends Component {
    //this.state:  thuoc tinh chua nhung gia tri thay doikhi nguoi dung thao tac tren giao dien. day la thuoc tinh co san cua component

    state = {
        isLogin : false
    }

    userName = 'Tuan';
    renderContent =()=>{
         if(this.state.isLogin){
            return <p>Hello {this.userName}</p>;
        }
        return <button onClick={()=>{
            this.login();
        }}> Dang Nhap</button>;
    }
    login = ()=>{
        // this.isLogin = true;
        // console.log(this.isLogin);
        // this.render();
        let newState ={
            isLogin : true
        }
        //phuong thuc this.state: la 1 phuong thuc co san cua component lam 2 nv: 1: thay doi gia tri state, 2: goi la this.render render lai giao dien
        this.setState(newState);
    }
    render() {
        return (
            <div>
                {/* {this.isLogin ? <p>Hello {this.userName}</p>: <button> Dang Nhap</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}
