import React from 'react'

export const RadioButton = ({label,name,options,Required}) => {
  return (
    <tr>
    <td>
    <label htmlFor={name}>{label}</label>
    </td>
    <td>
    
    {options.map((v,i)=>(
<>
    <input type="radio" id={v} name={name} value={v} required={v==options[1]?Required=='true'?true:false:false}></input>
    <label for={v}>{v}</label><br></br>
</>
    ))}
    </td>
    </tr>
  )
}
