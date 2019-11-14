// page 31

import React from 'react'
// import CurrencyList from './'

export default class CinemaTicketTypesForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label> Cinema
              <input type='text' name='cinema_name' placeholder='Name'></input>
            </label>
            <label> Ticket type 1
              <input type='text' name='description' placeholder='Description'></input>
            </label>
            <label>
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
            <label> Ticket type 2
              <input type='text' name='description' placeholder='Description'></input>
            </label>
            <label>
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