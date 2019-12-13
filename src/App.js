import React, {useState} from 'react';
import './App.css';
import data from "./data";
import Members from "./Members";
import MemberForm from "./Form";

function App() {
  const [members, setMembers] = useState(data);
  // console.log("this is data", data);

  const addMember = member => {
    setMembers([ ...members, member ])
  };

  return (
    <div className="App">
      <MemberForm addMember={ addMember }></MemberForm>
      <Members membersList={ members }></Members>
    </div>
  );
}

export default App;
