const initialState = {
    username: null,
    id: null, 
    profilePic: null
}; 

const USER_UPDATE = "USER_UPDATE"; 

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_UPDATE:
            return {...state, user: action.payload }
        default: 
            return state; 
    }
}

export function updateUser(userId, username, profilePic) {
    return {
        type: USER_UPDATE, 
        payload: { userId, username, profilePic }
    }
}