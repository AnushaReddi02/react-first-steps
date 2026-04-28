import './App.css'
import Product from "./Product"


function Title() {
  return <h1>I am The Title!</h1>
}

function Description() {
  return <p>I am The Description!</p>
}

function App() {
  return (
    <div>
      <h1>This is an app component</h1>
      <p>Inside app component : </p>
      <Title />
      <Description />
      <Title />
      <Description />

       <Product />
       <Product />
       <Product />
    
  </div>
  )
}

export default App
