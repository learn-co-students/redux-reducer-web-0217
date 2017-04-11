export function managePresents(state, action){
  if(action.type !== "INCREASE"){
    return state
  }
  return {...state, numberOfPresents: state.numberOfPresents + 1} 
}
