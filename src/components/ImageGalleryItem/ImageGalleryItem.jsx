import React, { Component } from 'react'
import css from './ImageGalleryItem.module.css'

export default class ImageGalleryItem extends Component {
    render() {
        const {img} = this.props;
        return (
            <li className={css.galleryItem}>
                <img src={img} alt="" />
            </li>
        )
    }
}
