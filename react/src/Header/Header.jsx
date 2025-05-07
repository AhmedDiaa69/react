import { useState } from "react";
import styles from "./Header.module.css";

export let users = [
  { name: "Mario", age: 44 },
  { name: "Dino", age: 17 },
  { name: "Potato", age: 18 },
];

let img = `https://dummyimage.com/300X200/920/fff&text=Guest`;

function Header() {
  let [name, setName] = useState();
  let [age, setAge] = useState();
  const changeName = (event) => {
    setName((n) => (n = event.target.value));

    img = `https://dummyimage.com/300X200/92${
      Math.floor(Math.random() * 9) + 1
    }/fff&text=${name}`;
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };

  users.sort((a, b) => a.age - b.age);

  const usersList = users.map((user) => (
    <li key={user.name}>
      {user.name}: {user.age} years old
    </li>
  ));

  return (
    <>
      <header>
        <h1>Welcome back Trakonor</h1>
        <nav>
          <ul>{usersList}</ul>
        </nav>
      </header>
      <div className={styles.divContainer}>
        <h1 style={{ color: "rgb(240, 248, 255)" }}>Add a user</h1>
        <div className={styles.inputs}>
          Name: <input value={name} onChange={changeName} placeholder="Guest" />
          Age:
          <input
            type="number"
            min={0}
            value={age}
            onChange={changeAge}
            placeholder="0"
          />
        </div>
        <br />
        <p style={{ color: "aliceblue" }}>The text will be:</p>
        <p>
          Hello my name is {name ? name : "Guest"} and I'm {age ? age : 0} years
          old
        </p>
        <p style={{ color: "aliceblue" }}>The image will be:</p>
        <img src={img} />
      </div>
    </>
  );
}

export default Header;
