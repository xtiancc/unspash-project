import React from 'react'
import Card from "./Card"
import NotFound from "./NotFound"
import PropTypes from 'prop-types'
import "./Cards.scss";

const Cards = ({images}) => {

    console.log(images.length)
    return (


        images.length !== 0 
        ? <div className="cards-gallery">
            {images.map( image => <Card image={image} key={image.id}/>)}
        </div>
        : <NotFound/ >
        
    )
}

Cards.propTypes = {
    images: PropTypes.array
}

export default Cards
