import React from 'react';

function ProductItem(props) {
    return (
        <div>
            <h3>{props.product.name}</h3>
            <div style={{ display: !props.product.price && 'none' }}>
                Price: {props.product.price.toLocaleString('en-us', { style: 'currency', currency: 'USD' })}
            </div>
            <div style={{ display: !props.product.description && 'none' }}>
                About: {props.product.description}
            </div>
            <hr />
        </div >
    );
}

export default ProductItem;