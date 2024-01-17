/*
* Write a function that will take a date and compare with today date and return text:
* - Today: same year, same month, same date
* - Yesterday: same year, same month, date = today - 1
* - This week: same year, same month, today - 7 < date < today - 1
* - Last week: same year, same month, date = today - 7
* - This month: same year, same month, date < today - 7
* - Last month: same year, month = current month - 1
* - This year: same year
* - last year: year = current year - 1
* - Long time ago: everything else
*
* Lastly, please write a unit test for calculateRelativeDate function
* */

const dateDistance = (selectedDate) => {
  console.log('selectedDate: ', selectedDate)
  const today = new Date();
  const choosenDate = new Date(selectedDate);


  // Getting current/choosen dates/months/years here because its a relitavle heavy calculation that shouldnt be contantly repeated
  const currentDate = today.getDate()
  const choosenDateDate = choosenDate.getDate();
  const currentMonth = today.getMonth();
  const choosenMonth = choosenDate.getMonth();
  const currentYear = choosenDate.getFullYear();
  const choosenYear = choosenDate.getFullYear();

  const isSameDay = choosenDate.toDateString() == today.toDateString();
  const isOneDayLess = choosenDateDate == currentDate - 1;
  const isThisWeek = choosenDateDate > currentDate - 7 && choosenDateDate < currentDate - 1;
  const isLastWeek = choosenDateDate == currentDate - 7;
  const isThisMonth = choosenDateDate < currentDate - 7;
  const isLastMonth = choosenMonth == currentMonth - 1;
  const isSameMonth =  choosenMonth == currentMonth;
  const isSameYear = choosenYear == currentYear;
  const isLastYear = choosenYear == currentYear - 1;
  const isPastLastYear = choosenYear < currentYear - 1;


  switch (true) {
    case isSameDay:
      return 'Today';
    case isSameYear && isSameMonth && isOneDayLess:
      return 'Yesterday';
    case isSameYear && isSameMonth && isThisWeek:
      return 'This week';
    case isSameYear && isSameMonth && isLastWeek:
      return 'Last week';
    case isSameYear && isSameMonth && isThisMonth:
      return 'This month';
    case isSameYear && isLastMonth:
      return 'Last month';
    case isSameYear:
      return 'This year';
    case isLastYear:
      return 'Last year';
    case isPastLastYear:
        return 'Long time ago';
    default:
      return 'Invalid Date';
  }

};

const View = {
  init: () => {
    document.getElementById('relative-date-btn').addEventListener('click', () => {
      const msgElement = document.getElementById('relative-date-msg');
      const inputDateElem = document.getElementById('relative-date-input');
      // change name of function because its more descriptive IMO
      msgElement.textContent = dateDistance(inputDateElem.value);
    });
  }
};

document.addEventListener('DOMContentLoaded', View.init);
export {dateDistance};