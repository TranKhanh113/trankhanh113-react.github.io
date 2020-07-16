import React from 'react'

export default function FunctionProp(props) {
    return (
        <div className="container">
                <h2>State less component</h2>
                <div className="card text-left">
                    <img className="card-img-top" src={props.hinhanh2.srcImg} alt="123" style={{width:"300px"}}/>
                    <div className="card-body">
                        <h4 className="card-title">{props.hinhanh2.name}</h4>
                        <p className="card-text">{props.hinhanh2.type}</p>
                    </div>
                </div>

            </div>
    )
}
