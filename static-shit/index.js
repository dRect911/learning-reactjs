


function Page(){
    return(
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
}



ReactDOM.render(<Page />, document.getElementById("root"))