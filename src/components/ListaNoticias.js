import React, { Fragment } from 'react'
import Noticia from './Noticia'
import PropTypes from 'prop-types';

export default function ListaNoticias({noticias}) {
    return (
        <Fragment>
            <div>
                {
                    noticias.map(noticia => {
                        return <Noticia 
                                    key={noticia.url}
                                    noticia={noticia}
                                />
                    })
                }
            </div>
        </Fragment>
    );
}

ListaNoticias.propTypes = {
    noticias: PropTypes.array.isRequired,
}