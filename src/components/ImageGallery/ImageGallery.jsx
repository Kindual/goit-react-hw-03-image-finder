import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem'
import React, { Component } from 'react'
import css from './ImageGallery.module.css'

export default class ImageGallery extends Component {
    render() {
        const {gallery} = this.props;
        return (
            <ul className={css.gallery}>
                {gallery.map(({id, webformatURL}) => 
                    <ImageGalleryItem img={webformatURL} key={id}></ImageGalleryItem>
                )}
                
                
            </ul>
        )
    }
}
