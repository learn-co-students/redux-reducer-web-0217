export function managePresents({numberOfPresents}, action){
  switch (action.type) {
    case "INCREASE":
      return { numberOfPresents: numberOfPresents + 1}
    default:
      return { numberOfPresents: numberOfPresents }
  }
}
