export function manageFriends(state={
  friends: [
            {
              name: 'Avi',
              hometown: 'NYC',
              id: 100
            }
           ],
}, action) {

  switch (action.type) {
    case "ADD_FRIEND":
      let newFriends = state.friends
      newFriends.push(action.friend)
      return {...state, friends: newFriends}
    case "REMOVE_FRIEND":
      let crapFriendID = state.friends.findIndex((f) => f.id === action.id)
      let betterFriends = state.friends.slice(0)
      betterFriends.splice(crapFriendID, 1)
      return {...state, friends: betterFriends}
    default:
      return state
  }
}
