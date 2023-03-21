import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header';
import Home from "./components/Home";
import Cart from "./components/Cart";
import './App.css';

function App() {

	return (
		<BrowserRouter>
			<Header/>
			<div>
				<Route path="/" exact>
					<Home/>
				</Route>
				<Route path="/cart" exact>
					<Cart/>
				</Route>
			</div>
		</BrowserRouter>
	)
}

export default App;
