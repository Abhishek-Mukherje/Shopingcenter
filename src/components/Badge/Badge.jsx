import React from 'react'

function Badge(props) {
  return (
    <span className={`flex items-center justify-center py-1 px-3 rounded-full text-[12px]
        capitalize ${props.status === "pending" && 'bg-[#ff5252] text-white'}
        ${props.status === "confirm" && 'bg-[#1a8638] text-white'}
        ${props.status === "delivered" && 'bg-[#0c3e1a] text-white'}`} >{props.status}</span>
  )
}

export default Badge