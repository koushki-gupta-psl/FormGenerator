
import { event } from 'jquery';
import React, { useEffect, useState } from 'react'
import { Dropdown } from './DropDown/Dropdown';

export const DropDownButton = () => {
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

        dataobj.DropDown.push(inputs);

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
        const indexOfObject = dataobj.DropDown.findIndex(object => {
            return object.label === value



        });
        console.log(indexOfObject)
        dataobj.DropDown.splice(indexOfObject, 1);

        console.log(dataobj)
        localStorage.setItem('data', JSON.stringify(dataobj))
        setData(JSON.parse(localStorage.getItem('data')))
    }
    return (
        <div>
            <button onClick={handleClick}>Dropdown</button>
            {fieldopen ? <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend> TextFields</legend>
                    <table>
                        <tr><td><label>Label: </label></td>
                            <td><input type='text' name='label' required value={inputs.label} onChange={handleChange}></input></td></tr>

                        <tr><td><label>Name:</label></td>
                            <td><input type='text' name='name'  required value={inputs.name} onChange={handleChange}></input></td></tr>
                        <tr><td><label>Required:</label></td>
                            <td><select name='required'  required value={inputs.required} onChange={handleChange}>
                            <option value=''>-- Choose --</option>
                                <option value='true' selected>True</option>
                                <option value='false'>False</option>
                            </select></td></tr>
                        <tr><td><label>Options:</label></td>


                            <td>
                                {options?.map((v) => (
                                    <div>{v}</div>
                                ))}
                                <input name='options'  type='text' required={options.length==0?true:false}  value={optionValue} onChange={handleOptions} ></input>
                                <button onClick={handleAdd}>+</button></td></tr>
                    </table>
                    <button type='submit' >ok</button>
                </fieldset>

            </form> : null}
            {data.DropDown && data.DropDown.map((d) => (
                <div style={{ display: 'flex' }}>
                <table>
                    <Dropdown label={d.label} name={d.name} options={d.Options}></Dropdown>
                    </table>
                    <button onClick={() => deleteField(d.label)}>Delete</button>
                </div>
            ))}


        </div>
    )
}
