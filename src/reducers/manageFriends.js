export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      console.log(state)
      let newState = {friends: [...state.friends, action.friend]}
      return newState
    case "REMOVE_FRIEND":
      let lostFriends = {friends: state.friends.filter(friend => action.id !== friend.id)}
      return lostFriends
    default:
      return state
  }
}
