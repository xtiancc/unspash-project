import React from 'react'
import PropTypes from 'prop-types'

const Card = ({image}) => {
    return (
        <div className="card">
        <img class="card-img" src={image.urls.regular} alt={image.alt_description}/>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.object
}
export default Card
