
export const users = [{name: "Mario", age: 44}, 
    {name: "Dino", age: 17}, 
    {name: "potato", age: 18}];

function Header(){

    users.sort((a, b) => a.name.localeCompare(b.name));

    const usersList = users.map(user => <li key={user.name}>{user.name}: {user.age} years old</li>)

    return(
        <header>
            <h1>Welcome back Trakonor</h1>
            <nav>
                <ul>
                    {usersList}
                </ul>
            </nav>
        </header>
    )
}

export default Header