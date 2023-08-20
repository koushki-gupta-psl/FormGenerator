import React, { useState } from 'react'
import { TextArea } from './TextArea/TextArea';

export const TextAreaButton = () => {
    const [fieldopen, setFieldopen] = useState(false);
    const [inputs, setInputs] = useState({});
    const [data, setData] = useState({})

    const handleChange = (event) => {

        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))

    }

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
    const deleteField = (value) => {

        const jsondata = localStorage.getItem('data')

        const dataobj = JSON.parse(jsondata);
        const indexOfObject = dataobj.TextArea.findIndex(object => {
            return object.label === value



        });
        console.log(indexOfObject)
        dataobj.TextArea.splice(indexOfObject, 1);

        console.log(dataobj)
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
                        <tr><td><label>Required:</label></td>
                        <option value=''>-- Choose --</option>
                            <td><select name='required' required value={inputs.required} onChange={handleChange}>
                                <option value='true' selected>True</option>
                                <option value='false'>False</option>
                            </select></td></tr>
                    </table>
                    <button type='submit' >ok</button>

                </fieldset>
            </form>}
            {data.TextArea && data.TextArea.map((d) => (
                <div style={{ display: 'flex' }}>
                <table>
                    <TextArea label={d.label} name={d.name} ></TextArea>
                    </table>
                    <button onClick={() => deleteField(d.label)}>Delete</button>
                </div>
            ))}


        </div>
    )
}
