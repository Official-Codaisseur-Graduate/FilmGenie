<label> Genres
    <input type='checkbox' name='genre1' value='Comedy'
      // onChange={this.props.onChange}
      // value={this.props.state}
      placeholder='Genres'
      >Comedy
    </input>
</label>

import React, { Component } from 'react'

export default class CountryList extends Component {
    render() {
        return (
            <div>        
                <form>
                   <input type='checkbox' name='action' value="action">Action</input>
                   <input type='checkbox' name='action' value="action">Animation</input>
                   <input type='checkbox' name='action' value="action">Comedy</input>
                   <input type='checkbox' name='action' value="action">Crime</input>
                   <input type='checkbox' name='action' value="action">Drama</input>
                   <input type='checkbox' name='action' value="action">Experimental</input>
                   <input type='checkbox' name='action' value="action">Fantasy</input>
                   <input type='checkbox' name='action' value="action">Historical</input>
                   <input type='checkbox' name='action' value="action">Horror</input>
                   <input type='checkbox' name='action' value="action">Romance</input>
                   <input type='checkbox' name='action' value="action">Science Fiction</input>
                   <input type='checkbox' name='action' value="action">Thriller</input>
                   <input type='checkbox' name='action' value="action">Western</input>
                   <input type='checkbox' name='action' value="action">Other</input>
                </form>
            </div>
        )
    }
}