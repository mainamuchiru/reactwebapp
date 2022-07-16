import React from 'react';
import { useState } from 'react';
function Contact(){
   const [data, setData] = useState({});
   const [submitted, setSubmitted] = useState(false);
   const serverHost = 'http://localhost:4000';
   async function addStudent(student){
    const url = serverHost + '/students';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(student)
    }
    const response = await fetch(url,options);
    if(response.status === 200){
        setSubmitted(true);
    }
   }
   const handleChange = (e) => {
    const name =e.target.name;
    const value = e.target.value;
    //Create an object for the current input field event
    const currentInputFieldData = {
        [name]: value
    }
    // Merge the data object with current input field data object
    const updateData = {
        ...data,
        ...currentInputFieldData
    }
    setData(updateData);
   }
   const handleSubmit = (e) => {
    addStudent(data);
    e.preventDefault();
   }



return (
    <div>
        <h1>This is the contact page</h1>
        {!submitted ?
        <form onSubmit = {handleSubmit}>
        <label>
            First Name:
            <input name="firstName"  type="text" onChange={handleChange}/>
        </label><br/>
        <label>
            Middle Name:
            <input name="middleName" type="text" onChange={handleChange}/>
        </label><br/>
        <label>
            Last Name:
            <input name="lastName" type="text" onChange={handleChange}/>
        </label><br/>
        <input type="submit" value ="submit" />
        </form>
        :
        <p>Your data has been submitted successfully. Thankyou very much</p>
}
    </div>
);

}
export default Contact;