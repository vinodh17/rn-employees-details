
const initialState = {
posts: []
}

export default (state=initialState, action:any) => {
switch(action.type) {
	case 'GET_EMPLOYEES': 
		return {...state, posts: [...state.posts, ...action.payload]};
	
	default: return state;
}
}