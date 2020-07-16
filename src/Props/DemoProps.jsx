import React, { Component } from 'react'
import ClassProps from './ClassProps'
import FunctionProp from './FunctionProp'

export default class DemoProps extends Component {
    render() {
        const url= {
            image:"https:/picsum.photos/400/300/",
            name: "random",
            type: "image"
        }
        const url2 ={
            srcImg:"https:/picsum.photos/400/300/",
            name: "test",
            type: "img"
        }
        return (
            <div>
                <h1>Demo Props</h1>
                <ClassProps hinhanh ={url} />
                <FunctionProp hinhanh2 ={url2} />
            </div>
        )
    }
}
