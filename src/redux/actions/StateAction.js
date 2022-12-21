export const VERIFY = "VERIFY";
export const PLAN_SELECT = "PLAN_SELECT";
export const STATE = "STATE";
export const RESET_STATE= "RESET_STATE";
export const verifyActn = (pemail) => {
    return {
        type: VERIFY,
        data: pemail
    }
}

export const planFetch = (pdata) => {
    return {
        type: PLAN_SELECT,
        data: pdata
    }
}
export const stateChanges = (pdata) => {
    return {
        type: STATE,
        data: pdata
    }
} 
export const resetState = (pdata) => {
    return {
        type: RESET_STATE,
        data: pdata
    }
}