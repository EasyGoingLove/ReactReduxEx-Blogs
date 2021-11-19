export const postsReducer = (state: any = [],action: any) => {
    switch (action.type) {
        case 'FETCH_POSTS':
           return action.payload;
        default:
           return state;
    }
}