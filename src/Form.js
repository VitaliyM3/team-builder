import React, { useState } from "react";
import teamMembersData from "./data";

const MemberForm = props => {
    console.log("props from the form", props);
    const [member, setMember] = useState({ name: "", email: "", role: "" });

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
        event.preventDefault();
        const newMem = {
            ...member,
            id: Date.now()
        };
        props.addMember(newMem);
    };
    

    return (
        <form onSubmit={ submitForm }>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                placeholder="Members Name"
                value={ member.name }
                onChange={ changeHandler }
                />

            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                placeholder="Enter Email here"
                value={ member.email }
                onChange={ changeHandler }
            />

            <label htmlFor="role">Role</label>
            <textarea
                type="text"
                name="role"
                placeholder="What is Your Role?"
                value={ member.role }
                onChange={ changeHandler }
            />

            <button type="submit">Add Member</button>

        </form>
    );

};

export default MemberForm;