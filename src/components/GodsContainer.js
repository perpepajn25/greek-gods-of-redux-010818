import React from 'react'
import God from './God'
import { connect } from 'react-redux'

class GodsContainer extends React.Component {

  render () {
    const displayGods = this.props.gods.map((god,index) => {
      return <God key={index} god={god}/>
    })
    return (
      <div>
      {displayGods}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    gods: state.gods
  }
}

export default connect(mapStateToProps)(GodsContainer)
