
import './App.css'

function App() {
  
   const products = [
  { id: 1, name: 'Laptop', price: 1200, category: 'Electronics' },
  { id: 2, name: 'T-Shirt', price: 25, category: 'Apparel' },
  { id: 3, name: 'Mouse', price: 50, category: 'Electronics' },
  { id: 4, name: 'Jeans', price: 75, category: 'Apparel' },
  { id: 5, name: 'Keyboard', price: 150, category: 'Electronics' },
];

let electronicsProducts = products.filter(product => product.category === 'Electronics');
  // 2. Map the filtered products to JSX list items
  const productListItems = electronicsProducts.map(product => (
    <li key={product.id}>
      {product.name} - ${product.price}
    </li>
  ));

  return (
   <>
      <h2>Electronics Products</h2>
      <ul>
        {productListItems}
      </ul>
    </>
  )
}

export default App
