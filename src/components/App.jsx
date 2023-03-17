import React, { Component } from 'react'
import axios from 'axios';
import css from '../styles.module.css'
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    gallery: [],
    name: '',
    page: 1,
    loadBtn: false,
  };

  componentDidMount() {
  }


  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name || this.state.page !== prevState.page) {
      this.fetchImg(this.state.name, this.state.page)
    }

  }

  fetchImg = async (name, page = 1) => {
    try {
      this.setState( state => ({
        ...state, loadBtn: false,
      }))
      const key = '33172087-140883ac21b857d399fef061e';
      const url = `https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`;

      const response = await axios.get(url);
      const galleryArr = response.data.hits.map(({ id, largeImageURL, webformatURL }) => ({
        id, largeImageURL, webformatURL
      }))

      this.setState((state) =>
      ({
        ...state,
        gallery: page === 1 ? galleryArr : [...state.gallery, ...galleryArr], loadBtn: true,
      }))
    }
    catch (error) {
      console.dir(error);
    }
  }

  updateName = (name) => {
    this.setState((state) => ({
      ...state, name, page: 1,
    })
    )
  }

  updatePage = () => {
    this.setState((state) => ({
      ...state, page: state.page + 1
    })
    )

  }

  render() {
    const { gallery } = this.state;
    return (
      <>
        <Searchbar updateName={this.updateName}></Searchbar>

        <ImageGallery gallery={gallery}></ImageGallery>

        <button type='button' disabled={!this.state.loadBtn} onClick={this.updatePage}>Load More</button>

        <div className={css.overlay}>
          <div className={css.modal}>
            <img src="" alt="" />
          </div>
        </div>
      </>
    )
  }
}
