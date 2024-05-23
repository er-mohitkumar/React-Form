import React from 'react';
import '../App.css';

const PostSuccessful = ({ formDetails }) => {
    return (
        <div className="details">
            <h1>Submitted Details</h1>
            <p><strong>First Name:</strong> {formDetails.firstname}</p>
            <p><strong>Last Name:</strong> {formDetails.lastname}</p>
            <p><strong>Username:</strong> {formDetails.username}</p>
            <p><strong>Email:</strong> {formDetails.email}</p>
            <p><strong>Password:</strong> {formDetails.password}</p>
            <p><strong>Phone No. :</strong> {formDetails.phoneno}</p>
            <p><strong>Country:</strong> {formDetails.country}</p>
            <p><strong>City:</strong> {formDetails.city}</p>
            <p><strong>PAN No.:</strong> {formDetails.panno}</p>
            <p><strong>Aadhar No.:</strong> {formDetails.adharno}</p>
        </div>
    );
};

export default PostSuccessful;
