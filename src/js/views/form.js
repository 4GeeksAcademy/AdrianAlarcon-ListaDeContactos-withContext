import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Form = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const addContactHandler = (e) => {
		e.preventDefault();

		const newContact = {
			name: fullName,
			phone: phone,
			email: email,
			address: address
		}

		actions.createContact(newContact);

		setFullName("");
		setEmail("");
		setPhone("");
		setAddress("");
	}

	return (
		<div className="container">
			<h1 className=" text-center">Add a new contact</h1>
			<form onSubmit={addContactHandler}>
				<div className="form-group mb-3">
					<label className="mb-2" htmlFor="fullName">Full Name</label>
					<input type="text" className="form-control" id="fullName" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
				</div>
				<div className="form-group mb-3">
					<label className="mb-2" htmlFor="email">Email</label>
					<input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div className="form-group mb-3">
					<label className="mb-2" htmlFor="phone">Phone</label>
					<input type="tel" className="form-control" id="phone" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
				</div>
				<div className="form-group mb-3">
					<label className="mb-2" htmlFor="address">Address</label>
					<input type="text" className="form-control" id="address" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)} />
				</div>
				<button type="submit" className="btn btn-primary btn-block w-100">Save</button>
				<br />
				<Link to="/">or get back to contacts</Link>
			</form>
		</div>
	);
};
