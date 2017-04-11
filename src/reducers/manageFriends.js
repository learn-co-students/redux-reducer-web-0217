export function manageFriends(state, {friend, id, type}){
  let {friends} = state
  switch(type) {
    case 'ADD_FRIEND':
      return {friends: [...friends, friend]}
    case 'REMOVE_FRIEND':
      return {friends: friends.filter((l) => l.id !== id)}
    default:
      return state
  }
}
