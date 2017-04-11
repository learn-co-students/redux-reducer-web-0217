export function manageFriends(state = {
  friends: [],
}, action) {
  switch(action.type){
    case "ADD_FRIEND":
    return Object.assign({}, state, {
      friends: [
        ...state.friends,
        action.friend
      ]
    });

    case "REMOVE_FRIEND":
    let removed = state.friends.findIndex(friend => friend.id === action.id)
    return Object.assign({}, state, {
      friends: [
        ...state.friends.slice(0, removed),
        ...state.friends.slice(removed + 1)
      ]
    });

    default:
      return state
  }
}
