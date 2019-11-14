import React, { Component } from 'react'

export default class GenresList extends Component {
    render() {
        return (
            <div>        
                <label><input type='checkbox' name='genre1' value="action" />Action</label>
                <label><input type='checkbox' name='genre2' value="animation" />Animation</label>
                <label><input type='checkbox' name='genre3' value="comedy" />Comedy</label>
                <label><input type='checkbox' name='genre4' value="crime" />Crime</label>
                <label><input type='checkbox' name='genre5' value="drama" />Drama</label>
                <label><input type='checkbox' name='genre6' value="experimental" />Experimental</label>
                <label><input type='checkbox' name='genre7' value="fantasy" />Fantasy</label>
                <label><input type='checkbox' name='genre8' value="historical" />Historical</label>
                <label><input type='checkbox' name='genre9' value="horror" />Horror</label>
                <label><input type='checkbox' name='genre10' value="romance" />Romance</label>
                <label><input type='checkbox' name='genre11' value="science fiction" />Science Fiction</label>
                <label><input type='checkbox' name='genre12' value="thriller" />Thriller</label>
                <label><input type='checkbox' name='genre13' value="western" />Western</label>
                <label><input type='checkbox' name='genre14' value="other" />Other</label>
            </div>
        )
    }
}