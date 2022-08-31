import {combineReducers} from "redux";
import movingReducer from "./moving/moving.Reducer";
import employmentReducer from "./employment/employment.Reducer";
import claimFormComponent from "./claimForm/claimFrom.Reducer";
import quoteReducer from "./quote/quote.reducer";

export default combineReducers({
    moving: movingReducer,
    employment: employmentReducer,
    claimsForm: claimFormComponent,
    quoteForm: quoteReducer
})