import React, { Component } from 'react'
import styleDataBinding from './DataBinding.module.css';

export default class DataBinding extends Component {
    sanPham ={
        maSP: 1,
        tenSp: 'Iphone X',
        gia: 1000,
        hinhAnh: 'https:/picsum.photos/400/300'
    }
    //phuong thuc:
    renderThongTin = ()=>{
        return (
            <div className="card w-25">
                    <img src={this.sanPham.hinhAnh} alt="12" className="card-img-top" />
                    <h4 className={`${styleDataBinding.header} card-title`}>Ten: {this.sanPham.tenSp}</h4>
                    <p className="card-text">Gia: {this.sanPham.gia}</p>
                </div>
        )
    }
    //phuong thuc render: la phuong thuc co san  cua component de hien thi giao dien
    render() {
        //binding du lieu la bien
        let title ='Cybersoft';
        let scrImg = 'https:/picsum.photos/400/300'
        let hocVien = {
            ma: 1,
            ten: 'nguyen van A',
            tuoi:18
        }
        //binding du lieu la ham
        const renderImg =()=>{
            //return component ve jsx; noi dung ham tra ve 1 so, chuoi, hoac the html, hoac component co duy nhat 1 the bao phu
            return (<div>
                <img src="https:/picsum.photos/400/300"/>
            </div> )
        }
        return (
            <div>
                <h1 id="title">{title}</h1>
                <img src={scrImg} alt={scrImg} />
                <div className="card w-25">
                    <img src={this.sanPham.hinhAnh} alt="12" className="card-img-top" />
                    <h4 className="card-title">Ten: {this.sanPham.tenSp}</h4>
                    <p className="card-text">Gia: {this.sanPham.gia}</p>
                </div>
                <div className="container">
                    {renderImg()}
                    {this.renderThongTin()}
                </div>
            </div>
        )
    }
}
