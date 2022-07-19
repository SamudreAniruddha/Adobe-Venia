import { combineReducers } from "redux";
import entityErrors from "./error";
import products from "./products";
import form from "./form";

const reducers = combineReducers({
    entityErrors,
    products: products,
    form: form,
})

export default reducers;