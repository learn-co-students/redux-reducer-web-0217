export function manageFriends(state={friends:[]}, action){


  if (action.type === "ADD_FRIEND") {
    return Object.assign({}, state, {friends: [...state.friends, action.friend]})
  } else if (action.type === "REMOVE_FRIEND") {
    const removalIndex = state.friends.findIndex(friend => friend.id === action.id);

    let friendsArray = state.friends.slice()
    friendsArray.splice(removalIndex, 1)
    
    return Object.assign({}, state, {
      friends: friendsArray
    })
  } else {
    return state
  }
}
