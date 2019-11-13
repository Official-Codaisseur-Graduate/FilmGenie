// page 24

import React from 'react'

export default class RightOwnerAgentsForm extends React.Component {
  render() {
    return (
      <div>
        <div>
          <form>
            <label> Right owner
              <input type='text' name='right_owner_name' placeholder='Name'></input>
            </label>
            <label> Administrator
              <input type='text' name='full_name' placeholder='Full name'></input>
            </label>
            <label>
              <input type='text' name='first_name' placeholder='First name'></input>
            </label>
            <label>
              <input type='text' name='last_name' placeholder='Last name'></input>
            </label>
            <label>
              <input type='text' name='job' placeholder='Job'></input>
            </label>
          </form>
        </div>
        
        <button>plus_sign</button>

        <div>
          <form>
            <label> Editor
              <input type='text' name='full_name' placeholder='Full name'></input>
            </label>
            <label>
              <input type='text' name='first_name' placeholder='First name'></input>
            </label>
            <label>
              <input type='text' name='last_name' placeholder='Last name'></input>
            </label>
            <label>
              <input type='text' name='job' placeholder='Job'></input>
            </label>
          </form>

          <button>plus_sign</button>
          
          <form>
            <label> Reader
              <input type='text' name='full_name' placeholder='Full name'></input>
            </label>
            <label>
              <input type='text' name='first_name' placeholder='First name'></input>
            </label>
            <label>
              <input type='text' name='last_name' placeholder='Last name'></input>
            </label>
            <label>
              <input type='text' name='job' placeholder='Job'></input>
            </label>
          </form>
        </div>
      </div>
    )
  }
}

export default RightOwnerAgentsForm