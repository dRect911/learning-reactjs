
function Header(){
    return(
        <header>
            <nav className="nav">
                <img src="./react-logo-text.png" className="logo"/>
                <ul className="nav-items">
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>               
            </nav>            
        </header>
    )
}

function Content(){
    return(
        <div className="content">
            <h1>Reasons why i'm excited to learn React</h1>
            <ol>      
                <li>It's a popular library,
                        so i'll be able to fit with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if i know React</li>
            </ol>
        </div>
        
    )
}

function Footer(){
    return(
        <footer className="footer">
            <small className="footer-text">® 2022 Kenneth development. All rights reserved.</small>
        </footer>
    )
}


{/* <h1>Hello i'm {props.name} !</h1> */}

function Page(){
    return(     
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}



ReactDOM.render(<Page />, document.getElementById("root"))