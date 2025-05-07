import "./App.css";
import Header, { users } from "./Header/Header.jsx";
import Footer from "./Footer.jsx";
import Card_ from "./Cards/Card.jsx";
import LogIn from "./LogIn.jsx";
import Counter from "./Counter.jsx";

users.sort((a, b) => a.age - b.age);

function App() {
  const logedIn = true;

  const cards = users.map((user) => {
    const text = `Hello my name is ${user.name} and I'm ${user.age} years old`;

    return (
      <Card_
        key={user.name}
        no={Math.floor(Math.random() * 9) + 1}
        name={user.name}
        title={user.name}
        text={text}
      />
    );
  });

  return logedIn ? (
    <>
      <Header />
      <div className="card_container">{cards}</div>
      <Counter />
      <Footer />
    </>
  ) : (
    <LogIn />
  );
}

export default App;
