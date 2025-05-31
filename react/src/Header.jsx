import { useState } from "react";
import SplitText from "./components/SplitText";

let splitText = (
  <SplitText
    text="Welcome back Trakonor"
    className="text-2xl font-semibold text-center"
    delay={50}
    animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
    animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
    easing="easeOutCubic"
    threshold={0.2}
    rootMargin="-50px"
  />
);

let img = `https://dummyimage.com/300X200/920/fff&text=Guest`;

function Header({ users, setUsers }) {
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
    if (!name || !age) return;
    const newUser = { name: name, age: age };

    setUsers((u) => [...u, newUser]);

    setAge("");
    setName("");
  }

  //users.sort((a, b) => b.age - a.age);

  // for ascending order a->z
  users.sort((a, b) => a.name.localeCompare(b.name));

  const usersList = users.map((user) => (
    <li key={user.name}>
      {user.name}: {user.age} years old
    </li>
  ));

  return (
    <>
      <header>
        <h1>
          <b>{splitText}</b>
        </h1>
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
        <img style={{ borderRadius: "5px" }} src={img} /> <br /> <br />
        <button onClick={addUser}>Add user</button>
      </div>
    </>
  );
}

export default Header;
