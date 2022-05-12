const redux = require('redux');
const createStore = redux.legacy_createStore;
const BUY_CAKE = 'BUY_CAKE';

//action creator

const buyCake = () => {
	return {
		type: BUY_CAKE,
		info: 'First Redux Action',
	};
};

//initial state
const initialState = {
	numOfCakes: 10,
};

//reducer
//(previousState, action) => newState

const reducer = (
	state = initialState,
	action
) => {
	switch (action.type) {
		case BUY_CAKE:
			return {
				...state,
				numOfCakes: state.numOfCakes - 1,
			};

		default:
			return state;
	}
};

const store = createStore(reducer);

console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {
	console.log('Updated State', store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
