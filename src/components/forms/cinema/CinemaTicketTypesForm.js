// page 31

import React from 'react'
import CinemaName from './CinemaName'

// import CurrencyList from './'

export default class CinemaTicketTypesForm extends React.Component {
  render() {
    return (
      <div>
        <CinemaName />
        <div>
          <form>
            <label>Ticket type</label>
              <input type='text' name='description' placeholder='Description'></input>
            <label>Amount</label>
              <input type='number' name='amount' placeholder='Amount'></input>
            <label>
              {/* <CurrencyList /> */}
            </label>
          </form>
        </div>
        
        <button>plus_sign</button>

      </div>
    )
  }
}