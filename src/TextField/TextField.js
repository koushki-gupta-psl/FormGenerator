import React from 'react'

export const TextField = ({label,name,Required,Type}) => {
  return (
     <tr>
    
       <td> <label htmlFor={name}>{label}</label></td>
       <td> <input type={Type} id={name}  required={Required}/></td>
        </tr>
 
  )
}
