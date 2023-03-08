import React from 'react';
import Navbar from "./Components/Navbar";
import  {Work}   from "./Components/Work";
import  {Home}   from "./Components/Home";

import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from './Components/RootLayout';

const router=createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />}/>
			<Route path="work" element={<Work />}/>
		</Route>
	)
)
function App() {
	return (
		<>
		{/* <Navbar/> */}
		<RouterProvider router={router} />
		</>
	);
}

export default App;
