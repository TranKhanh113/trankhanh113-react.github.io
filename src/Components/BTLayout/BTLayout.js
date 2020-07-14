//rcc
import React, { Component } from 'react'
import BTHeader from './BTHeader'
import BTCarousel from './BTCarousel'
import BTLaptop from './BTLaptop'
import BTPhone from './BTPhone'
import BTProduct from './BTProduct'

export default class BTLayout extends Component {
    //noi dung giao dien react class component chua trong phuong thuc render
    render() {
        return (
            <div>
                <BTHeader/>
                <BTCarousel/>
                <BTPhone />
                <BTLaptop />
                <BTProduct />
            </div>
        )
    }
}
