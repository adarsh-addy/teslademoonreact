import React from 'react'
import "../styles/subheader.css"

export default function Subheader() {
  return (
    <div className='subheader'>
        <div className='subheader-logo'>
            <img src='./images/download.png' alt="" />
        </div>
         <div>Model S</div>
         <div>Model 3</div>
         <div>Model X</div>
         <div>Model Y</div>
         <div>Solar Roof</div>
         <div>Solar Panel</div>
         <div>Shop</div>
         <div>Account</div>
         <div>Menu</div>
    </div>
  )
}
