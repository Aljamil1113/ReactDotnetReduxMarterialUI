import { Button} from "@mui/material";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";


export default function Catalog() {
    
    const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    agent.Catalog.list().then(products => setProducts(products));
  }, [])

  function addProduct() {
    setProducts(prevState => [...prevState, 
      { id: prevState.length + 101,
        name: 'Product' + (prevState.length + 1), 
        price: (prevState.length * 100) + 100,
        brand: 'some brand',
        type: 'some types',
        description: 'some description',
        pictureUrl: 'http://picsum.photos/109',
        quantity: 1
    }])
  }
    return (
        <>
            <ProductList products={products}/>
            <Button variant="contained" onClick={addProduct} >Add Product</Button>
        </>
    )

}