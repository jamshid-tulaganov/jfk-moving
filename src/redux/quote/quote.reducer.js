const INITIAL_STATE  = {
    QUOTE_STATE: {
        id: 0,
        pickUpAddress: "",
        loadingDate: "",
        typeOfMoving: "",
        destination: "",
        unLoadingDate: "",
        serviceNeeded: ""
    }
}


const quoteReducer = (state = INITIAL_STATE, action)  => {
    switch (action.type) {
        case 'QUOTE_ACTION':
            return {
                ...state,
                QUOTE_STATE: action.payload
            }
        default: return INITIAL_STATE.QUOTE_STATE
    }
}

export  default quoteReducer;
