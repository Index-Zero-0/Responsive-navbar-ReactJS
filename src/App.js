import React from 'react';
import Navbar from "./Components/Navbar";
import  {Work}   from "./Components/Work";
import  {Home}   from "./Components/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
	return (
		<>
		<Navbar/>
		<Router>
			<Routes>
				<Route  path="/" element={ <Home />} />
				<Route  path="/work" element={ <Work />} />
			</Routes>

		</Router>
		</>
	);
}

export default App;
