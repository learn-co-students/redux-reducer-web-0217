export function manageFriends(state, action){

  // let otherState = Object.assign(...state, action[friends])

  switch(action.type){
    case 'ADD_FRIEND':
      return {friends:[...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter((l) => l.id !== action.id)}
    default:
      return state
  }
}
