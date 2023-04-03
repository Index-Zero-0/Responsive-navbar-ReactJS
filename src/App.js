
import  {Home}   from "./Components/Home";
import  {Work}   from "./Components/Work";

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import RootLayout from './Components/RootLayout';
import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);
const router=createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />}/>
			<Route path="Work" element={<Work />}/>
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

export default withAuthenticator(App);