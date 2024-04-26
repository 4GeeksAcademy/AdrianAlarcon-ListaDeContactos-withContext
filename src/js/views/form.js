import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Form = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<h1 className=" text-center">Add a new contact</h1>
			<form>
				<div className="form-group mb-3">
					<label className="mb-2" htmlFor="fullName">Full Name</label>
					<input type="text" className="form-control" id="fullName" placeholder="Full Name" />
				</div>
				<div className="form-group mb-3">
					<label className="mb-2" htmlFor="email">Email</label>
					<input type="email" className="form-control" id="email" placeholder="Enter email" />
				</div>
				<div className="form-group mb-3">
					<label className="mb-2" htmlFor="phone">Phone</label>
					<input type="tel" className="form-control" id="phone" placeholder="Enter phone" />
				</div>
				<div className="form-group mb-3">
					<label className="mb-2" htmlFor="address">Address</label>
					<input type="text" className="form-control" id="address" placeholder="Enter address" />
				</div>
				<button type="submit" className="btn btn-primary btn-block w-100">Save</button>
				<br />
				<Link to="/">or get back to contacts</Link>
			</form>
		</div>
	);
};
