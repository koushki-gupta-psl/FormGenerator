import React, { useEffect, useState } from 'react'
import { Checkbox } from './Checkbox/Checkbox'
import { Dropdown } from './DropDown/Dropdown'
import { RadioButton } from './RadioButton/RadioButton'
import { TextArea } from './TextArea/TextArea'
import { TextField } from './TextField/TextField'

export const CreatedForm = () => {
    const [data, setData] = useState({})
    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')))


    }, [])
    return (
        <form>
        <fieldset>
        <legend>Created Form</legend>
        <table>
            {data.TextField && data.TextField.map((d) => (
              
                    <TextField label={d.label} name={d.name} Required={d.required} Type={d.type}></TextField>
              
            ))}
            {data.TextArea && data.TextArea.map((d) => (
               
                    <TextArea label={d.label} name={d.name} ></TextArea>
              
            ))}
            {data.DropDown && data.DropDown.map((d) => (
               
                    <Dropdown label={d.label} name={d.name} options={d.Options}></Dropdown>
               
            ))}
            {data.RadioButton && data.RadioButton.map((d) => (
                
                    <RadioButton label={d.label} name={d.name} options={d.Options}></RadioButton>
               
            ))}
            {data.CheckBox && data.CheckBox.map((d) => (
                
                    <Checkbox label={d.label} name={d.name} options={d.Options}></Checkbox>
                
            ))}
            <button type='submit'>Submit</button>
</table>
</fieldset>
        </form>
    )
}
