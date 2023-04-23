import { Product } from '@/model/product';
import { useState } from 'react';
import { pb } from '../../pocketbase';
import { ProductCard } from './components/ProductCard';
import { ServerError, Spinner } from '../../shared/components/core';

export const ShopPage: React.FunctionComponent = () => {
    const [products, setProducts] = useState(new Array<Product>());
    const [isPending, setIsPending] = useState(false);
    const [isError, setIsError] = useState(false);

    const loadData = () => {
        setIsPending(true);
        setIsError(false);
        pb.collection("products")
            .getList<Product>()
            .then((res: { items: Product[] }) => setProducts(res.items))
            .catch(() => setIsError(true))
            .finally(() => setIsPending(false))
    };

    const addToCart = (product: Partial<Product>) => {
        console.log(product);
    };

    const productsList = (
        products.map((product) => (
            <ProductCard
                key={product.id}
                product={product}
                onAddToCart={addToCart} />
        ))
    );

    return (
        <div>
            <h1 className="title">SHOP</h1>
            {isPending && <Spinner />}
            {isError && <ServerError />}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-16'>
                {productsList}
            </div>
            <button className="btn" onClick={loadData}>Load Data</button>
        </div>
    )
};