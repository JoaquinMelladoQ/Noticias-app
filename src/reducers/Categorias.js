const ADD_CATEGORY = 'category/add'

const addCatergory = payload => ({
    type: ADD_CATEGORY,
    payload
})

const initialState = {
    data: [{ id: 1, name: 'Defecto' }]
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        default:
            break;
    }
}