import "./App.css"
import Header, { users } from './Header';
import Footer from "./Footer.jsx"
import Card_ from "./Cards/Card.jsx"
import LogIn from "./LogIn.jsx"


function App() {

  const logedIn = true;

  const cards = users.map(user => {
                          const text = `Hello my name is ${user.name} and i'm ${user.age} years old`;
                          return (
                          <Card_ 
                          key={user.name}
                           no={Math.floor(Math.random() * (9 - 1) + 1)} 
                           name={user.name} 
                           title={user.name} 
                           text={text} />)})

  return ( logedIn ?
    <>
      <Header />
      <div className="card_container">
        {cards}
      </div>
      <Footer />
    </> :
    <LogIn /> 
  )
}

export default App
