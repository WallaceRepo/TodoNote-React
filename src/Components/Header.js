import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({title, onAddButton, showAddButton}) => {
  const location = useLocation()
  return (
    <header className='header'>
       <h1>To do Note</h1>
       {location.pathname === '/' && (
        <>
        <p className='header'>{title} </p>
       <Button color = {showAddButton? 'red': 'green'} text = {showAddButton? 'Close Form': 'Add Todo'} onClick = {onAddButton} />
      </>
      )}
       
    </header>
  )
}

Header.defaultProps = {
    title: "Squeze the day :)"
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header