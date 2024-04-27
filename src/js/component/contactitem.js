import React, { useContext } from "react";
import { ImLocation, ImPhone, ImMail } from "react-icons/im";
import { MdDelete, MdEdit } from "react-icons/md";
import { Context } from "../store/appContext";

const ContactItem = ({ contact, onDelete, onEdit }) => {
    return (
        <div className="col-md-4 col-sm-3 mb-4">
            <div className="card">
                <div className="card-header">
                    <h5 className="card-title text-center mt-2">{contact.name}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text"><ImLocation /> {contact.address}</p>
                    <p className="card-text"><ImPhone /> {contact.phone}</p>
                    <p className="card-text"><ImMail /> {contact.email}</p>
                </div>
                <div className="card-footer d-flex justify-content-end">
                    <button className="btn btn-light" onClick={onDelete}><MdEdit /></button>
                    <button className="btn btn-light ms-2" onClick={onDelete}><MdDelete /></button>
                </div>
            </div>
        </div>
    );
};

export default ContactItem;
