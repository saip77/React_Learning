function Greeting({name, age}) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}
function Bye(props){
  return <h2>Bye {props.name}!</h2>
}
function App() {


  return (
    <>
      <Greeting name = "Sai Prasad" age = {25} />
      <Bye name = "Hi"/>
    </>
  )
}

export default App
