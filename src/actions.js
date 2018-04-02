export const addGod = (god) => {
  return {
    type: 'ADD_GOD',
    payload: god
  }
}

export const removeGod = (god) => {
  return {
    type: 'REMOVE_GOD',
    payload: god
  }
}
