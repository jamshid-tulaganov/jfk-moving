// const
const INITIAL_STATE  = {
    EMPLOYMENT_STATE: {
        id: 0,
        firstName: "",
        lastName: "",
        personalNumberFirst: "",
        personalNumberSecond: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
        state: "",
        hasDriverLicense: false,
        hasCdl: false,
        resume: "",
        employmentPositionId: 1,
        employmentPositionName: ""

    }
}

const employmentReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'Employment_Action' :
         return {
             ...state,
             EMPLOYMENT_STATE:action.payload
         }
        default: return INITIAL_STATE.EMPLOYMENT_STATE
    }
}

export default employmentReducer