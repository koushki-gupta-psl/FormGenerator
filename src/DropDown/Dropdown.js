import React from 'react'

export const Dropdown = ({label,name,options}) => {
  return (
    <tr>
    <td>
    <label htmlFor={name}>{label}</label></td>
    <td>
    <select name={name} id={name}>
    {options.map((v,i)=>(

        <option value={v}>{v}</option>
    ))}
  
  
</select>
</td>
</tr>
   
  )
}
