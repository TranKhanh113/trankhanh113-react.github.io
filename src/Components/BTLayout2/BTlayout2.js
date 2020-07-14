import React, { Component } from 'react'
import BT2Header from './BT2Header'
import BT2Banner from './BT2Banner'
import BTItem from './BTItem'
import BT2Footer from './BT2Footer'

export default class BTlayout2 extends Component {
    render() {
        return (
            <div>
                <BT2Header />
                <BT2Banner />
                <BTItem />
                <BT2Footer />
            </div>
        )
    }
}
