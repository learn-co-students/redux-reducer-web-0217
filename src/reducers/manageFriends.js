export function manageFriends(state, {type, friend, id}){
  switch(type){

    case "ADD_FRIEND":
      let addFriend = {friends: [...state.friends, friend]}
      return addFriend

    case "REMOVE_FRIEND":
      let removeFriend = {friends: state.friends.filter((friend)=> id !== friend.id)}
      return removeFriend

    default:
    return state

  }


}
