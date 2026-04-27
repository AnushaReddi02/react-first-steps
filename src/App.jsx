import './App.css'


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
  </div>
  )
}

export default App
