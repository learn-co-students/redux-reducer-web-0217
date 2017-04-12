export function manageFriends(state, action){
  if (action.type === 'ADD_FRIEND') {
    let newState =  { ...state, friends: state.friends.concat(action.friend) }
    return newState
  } else if (action.type === 'REMOVE_FRIEND') {
    let newState =  { ...state, friends: state.friends.filter((obj) => {
      return obj.id !== action.id
    })}
    return newState
  } else {
    return state
  }
}
