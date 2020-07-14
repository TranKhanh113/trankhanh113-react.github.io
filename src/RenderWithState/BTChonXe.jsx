import React, { Component } from 'react'
//cac buoc thuc hien
//B1: dan layout
//B2: xac dinh nguon du lieu thay doi => xu ly du lieu
//B3: xu ly chuc nang
export default class BTChonXe extends Component {
    state ={
        scrImg: './img/black-car.jpg'
    }
    changeColor = (color)=>{
        let imgColor = `./img/${color}-car.jpg`
        this.setState({
            scrImg:imgColor
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-6">
                        <img className="w-100" src={this.state.scrImg} alt="1"/>
                    </div>
                    <div className="col-6">
                        <h3>change color</h3>
                        <div className="row">
                            <div className="item col-3">
                                <button onClick={()=>{
                                    this.setState({
                                        scrImg:'./img/red-car.jpg'
                                    })
                                }} className="btn btn-danger">Red color</button>
                            </div>
                            <div className="item col-3">
                                <button onClick={()=>{
                                    this.setState({
                                        scrImg:'./img/silver-car.jpg'
                                    })
                                }} className="btn btn-secondary">Silver color</button>
                            </div>
                            <div className="item col-3">
                                <button onClick={()=>{
                                    this.setState({
                                        scrImg:'./img/black-car.jpg'
                                    })
                                }} className="btn btn-dark">Black color</button>
                            </div>
                            <div className="item col-3">
                                <button onClick={()=>{
                                    this.setState({
                                        scrImg:'./img/steel-car.jpg'
                                    })
                                }} className="btn " style={{backgroundColor: 'gray'}}>Steel color</button>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                
            </div>
        )
    }
}
