import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productsSelectors } from "./catalogSlice";


export default function Catalog() {
  const products = useAppSelector(productsSelectors.selectAll);
  const {productsLoaded, status} = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
      if(!productsLoaded) dispatch(fetchProductsAsync());
  }, [])

    if (status.includes('pending')) return <LoadingComponent message="Loading products..." />

    return (
        <>
            <ProductList products={products}/>
        </>
    )

}