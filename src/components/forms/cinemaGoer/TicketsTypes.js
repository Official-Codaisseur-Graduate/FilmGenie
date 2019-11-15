// page 35

import React from 'react'
import CurrencyList from '../components/forms/lists/CurrencyList'
import TicketNumber from '../components/forms/lists/TicketNumber'
import { data } from '../../../data/Tickets'

export default class Tickets extends React.Component {
 
  render() {
    return (
      <div>
        {data.map((ticket) => {
          return (
            <div>
              <div key={ticket.id}>
                <h3>Ticket type</h3>
                <span>{ticket.description}</span>
                <span>{ticket.amount}</span>
                <form>
                  <label>
                    <CurrencyList />
                  </label>
                  <label>
                    <TicketNumber />
                  </label>
                </form>
                <button className="to-side-right">buy</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}