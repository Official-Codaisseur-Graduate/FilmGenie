// page 35

import React from 'react'
import CurrencyList from '../components/forms/lists/CurrencyList'
import TicketNumber from '../components/forms/lists/TicketNumber'
import { data } from '../../../data/Tickets'

export default class TicketsTypes extends React.Component {
 
  render() {
    return (
      <div>
        {data.map((ticket) => {
          return (
            <div>
              <div key={ticket.id}>
                <h5>Ticket type</h5>
                <p>{ticket.description}</p>
                <h5>Amount</h5>
                <p>{ticket.amount}</p>
                <form>
                  <label> Currency
                    <CurrencyList />
                  </label>
                  <label> Number
                    <TicketNumber />
                  </label>
                </form>
                <button>buy</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}