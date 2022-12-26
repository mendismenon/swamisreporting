export const VIEW_RECORDS = "VIEW_RECORDS";
export const VIEW_RECORDS_SUCCESS = "VIEW_RECORDS_SUCCESS";
export const VIEW_RECORDS_FAILURE = "VIEW_RECORDS_FAILURE";

export const viewRecordsActnFn = (pdata) => {
    return {
        type: VIEW_RECORDS,
        data: pdata
    }
};