export function managePresents(state, action){
  if (action.type === 'INCREASE') {
    let newState =  { ...state, numberOfPresents: state.numberOfPresents + 1 }
    return newState
  } else {
    return state
  }
}
