import "./App.css"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card_ from "./Cards/Card.jsx"


function App() {

  return (
    <>
      <Header />
      <div className="card_container">
        <Card_ no={1} name="mario" title="No1" text="Hello it's me mario"/>
        <Card_ no={2} name="dino" title="No2" text="Hi it's me dino"/>
        <Card_ no={3} name="potato" title="No3" text="Hi it's me potato"/>
      </div>
      <Footer />
    </>
  )
}

export default App
