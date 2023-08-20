import React, { useState } from 'react'
import { RadioButton } from './RadioButton/RadioButton';

export const RadioButtonButton = () => {

  const [fieldopen, setFieldopen] = useState(false);
  const [inputs, setInputs] = useState({});
  const [optionValue, setOptionValue] = useState('');
  const [options, setOptions] = useState([])
  const [data, setData] = useState({})
  // useEffect(()=>{

  // },[])
  const handleChange = (event) => {

    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))

  }
  const handleOptions = (event) => {

    const value = event.target.value;
    setOptionValue(value);



  }
  const handleSubmit = (event) => {

    event.preventDefault();


    const jsondata = localStorage.getItem('data')

    const dataobj = JSON.parse(jsondata);

    dataobj.RadioButton.push(inputs);

    localStorage.setItem('data', JSON.stringify(dataobj))
    setFieldopen(false)
    setData(JSON.parse(localStorage.getItem('data')))

  }
  const handleAdd = (event) => {
    setOptionValue('')
    event.preventDefault();
    options.push(optionValue);
    setInputs(values => ({ ...values, Options: options }))


  }

  const handleClick = () => {
    setFieldopen(!fieldopen)
    setInputs({});
    setOptions([])
  }
  const deleteField = (value) => {

    const jsondata = localStorage.getItem('data')


    const dataobj = JSON.parse(jsondata);
    const indexOfObject = dataobj.RadioButton.findIndex(object => {
      return object.label === value



    });
    console.log(indexOfObject)
    dataobj.RadioButton.splice(indexOfObject, 1);

    console.log(dataobj)
    localStorage.setItem('data', JSON.stringify(dataobj))
    setData(JSON.parse(localStorage.getItem('data')))
  }
  return (
    <div>
      <button onClick={handleClick}>RadioButton</button>
      {fieldopen ? <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>RadioButton</legend>
          <table>
            <tr><td><label>Label:</label></td>
              <td><input type='text' name='label' required value={inputs.label} onChange={handleChange}></input></td></tr>

            <tr><td><label>Name:</label></td>
              <td><input type='text' name='name' required value={inputs.name} onChange={handleChange}></input></td></tr>
            <tr><td><label>Required:</label></td>
              <td><select name='required'  required value={inputs.required} onChange={handleChange}>
              <option value=''>-- Choose --</option>
                <option>True</option>
                <option>False</option>
              </select></td></tr>
            <tr><td><label>Options:</label></td>


              <td>{options?.map((v) => (
                <div>{v}</div>
              ))}
                <input name='options' type='text' value={optionValue} required={options.length==0?true:false} onChange={handleOptions} ></input>
                <button onClick={handleAdd}>+</button></td></tr>
          </table>
          <button type='submit' >ok</button>
        </fieldset>
      </form> : null}
      {data.RadioButton && data.RadioButton.map((d) => (
        <div style={{ display: 'flex' }}>
        <table>
          <RadioButton label={d.label} name={d.name} options={d.Options}></RadioButton>
          </table>
          
          <div><button onClick={() => deleteField(d.label)}>Delete</button></div>
        </div>
      ))}


    </div>
  )
}
