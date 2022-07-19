export const EDIT_ENTITY_ERRORS = "@app/common/EDIT_ENTITY_ERRORS";
export const CLEAR_ENTITY_ERRORS = "@app/common/CLEAR_ENTITY_ERRORS";

const initialState = {
  useremail: '',
  userpassword: ''
}

const entityErrors = (state = initialState, { type, payload }) => {
  switch (type) {
    case EDIT_ENTITY_ERRORS:
      return {
        ...state,
        ...payload
      };
    case CLEAR_ENTITY_ERRORS:
      return {};
    default:
      return state;
  }
};

export default entityErrors;

export const editEntityErrors = errors => ({
  type: EDIT_ENTITY_ERRORS,
  payload: errors
});

export const clearEntityErrors = () => ({
  type: CLEAR_ENTITY_ERRORS
});
