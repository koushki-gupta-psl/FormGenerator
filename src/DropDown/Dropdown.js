import React from 'react'

export const Dropdown = ({label,name,options,Required}) => {
  return (
    <tr>
    <td>
    <label htmlFor={name}>{label}</label></td>
    <td>
    <select name={name} id={name} required={Required=='true'?true:false}>
    <option value=''>-- Choose --</option>
    {options.map((v,i)=>(

        <option value={v}>{v}</option>
    ))}  
</select>
</td>
</tr>
   
  )
}
