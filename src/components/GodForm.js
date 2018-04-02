import React from 'react'
import { addGod } from '../actions'
import { connect } from 'react-redux'

class GodForm extends React.Component {

  state = {
    name: '',
    power: '',
    redux: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addGod(this.state)
    this.setState({
      name: '',
      power: '',
      redux: ''
    })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
        <input name='name' value={this.state.name} onChange={this.handleChange}/>
        <label>
          Power
        </label>
        <input name='power' value={this.state.power} onChange={this.handleChange}/>
         <label>
          Redux
        </label>
        <input name='redux' value={this.state.redux} onChange={this.handleChange}/>
        <input type='submit'/>
      </form>
    )
  }
}

//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addGod: (god) => dispatch(addGod(god))
//   }
// }


export default connect(null, { addGod })(GodForm)
