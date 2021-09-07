const getMonthName = function(month){
  const months=["January","February","March","April","May","June","July","August","September","October","November","December"];
  return months[month-1];
}

const getPostfix = function(day){
 switch (day){
  case 1:
    return "st";
  case 2:
    return "nd";
  default:
    return "th";
 }
}

const talkingCalendar = function(date) {
  // Your code here
  let year=date.slice(0,4);
  let month=Number(date.slice(5,7));
  let day=Number(date.slice(8));

  return getMonthName(month)+" "+day+getPostfix(day)+", "+year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
