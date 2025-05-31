import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card_ from "./Cards/Card.jsx";
import LogIn from "./LogIn.jsx";
import Counter from "./Counter.jsx";
import InterestRate from "./InterestRate.jsx";
import { useState } from "react";

function App() {
  let [users, setUsers] = useState([
    { name: "Mario", age: 44 },
    { name: "Dino", age: 17 },
    { name: "Potato", age: 18 },
  ]);

  //users.sort((a, b) => b.age - a.age);

  // for ascending order a->z
  users.sort((a, b) => a.name.localeCompare(b.name));

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
      <Header users={users} setUsers={setUsers} />
      <div className="card_container">{cards}</div>
      <Counter />
      <InterestRate />
      <Footer />
    </>
  ) : (
    <LogIn />
  );
}

export default App;
