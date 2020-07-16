import React, { Component } from 'react'

export default class ClassProps extends Component {
    render() {
        const {image,name,type} = this.props.hinhanh;
        return (
            <div className="container">
                <h2>Stateful component</h2>
                <div className="card text-left">
                    {/* <img className="card-img-top" src={this.props.hinhanh.image} style={{width:"300px"}}/> */}
                    <img className="card-img-top" src={image} style={{width:"300px"}}/>
                    <div className="card-body">
                        {/* <h4 className="card-title">{this.props.hinhanh.name}</h4> */}
                        <h4 className="card-title">{name}</h4>
                        {/* <p className="card-text">{this.props.hinhanh.type}</p> */}
                        <p className="card-text">{type}</p>
                    </div>
                </div>

            </div>
        )
    }
}
