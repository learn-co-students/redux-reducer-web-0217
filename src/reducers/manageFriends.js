export function manageFriends(state, action){

		switch (action.type) {
			case 'ADD_FRIEND':
				let addFriendState = {...state}
				addFriendState.friends.push(action.friend)
				return addFriendState
			case 'REMOVE_FRIEND':
				let removeFriendArray = state.friends.filter((object) => {return (object.id !== action.id)})
				return {...state, friends: removeFriendArray}
			default:
				return state
		}

}
