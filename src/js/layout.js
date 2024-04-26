import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ContactList } from "./views/contactlist";
import { Form } from "./views/form";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";
	return (
		<div>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Routes>
						<Route path="/" element={<ContactList />} />
						<Route path="/form" element={<Form />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
