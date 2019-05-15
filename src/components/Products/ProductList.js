import React from 'react';
import products from '../data/products'
import ProductItem from './ProductItem'

function ProductList() {
    const productComponents = products.map((item) => <ProductItem key={item.id} product={item} />);

    return (
        <div>
            {productComponents}
        </div>
    );
}

export default ProductList;