import React from 'react'
import PropTypes from 'prop-types'

const Header = ({setSearch}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(e.target[0].value);
    }

    return (
        <nav className="navbar bg-primary text-white px-4">
        <span className="navbar-brand">Unspash Project App</span>
        
        <form className="text-end my-1" onSubmit={handleSubmit}>
            <input type="text" className="form-control" placeholder="Buscar..." />
        </form>
      </nav>
    )
}

Header.propTypes = {
    setSearch: PropTypes.func
}

export default Header
