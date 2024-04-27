import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContactItem from "../component/contactitem";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const ContactList = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	const handleEdit = (contact) => {
		actions.editInfoContact(contact);
		navigate("/formedit");
	};

	useEffect(() => {
		actions.getContacts();
	}, [])

	return (
		<div className="container">
			<div className="row mb-2 ">
				<div className="col d-flex justify-content-end">
					<Link to={"/form"}><button className="btn btn-success">Add new contact</button></Link>
				</div>
			</div>
			<div className="row">
				{store.contacts.map((contact, index) => (
					<ContactItem
						key={index}
						contact={contact}
						onDelete={() => actions.deleteContact(contact.id)}
						onEdit={() => handleEdit(contact)}
					/>
				))}
			</div>
		</div>
	);
}
