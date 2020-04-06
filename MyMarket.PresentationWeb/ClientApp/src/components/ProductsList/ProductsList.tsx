import * as React from 'react';
import './ProductsList.scss';
import { FC, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardFooter, Spinner } from "reactstrap";
import InfiniteScroll from 'react-infinite-scroll-component';

export interface ProductsListStateProps {
    allProductsLoaded: boolean,
    products: {
        id: number,
        name: string,
        description: string,
        imageUrl: string,
        priceFormatted: string,
    }[];
}

export interface ProductsListActionProps {
    loadProducts: (offset: number) => void;
}

export type ProductsListProps = ProductsListStateProps & ProductsListActionProps;

export const ProductsList: FC<ProductsListProps> = (props) => {
    const { allProductsLoaded, products = [], loadProducts } = props;

    const hasProducts = products && products.length;

    useEffect(() => {
        if(!hasProducts) { 
            loadProducts(products.length);
        }
    }, []);

    const items = products.map(product => (
        <Card key={product.id}>
            <CardBody>
                <CardTitle><h4>{product.name}</h4></CardTitle>
                <CardSubtitle>{product.description}</CardSubtitle>
                <div className="img-container">
                    <CardImg width="100%" srcSet={product.imageUrl} alt={product.description} />
                </div>
            </CardBody>
            <CardFooter>{product.priceFormatted}</CardFooter>
        </Card>
    ));

    return (
        <InfiniteScroll
            className="cards-container"
            dataLength={products.length}
            next={() => loadProducts(products.length)}
            hasMore={!allProductsLoaded}
            loader={(<div className="spinner-container"><Spinner color="secondary" /></div>)}
        >
            {items}
        </InfiniteScroll>
    );
}