import React from 'react'

export const TextArea = ({label,name}) => {
  return (
    
    <tr>
       <td>
    <label htmlFor={name}>{label}</label>
    </td>
    <td>
   <textarea id={name} name={name}></textarea>
   </td>
        </tr>
  

  )
}
