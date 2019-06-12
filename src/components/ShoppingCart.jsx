import React from 'react'
import styled from 'styled-components'

import Product from './Product'
const productInfo = {
    book: {desc: 'a book', price: 12},
    pen: {desc: 'a pen', price: 2},
    rubber: {desc: 'a rubber', price: 3},
    pencil: {desc: 'a pencil', price: 1}
}
class ShoppingCart extends React.Component{

    state = {
        book: 0,
        pen: 0,
        rubber: 0,
        pencil: 0
    }
    onProductChange = (productName, amount)=>{
        this.setState({
            [productName]: amount * productInfo[productName].price
        })

    }
    render(){
        return(
            <div>
                <table>
                    <thead>
                        <HeaderRow>
                            <HeaderCell>Name</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Price Unit</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                        </HeaderRow>
                    </thead>
                    <tbody>
                    {
                        Object.keys(productInfo).map(productName => (
                            <Product 
                                name={productName}
                                desc={productInfo[productName].desc}
                                price= {productInfo[productName].price}
                                key={productName}
                                onProductChange={this.onProductChange}
                            />
                    ))
                    }
                    </tbody>
                </table>
                Total: {this.state.book + this.state.pencil + this.state.pen + this.state.rubber}
            </div>
        )

    }
}
const HeaderCell = styled.th` 
    text-align: left;
    font-weight: bold;
`;
const HeaderRow = styled.thead`
    color: teal;
`;

export default ShoppingCart