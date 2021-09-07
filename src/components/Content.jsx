import React, {useState, useEffect, useCallback} from 'react'
import Cards from "./Cards"
import Loader from "./Loader"
import PropTypes from 'prop-types'

const Content = ({search}) => {

    // Put your own 'Access Key' from Unspash Developers
    const ACCESS_KEY = '';

    const [images, setImages] = useState([]);
    const [loading, isLoading] = useState(false);
 
    const unspashSearch = useCallback(async () => {

        isLoading(true);
        const URL = search !== '' ? `https://api.unsplash.com/search/photos?query=${search}&client_id=${ACCESS_KEY}` : `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}`
        const result = await fetch(URL);
        const data = await result.json();

        search !== '' ? setImages(data.results) : setImages(data);
        isLoading(false);

    }, [search]);

    useEffect(() => {
        unspashSearch();
    }, [unspashSearch])

    return (
        <div className="container text-center my-3" style={{minHeight: "85vh"}}>
            { loading ? <Loader/> : <Cards images={images}/> }
        </div>
    )
}

Content.propTypes = {
    search: PropTypes.string
}
export default Content




