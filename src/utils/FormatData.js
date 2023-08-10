const FormatData = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formatDay = day < 10 ? `0${day}` : day;
    const formatMonth = month < 10 ? `0${month}` : month;

    return `${formatDay}/${formatMonth}/${year}`;
};
  
export default FormatData;