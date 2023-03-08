import React from 'react';
import  {Work}   from "./Components/Work";
import  {Home}   from "./Components/Home";

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
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
		
		<RouterProvider router={router} />
		</>
	);
}

export default App;
