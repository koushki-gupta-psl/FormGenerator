import React, { useEffect, useState } from 'react';
import { TextField } from './TextField/TextField';
import './Css/components.css'

export const TextFieldButton = () => {
  const [fieldopen, setFieldopen] = useState(false);
  const [inputs, setInputs] = useState({});
  const [data, setData] = useState({})
  
// handleChange()=>Handle The data and store in the state use to create Textfield
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
 
  // handlSubmit()=>Handle Submit to store textfield configuration in Json format in object created in LocalStorage
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs);
    const jsondata = localStorage.getItem('data')
    const dataobj = JSON.parse(jsondata);
    dataobj.TextField.push(inputs);
    localStorage.setItem('data', JSON.stringify(dataobj))
    setFieldopen(false)
    setData(JSON.parse(localStorage.getItem('data')))
  }


  const handleClick = () => {
    setFieldopen(true)
    setInputs({})
  }

  // deleteField()=>Delete a particular fieldComponent already Created
  const deleteField = (value) => {
    const jsondata = localStorage.getItem('data')
    const dataobj = JSON.parse(jsondata);
    const indexOfObject = dataobj.TextField.findIndex(object => {
      return object.label === value
    });
    dataobj.TextField.splice(indexOfObject, 1);
    localStorage.setItem('data', JSON.stringify(dataobj))
    setData(JSON.parse(localStorage.getItem('data')))
  }
  return (
    <div>
      <button onClick={handleClick}>InputField</button>
      {fieldopen ? <form onSubmit={handleSubmit}>
        <fieldset>
          <legend> InputFields</legend>
          <table>
            <tr>
              <td><label>Label: </label></td>
              <td><input required type='text' name='label' value={inputs.label || ''} onChange={handleChange}></input></td>
            </tr>
            <tr><td><label>Name:</label></td>
              <td><input type='text' name='name' value={inputs.name} required onChange={handleChange}></input></td></tr>
            <tr><td><label>Select Type:</label></td>
              <td><select name='type' required value={inputs.type} onChange={handleChange}>
                <option value=''>-- Choose --</option>
                <option value='text' >Text</option>
                <option value='email'>Email</option>
                <option value='number'>Number</option>
                <option value='password'>Password</option>
              </select></td></tr>
            <tr><td><label>Required:</label></td>
              <td><select name='required' required value={inputs.required} onChange={handleChange}>
                <option value=''>-- Choose --</option>
                <option value='true' >True</option>
                <option value='false'>False</option>
              </select></td></tr>
          </table>
          <button type='submit' onClick={() => handleSubmit}>ok</button>
        </fieldset>
      </form> : null}
      
      {/* Display The created TextField rendering Textfield component */}
      {data.TextField && data.TextField.map((d) => (
        <div style={{ display: 'flex' }} className='componentDiv'>
          <table>
            <TextField label={d.label} name={d.name} Required={d.required} Type={d.type}></TextField>
          </table>
          <div className='deleteButton'><button style={{ marginLeft: '2px' }} onClick={() => deleteField(d.label)}>Delete</button></div>
        </div>
      ))}
    </div>
  )
}
