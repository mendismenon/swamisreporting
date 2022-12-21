export const isEmpty = (pval) => {
    if(pval === undefined || pval === null || pval === ""){
        return true;
    }else{
        return false;
    }
}

export const checkValidation = (pobj) => {
    let lflag = true;
    Object.keys({ ...pobj }).every((pkey, pind) => {
        if(pobj[pkey].required){
            if(isEmpty(pobj[pkey].value)){
                lflag = false;
                return lflag;
            }
        }
    });
    return lflag;
}

export const checkPhoneNumber = (pVal="") => {
    if (/^\d{10}$/.test(pVal)) {
        return true;
    }else{
        return false;
    }
}