import React, { useState } from 'react'
import { TextArea } from './TextArea/TextArea';
import './Css/components.css'

export const TextAreaButton = () => {
    const [fieldopen, setFieldopen] = useState(false);
    const [inputs, setInputs] = useState({});
    const [data, setData] = useState({})

    // handleChange()=>Handle The data and store in the state use to create TextArea
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

     // handlSubmit()=>Handle Submit to store textarea configuration in Json format in object created in LocalStorage
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        const jsondata = localStorage.getItem('data')
        const dataobj = JSON.parse(jsondata);
        dataobj.TextArea.push(inputs);
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
        const indexOfObject = dataobj.TextArea.findIndex(object => {
            return object.label === value
        });
        dataobj.TextArea.splice(indexOfObject, 1);
        localStorage.setItem('data', JSON.stringify(dataobj))
        setData(JSON.parse(localStorage.getItem('data')))
    }
    return (
        <div>
            <button onClick={handleClick}>TextArea</button>
            {fieldopen && <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend> TextAreas</legend>
                    <table>
                        <tr><td><label>Label:</label></td>
                            <td><input type='text' name='label' required value={inputs.label} onChange={handleChange}></input></td></tr>
                        <tr><td><label>Name:</label></td>
                            <td><input type='text' name='name' required value={inputs.name} onChange={handleChange}></input></td></tr>
                        <tr><td><label>Rows:</label></td>
                            <td><input type='number' name='rows' required value={inputs.rows} onChange={handleChange}></input></td></tr>
                        <tr><td><label>MaxLength:</label></td>
                            <td><input type='number' name='maxlength' required value={inputs.maxlength} onChange={handleChange}></input></td></tr>
                        <tr><td><label>Required:</label></td>
                            <td><select name='required' required value={inputs.required} onChange={handleChange}>
                                <option value=''>-- Choose --</option>
                                <option value='true'>True</option>
                                <option value='false'>False</option>
                            </select></td></tr>
                    </table>
                    <button type='submit' >ok</button>
                </fieldset>
            </form>}

            {data.TextArea && data.TextArea.map((d) => (
                <div style={{ display: 'flex' }} className='componentDiv'>
                    <table>
                        <TextArea label={d.label} name={d.name} Required={d.required} Rows={d.rows} Maxlength={d.maxlength}></TextArea>
                    </table>
                    <div className='deleteButton'><button onClick={() => deleteField(d.label)}>Delete</button></div>
                </div>
            ))}
        </div>
    )
}
