const initialState = {
    items: [],
    totalPrice: null,
    totalProducts: null,
}

const basket = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            const newItems = [...state.items, action.payload]
            return {
                ...state,
                items: newItems,
                totalProducts: newItems.length,
                totalPrice: state.totalPrice += state.items,
            }
        default:
            return state
    }
}

export default basket