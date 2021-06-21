const initialState = {
    products: [],
    isLoad: false
}

const products = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PRODUCT':
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export default products