import React, { Component } from 'react'

export default class RenderWithMap extends Component {

    productList= [
        {id:1,name:'Iphone 2G',price:1000},
        {id:2,name:'Iphone 3G',price:2000},
        {id:3,name:'Iphone 4',price:3000}
    ]
    renderProductList = ()=>{
        let arrProductJSX =[];
        // // cach 1:

        // for(let i = 0;i < this.productList.length;i++){
        //     //duyet mang, lay ra cac phan tu
        //     let product = this.productList[i];
        //     let trProduct = <tr key={i}>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td>
        //             <button className="btn btn-danger">Delete</button>
        //             <button className="btn btn-success ml-3">Update</button>
        //         </td>
        //     </tr>
        //     //push vao mang kq
        //     arrProductJSX.push(trProduct);
        // }
        

        //cach 2:
        arrProductJSX = this.productList.map((productItem,index)=>{
            return <tr key={index}>
                    <td>{productItem.id}</td>
                    <td>{productItem.name}</td>
                    <td>{productItem.price}</td>
                    <td>
                         <button className="btn btn-danger">Delete</button>
                        <button className="btn btn-success ml-3">Update</button>
                   </td>
                </tr>
        })
        return arrProductJSX;
    }

    render() {
        return (
            <div className="container text-center">
                <h3>Product list</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderProductList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
