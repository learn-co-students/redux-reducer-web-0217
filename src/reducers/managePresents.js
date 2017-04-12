export function managePresents(state={numberOfPresents: 0}, action){
	switch (action.type) {
		case 'INCREASE':
			let incState = {...state, numberOfPresents: state.numberOfPresents + 1}
			return incState
		default:
			return state
	}
}


