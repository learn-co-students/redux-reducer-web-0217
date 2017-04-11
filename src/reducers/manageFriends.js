export function manageFriends(state, action) {
  if (action.type === "ADD_FRIEND") {
    return Object.assign({}, state, {
      friends: [...state.friends, action.friend]
    })
  }
  else if (action.type === "REMOVE_FRIEND") {
    const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
    return Object.assign({}, state, {
      friends: [
        ...state.friends.slice(0, removalIndex),
        ...state.friends.slice(removalIndex + 1)
      ]
    })
  }
  return state
}
