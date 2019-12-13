import React from "react";

const Members = props => {
    console.log("this is props inside members", props)
    return (
        <div>
            {props.membersList.map((member) => {
                return (
                    <div className="member" key={member.id}>
                        <h2>{member.name}</h2>
                        <h2>{member.email}</h2>
                        <h2>{member.role}</h2>
                    </div>
                );
            })}
        </div>
    );
};

export default Members;