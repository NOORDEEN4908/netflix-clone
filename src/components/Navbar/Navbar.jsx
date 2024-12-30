import React, { useEffect, useRef } from 'react'
import'./Navbar.css'
import logo from'../../assets/logo.png'
import Search_icon from'../../assets/search_icon.svg'
import Bell_icon from'../../assets/bell_icon.svg'
import Profile_img from'../../assets/profile_img.png'
import caret_icon from'../../assets/caret_icon.svg'
import { logout } from '../../firebase'






const Navbar = () => {

const navRef =useRef();

useEffect(()=>{

window.addEventListener('scroll',()=>{
  if(window.scrollY >=80){
    navRef.current.classList.add('nav-dark')
  }else{

  navRef.current.classList.remove('nav-dark')
  }

})


},[])




  return (
    <div className='navbar' ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>Tv Show</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Brows by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={Search_icon} alt="" className='icons' />
        <p>Children</p>
        <img src={Bell_icon} alt="" className='icons' />
        <div className="navbar-profile">
        <img src={Profile_img} alt="" className='profile' />
        <img src={caret_icon} alt=""  />
        <div className='dropdown'>
          <p onClick={()=>{logout()}} >Sign Out</p>

        </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
