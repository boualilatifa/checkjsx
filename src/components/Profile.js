import React from 'react'

function Profile() {
  return (
    <div>
      <img className='bgimg'  src="a.png"  style = {
            { width: "500 px" , height: "500 px", display: "flex" , alignItems: "center" , animation: "glow 2s ease 5.5s infinite"} }></img>
    </div>
  )
}

export default Profile;