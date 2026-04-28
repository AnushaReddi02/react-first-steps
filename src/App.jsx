import './App.css'
import Title from "./Title.jsx"
import Product from "./Product"


function App() {
  return (
    <div>
      {/* <h1>This is an app component</h1>
      <p>Inside app component : </p> 
      <Title /> */}
       <Product title="Laptop" price={50000} />
       <Product title="Phone" price={20000}/>
       <Product title="Dress" price={1200}/>
    
  </div>
  )
}

export default App;
