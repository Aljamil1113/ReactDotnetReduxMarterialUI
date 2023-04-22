import { useEffect, useState } from "react";
import { Product } from "./product";

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

      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name} - {product.price}</li>
        ))}
      </ul>

      <button onClick={addProduct} >Add Product</button>
    </div>
  );
}

export default App;
