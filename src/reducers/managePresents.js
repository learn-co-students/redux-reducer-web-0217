export function managePresents(state, {type}){
  switch (type){
    case "INCREASE":
    return {numberOfPresents: state.numberOfPresents + 1}
  default:
  return state
  }
}
