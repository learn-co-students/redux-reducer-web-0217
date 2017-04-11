export function managePresents(state, {type}){
  switch (type){

    case "INCREASE":
      let addState = {...state, numberOfPresents: state.numberOfPresents + 1}
      return addState

    case "DECREASE":
    let minusState = {...state, numberOfPresents: state.numberOfPresents - 1}
    return minusState

    default:
    return state
  }

}
