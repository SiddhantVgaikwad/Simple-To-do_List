import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import './App.css'

//import "./assets/css/index.css";
//import App from "./components/stateful/App";

// Rendering the React App into the HTML DOM Element "root"
ReactDOM.render(
	<React.StrictMode>
		<App/>
	</React.StrictMode>,
	document.getElementById("root")
);

