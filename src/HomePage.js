import { Button } from 'bootstrap'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CheckBoxButton } from './CheckBoxButton'
import { DropDownButton } from './DropDownButton'
import { RadioButtonButton } from './RadioButtonButton'
import { TextAreaButton } from './TextAreaButton'
import { TextFieldButton } from './TextFieldButton'
import './Css/home.css'

export const HomePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const json = {
            TextField: [],
            TextArea: [],
            DropDown: [],
            CheckBox: [],
            RadioButton: []
        }
        localStorage.setItem('data', JSON.stringify(json))
    }, [])

    // Form renders only if one or more field is created
    const createForm = () => {
        const json = {
            TextField: [],
            TextArea: [],
            DropDown: [],
            CheckBox: [],
            RadioButton: []
        }
        
        if(localStorage.getItem('data')==JSON.stringify(json))
        {
            alert('Please create one or more field');
        }
        else{
        navigate('/Form')
        }
    }
    return (
        <fieldset>
            <legend>Create Your Form</legend>
            <div className='formComponents'></div>
            {/* all the form Component available to create form */}
            <TextFieldButton />
            <TextAreaButton />
            <DropDownButton />
            <CheckBoxButton />
            <RadioButtonButton />
            <button onClick={createForm}>CreateForm</button>
        </fieldset>

    )
}
