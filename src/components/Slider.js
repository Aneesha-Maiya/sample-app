import React from 'react'

export default function Slider(props) {
  return (
    <div className={props.darkMode ? "dark": "toggler"}>
        <p className='toggler_light'>Light</p>
        <div className='toggler_slider' onClick={props.toggleDarkMode}>
            <div className='toggler_slider_circle'></div>
        </div>
        <p className='toggler_dark'>Dark</p>
    </div>
  )
}
