import React, { useContext } from "react";
import { ImLocation, ImPhone, ImMail } from "react-icons/im";
import { MdDelete, MdEdit } from "react-icons/md";
import { Context } from "../store/appContext";

const ContactItem = ({ contact, onDelete, onEdit }) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    <h1>{contact.name}</h1>
                </div>
                <div className="col-md-4 d-flex flex-column">
                    <p><ImLocation /> {contact.address}</p>
                    <p><ImPhone /> {contact.phone}</p>
                    <p><ImMail /> {contact.email}</p>
                </div>
                <div className="col-md-4 d-flex justify-content-end align-items-start">
                    <button className="btn btn-light" onClick={onDelete}><MdEdit /></button>
                    <button className="btn btn-light ms-2" onClick={onDelete}><MdDelete /></button>
                </div>
            </div>
        </li>
    );
};

export default ContactItem;
