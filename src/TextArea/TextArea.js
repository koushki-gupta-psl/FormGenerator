import React from 'react'

export const TextArea = ({label,name,Required,Rows,Maxlength}) => {
  return (    
    <tr>
       <td>
    <label htmlFor={name}>{label}</label>
    </td>
    <td>
   <textarea id={name} name={name} required={Required=='true'?true:false} maxLength={Maxlength} rows={Rows}></textarea>
   </td>
    </tr>
  

  )
}
