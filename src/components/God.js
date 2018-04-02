import React from 'react'
import { removeGod } from '../actions'
import { connect } from 'react-redux'

class God extends React.Component {

  handleClick = () => {
    console.log('clicking remove')
    this.props.removeGod(this.props.god)
  }

  render () {
    return (
      <div onClick={this.handleClick}>
        <p> {this.props.god.name} </p>
        <p> {this.props.god.power} </p>
        <p> {this.props.god.redux} </p>
      </div>
    )
  }

}

export default connect(null, { removeGod })(God)
