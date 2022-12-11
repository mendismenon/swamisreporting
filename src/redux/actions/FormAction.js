export const FORM_SUBMIT = "FORM_SUBMIT";
export const FORM_SUBMIT_SUCCESS = "FORM_SUBMIT_SUCCESS";
export const FORM_SUBMIT_FAILURE = "FORM_SUBMIT_FAILURE";

export const formSubmitActn = (pdata) => {
    return {
        type: FORM_SUBMIT,
        data: {...pdata},
      };
}