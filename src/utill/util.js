export const getFullDate = (pdate) => {
    let day =
      pdate.getDate() && pdate.getDate() < 10
        ? `0${pdate.getDate()}`
        : pdate.getDate();
    let month =
      pdate.getMonth() && pdate.getMonth() + 1 < 10
        ? `0${pdate.getMonth() + 1}`
        : pdate.getMonth() + 1;
    let year = pdate.getFullYear();
    return `${day}/${month}/${year}`;
};