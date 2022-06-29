import React, { useEffect } from 'react'
import "../styles/content.css"

export default function Content1() {
  useEffect(()=>{
    const sticky = document.querySelector('.content-1');
    const opaque = document.querySelector('.image-content-1');
    const range = 200;
 
    window.addEventListener('scroll', function () {
 
      const scrollTop = window.pageYOffset;
      const height = sticky.offsetHeight;
      const offset = height / 2;
      let calc = 1 - (scrollTop - offset + range) / range;
     // header.style.cssText = `will-change: opacity; opacity: ${calc};`;
     console.log(calc);
 
      if (calc > '1') {
        opaque.style.opacity = 0;
      } else if ( calc < '0' ) {
        opaque.style.opacity = 1;
      }
    });
  },[])
  
  return (
    <div className='content content-1'>
    <div className='content-img1'>
        <img src='./images/t1.jfif' alt='' />
        <div className='show stick-at-top image-content-1'>
        <p className='head'>Model S</p><br/>
        <p className='head2'>Order Online for  <span> Touchless Delivery</span></p><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className='btn'>
        <button className='btn1'>Custom Order</button>
        <button className='btn2'>Existing Inventory</button>
        </div>
        </div>
    </div>
    
    </div>
  )
}
