// const date = new Date();

const INITIAL_STATE  = {
    MOVING_STATE: {
        id: 0,
        typeOfPackage: 1,
        movingFrom: "",
        movingTo: "",
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        dateOfMove: null,
        time: '' ,
        movers: 2,
        hours: 3,
        price: '0',
        isServiceAvailable: true,
        completed: true
    }
}


const movingReducer = (state = INITIAL_STATE, action)  => {
    switch (action.type) {
        case 'MOVING_ACTION':
            return {
                ...state,
                 MOVING_STATE: action.payload
            }
        default: return INITIAL_STATE.MOVING_STATE
    }
}

export  default movingReducer
