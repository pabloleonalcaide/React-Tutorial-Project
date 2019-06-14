import React from 'react'
import propsTypes from 'prop-types'
class Product extends React.Component {

    onAmountChange = (e) => {
        const { name, onProductChange} = this. props;
        const newAmount = parseInt(e.target.value,10);
        onProductChange(name, newAmount);
    }
    render(){
        const {name, desc, price } = this.props
    
        return(
        <tr>  
            <td>{name}</td>
            <td>{desc}</td>
            <td>{price}</td>
            <td><input type="number" onChange={this.onAmountChange}></input> </td>
        </tr>
        );
    }
}

Product.propsTypes = {
    name: propsTypes.string.isRequired,
    desc: propsTypes.string,
    price: propsTypes.number.isRequired,
    onProductChange: propsTypes.func.isRequired
}


export default Product;