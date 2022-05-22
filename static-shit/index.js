

/*
ReactDOM.render(<h1>Hello world!</h1>, document.getElementById("root"))
ReactDOM.render(<p>Sup homie!</p>, document.getElementById("root"))
*/

/*
function MainContent(){
    return (
        <div>
            <h1>Random Content</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

    )
}
*/

//some code in a var
/*
const navbar = (
    <nav>
        <h1>ReActive</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)
*/

const page =(
    <div>
        <img src="./react-logo-text.png" width="150px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has wll over 100K satrs on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)



ReactDOM.render(page, document.getElementById("root"))