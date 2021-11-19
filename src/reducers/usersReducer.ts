export const usersReducer = (state: any = [],action: any) => {
    switch (action.type) {
        case 'FETCH_USER':
           return [...state,action.payload];
        default:
           return state;
    }
}