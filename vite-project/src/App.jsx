import { useState } from "react";
import "./App.css";
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

{/* <h1>Hello i'm {props.name} !</h1> */}

function App(){
    return(     
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default App;
