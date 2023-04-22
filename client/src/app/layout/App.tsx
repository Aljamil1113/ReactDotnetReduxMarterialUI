import { useEffect, useState } from "react";
import { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:7019/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => [...prevState, 
      { id: prevState.length + 101,
        name: 'Product' + (prevState.length + 1), 
        price: (prevState.length * 100) + 100,
        brand: 'some brand',
        type: 'some types',
        description: 'some description',
        pictureUrl: 'http/picsum.photos/109',
        quantity: 1
    }])
  }

  return (
    <div>
      <h1>Re-Store</h1>
      <Catalog products={products} addProduct={addProduct}/>
    </div>
  );
}

export default App;
