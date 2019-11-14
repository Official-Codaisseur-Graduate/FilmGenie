// page 31

import React from 'react'
import CurrencyList from '../lists/CurrencyList'
import CinemaName from './CinemaName'

export default class CinemaTicketTypesForm extends React.Component {
  render() {
    return (
      <div>
        <CinemaName />
        <div>
          <form>
            <label> Ticket type
              <input type='text' name='description' placeholder='Description'></input>
            </label>
            <label> Amount
              <input type='number' name='amount' placeholder='Amount'></input>
            </label>
            <label>
              <CurrencyList />
            </label>
          </form>
        </div>
        
        <button>plus_sign</button>

        <div>
          <form>
            <label> Ticket type
              <input type='text' name='description' placeholder='Description'></input>
            </label>
            <label> Amount
              <input type='number' name='amount' placeholder='Amount'></input>
            </label>
            <label>
              <CurrencyList />
            </label>
          </form>
        </div>
      </div>
    )
  }
}