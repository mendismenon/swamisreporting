export const isEmpty = (pval) => {
    if(pval === undefined || pval === null || pval === ""){
        return true;
    }else{
        return false;
    }
}