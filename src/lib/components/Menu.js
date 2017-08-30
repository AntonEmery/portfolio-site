import React from 'react'

export default (props) => {
  let menu = props.menuItems.map((item, index) => {
    return <p key={index}>{item}</p>
  })
  return (
    <div className="menu">
      {menu}
    </div>
  )
}
