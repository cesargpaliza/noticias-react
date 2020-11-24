import React from 'react'
import PropTypes from 'prop-types';

export default function Noticia({noticia}) {

    const { urlToImage, url, title, description, source} = noticia;
    const styles = {
        imagen : {
            width: '200px'
        }               
    }

    return (
        <div>
            <h4>{title}</h4>
            <p>{source.name}</p>
            <p>{description}</p> 
            {urlToImage && <img src={urlToImage} alt={title} style={styles.imagen}/>}                       
            <a  
                href={url}
                target="_blank"
                rel="noreferrer"
            >
                <button>Ver noticia completa</button>
            </a>
            
        </div>
    )
}

Noticia.propTypes = {
    noticia : PropTypes.object.isRequired,
}