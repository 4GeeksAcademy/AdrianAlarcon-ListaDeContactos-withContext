import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ContactItem from "../component/contactitem";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const ContactList = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getContacts();
	})

	return (
		<div className="container">
			<div className="row">
				{store.contacts.map((contact, index) => (
					<ContactItem
						key={index}
						contact={contact}
						onDelete={() => actions.deleteContact(contact.id)}
					/>
				))}
			</div>
		</div>
	);
}
