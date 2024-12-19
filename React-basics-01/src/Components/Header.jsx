import React from 'react'

const Header = () => {
  return (
    <div>
        <h1>
            Welcome to my website.
        </h1>
        <div>
            <a style={{padding:"10px"}} href="home">Home</a><a href="about">About</a><a href="contact us">Contact Us</a>
        </div>
    </div>
  )
}

export default Header;