import React, { Component } from 'react'
import css from './searchbar.module.css'

export default class Searchbar extends Component {
    state = {
        name: ''
    }

    onSubmit = (ev ) => {
        ev.preventDefault();

        if (this.state.name.trim().length < 1){
            return alert('пустий єЗапит')
        }
        this.props.updateName(this.state.name.trim())
    }
    render() {
        return (
            <header className={css.searchbar}>
                <form className={css.form} onSubmit={this.onSubmit}>
                    <button type="submit" className={css.button}>
                        <span className={css.buttonLabel}>Search</span>
                    </button>

                    <input
                        className={css.input}
                        type="text"
                        name='name'
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"

                        value={this.state.name}
                        onChange={ev => this.setState({name:ev.target.value})}
                    />
                </form>
            </header>
        )
    }
}
