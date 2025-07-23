
const Greeting = ({name}) => <h1>Hello, world! {name}</h1>
function Letter(props){
  return <h2>How are you {props.firstname}?</h2>
}
function App() {


  return (
    <>
      <Greeting name = "Sai Prasad" />
      <Letter firstname = "Sai"/>
    </>
  )
}

export default App
