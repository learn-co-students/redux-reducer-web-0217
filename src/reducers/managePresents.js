export function managePresents(state={numberOfPresents: 0}, action){
  let type = action.type
  switch(type) {
    case "INCREASE":
      return {numberOfPresents: state.numberOfPresents + 1}
    default:
      return state
  }
}
