import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Formedit = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const contact = store.editContactInfo;

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    useEffect(() => {
        if (contact) {
            setFullName(contact.name);
            setEmail(contact.email);
            setPhone(contact.phone);
            setAddress(contact.address);
        }
    }, [contact]);

    const editContactHandler = (e) => {
        e.preventDefault();

        const editContact = {
            id: contact.id,
            name: fullName,
            phone: phone,
            email: email,
            address: address
        }
        actions.editContact(editContact);
        navigate("/");
    }

    return (
        <div className="container">
            <h1 className=" text-center">Edit contact</h1>
            <form onSubmit={editContactHandler}>
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
                <button type="submit" className="btn btn-primary btn-block w-100">Save edit</button>
                <br />
                <Link to="/">or get back to contacts</Link>
            </form>
        </div>
    );
};
