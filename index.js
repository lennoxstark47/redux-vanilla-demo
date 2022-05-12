const redux = require('redux');
const createStore = redux.legacy_createStore;
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';

//action creator

const buyCake = () => {
	return {
		type: BUY_CAKE,
		info: 'First Redux Action',
	};
};

const buyIceCreams = () => {
	return {
		type: BUY_ICE_CREAM,
	};
};

//initial state
const initialState = {
	numOfCakes: 10,
	numOfIceCreams: 20,
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

		case BUY_ICE_CREAM:
			return {
				...state,
				numOfIceCreams: state.numOfIceCreams - 1,
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
store.dispatch(buyIceCreams());
store.dispatch(buyIceCreams());

unsubscribe();
