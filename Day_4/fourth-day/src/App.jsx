function Languages (){
  const languages = ["JavaScript", "Python", "Java", "C++"];
  return (
  <>
  {languages.length >0 ?<ol>
  {languages.map((lang, index) => (
    <li key={index}> {lang}</li>
  ))}
</ol>
: 'bye'}
  </>
  )
}

function Games (){
  const games = ["Minecraft", "League of Legends", "Fortnite", "PUBG"];
  return (
    <>
    {games.length>0? <ol>{games.map((game, length)=>(
      <li key={length}>{game}</li>
    ))}</ol> :'tata'}
    </>
  )

}
function Clubs (){
  const clubs = ["React", "Redux", "Node", "Express"];
  return(
    <>
    {clubs.length >0 ? <ol>{clubs.map((club, index)=>{
      return <li key ={index}>{club}</li>
    })}</ol>:"hi"}
    </>
  )
}

function Sports({name, player}){
return(
  <>
  <h2>{name}</h2>
  <p>{player}</p>
  </>
)
}
function App() {
  const todo = ["Learn", "Code", "Apply"];

  return (
    <>
      <h1>Todo List</h1>
      {todo.length > 0 ? (
        todo.map((item, index) => (
          <li key={index}>{index + 1}. {item}</li>
        ))
      ) : (
        <p>bye</p>
      )}
      <br/>
      <Languages />
      <br/>
      <br/>
      <Games />
      <br/>
      <Sports name="Cricket" player="Sachin Tendulkar" />
      <Sports name="Football" player="Ronaldo" />
      <br/>
      <Clubs />
    </>
  );
}

export default App;
