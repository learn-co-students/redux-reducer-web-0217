const manageFriendsInitialState = {
  friends: [{
    name: 'Avi',
    hometown: 'NYC',
    id: 100
  }]
}

export function manageFriends(manageFriendsInitialState, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...manageFriendsInitialState.friends, action.friend]}
    case "REMOVE_FRIEND":
      let friendId = action.id
      let filteredFriends = manageFriendsInitialState.friends.filter(function(friend){
        return friend.id != friendId
      })
      return {friends: filteredFriends}
    default:
    return manageFriendsInitialState
  }
}
