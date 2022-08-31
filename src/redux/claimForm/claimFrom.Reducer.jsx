// const
const INITIAL_STATE  = {
    CLAIMS_FORM_STATE: {
        id: 0,
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        dataLoaded: new Date(),
        dataUnLoaded: new Date(),
        zipCodeFrom: "",
        zipCodeTo:"",
        movingValuation:false,
        damageItemsCount:0,
        articleName:"",
        articleWeight:"",
        articleDescription:"",
        image:""
    }
}

const claimsFormReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'Claims_Form_Action' :
            return {
                ...state,
                CLAIMS_FORM_STATE:action.payload
            }
        default: return INITIAL_STATE.CLAIMS_FORM_STATE
    }
}

export default claimsFormReducer