import React, { useState } from "react"

function Form() {
    const [data, setData]=useState({
        firstName:"",
        middleName:"",
        lastName:"",
        gender:"",
        dateOfBirth:"",
        phoneNumber:"",
        email:"",
    });
    console.log(data)
    
     const handleChange = (e) =>{
        let name = e.target.name
        let value = e.target.value

        setData({ ...data, [name]: value })
     }
    
     return (
      <div className="h-screen bg-gradient-to-br from-fuchsia-400  to-emerald-500 flex justify-center items-center ">
        <div className="max-w-3xl w-full bg-white rounded-xl- p-10 " >
          <form>
            <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:gap">
              <div>
                <label htmlFor="firstName" className="form-label">
                 First Name
                </label>
                <input 
                  type="text" 
                  name="firstName" 
                  id="firstName"
                  className="form-input" 
                  value={data.firstName}
                  onChange={handleChange}
                />
              </div>
           <div>
             <label htmlFor="lastName" className="form-label">
              Last Name
             </label>
             <input 
               type="text" 
               name="lastName" 
               id="lastName" 
               className="form-input"
               value={data.lastName}
               onChange={handleChange}
             />
              </div>
            <div>
        <label htmlFor="middleName" className="form-label">
            Middle Name
            </label>
        <input 
          type="text" 
          name="middleName" 
          id="middleName" 
          className="form-input"
          value={data.middleName} 
          onChange={handleChange} 
          />
            </div>
        </div>
      <div>
        <label htmlFor="gender" className="form-label">
            Gender
        </label>
        <label htmlFor="male" />
            <input type="radio" 
              name="gender" 
              value="male" 
              id="male"
              onChange={handleChange} 
              /> {""} 
              Male
        <label htmlFor="female" >
            <input type="radio" 
              name="gender" 
              value="female" 
              id="female" 
              onChange={handleChange}
              />{""}  
              Female     
        </label>
      </div>
      <div>
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input 
        type="date" 
        name="dateOfBirth"
        value={data.dateOfBirth}
        onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel"
          placeholder="xxx-xxx-xxxx"
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={handleChange} 
          />
      </div>
      <div>
        <label htmlFor="e-mail">Email</label>
        <input 
          type="email"
          name="email"
          id="email"
          placeholder="john.doe@email.com"
          />
      </div>
      <div>
        <button type="submit">Register</button>
      </div>
      
          </form>
        </div>
      </div>
    )
 }

export default Form;