const reducer = (state = {gods: []}, action) => {
  console.log('in my reducer')
  switch (action.type) {
    case 'ADD_GOD':
      return {
        gods: [...state.gods, action.payload]
      }

    case 'REMOVE_GOD':
      console.log('in remove God reducer')
      return {
        gods: state.gods.filter((god) => {
          return god !== action.payload
        })
      }

    default:
      return state
  }

}

export default reducer
