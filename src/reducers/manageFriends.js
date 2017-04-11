let state = {
  friends: [
    {
      name: 'Avi',
      hometown: 'NYC',
      id: 100
    }
  ],
}

export function manageFriends(state, action){
  let type = action.type

  switch(type) {
    case 'ADD_FRIEND':
      let friend = action.friend
      let friends = state.friends
      return {friends: [...friends, friend]}
    case 'REMOVE_FRIEND':
      let id = action.id
      let newFriends = Object.assign([], state.friends)
      newFriends = newFriends.filter(function(friend) {
        return friend.id != id
      })
      return {friends: newFriends}
      console.log(newFriends)
    default:
      return state
  }
}
