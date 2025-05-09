import { useState } from "react";

export let users = [
  { name: "Mario", age: 44 },
  { name: "Dino", age: 17 },
  { name: "Potato", age: 18 },
];

let img = `https://dummyimage.com/300X200/920/fff&text=Guest`;

function Header() {
  let [userss, setUserss] = useState([
    { name: "Mario", age: 44 },
    { name: "Dino", age: 17 },
    { name: "Potato", age: 18 },
  ]);

  let [name, setName] = useState();
  let [age, setAge] = useState();

  const changeName = (event) => {
    let newName = event.target.value;
    setName(newName);

    img = `https://dummyimage.com/300X200/92${
      Math.floor(Math.random() * 9) + 1
    }/fff&text=${newName ? newName : "Guest"}`;
  };

  const changeAge = (event) => {
    setAge(event.target.value);
  };

  function addUser() {
    const newUser = { name: name, age: age };

    setUserss((u) => [...u, newUser]);
  }

  userss.sort((a, b) => b.age - a.age);

  const usersList = userss.map((user) => (
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
      <div className="divContainer">
        <h1>Add a user</h1>
        <div className="inputs">
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
        <p>The text will be:</p>
        <p style={{ color: "aqua" }}>
          Hello my name is {name ? name : "Guest"} and I'm {age ? age : 0} years
          old
        </p>
        <p style={{ color: "aliceblue" }}>The image will be:</p>
        <img src={img} /> <br /> <br />
        <button onClick={addUser}>Add user</button>
      </div>
    </>
  );
}

export default Header;
