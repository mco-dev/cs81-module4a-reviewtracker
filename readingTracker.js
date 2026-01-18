// Weekly reading log
const readingLog = [ // This constant contains the data for the week
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
]; // There are 5 entries in the log, from Monday to Friday including book and minutes read

// Adds a new reading entry to the log
// Accepts each variable in the entry object as arguments
function addReadBook(day, book, minutes) {
  const newEntry = { day, book, minutes }; // Creates a constant with day book and minutes
  readingLog.push(newEntry);  // Uses readingLog variable to store entry passed
} // Pushes new entry to the end of the readingLog object

// Returns total minutes spent reading all week
// Takes log object as an argument which ciontains reading entries
function totalReadingMinutes(log) {
  let total = 0; // create a variable and initialize it to zero
  for (let entry of log) { // Loop through each entry in log
    total += entry.minutes; // Add the minutes of the entry to total
  }
  return total; // Returns the total os minutes read as an integer
}

// Returns the book read most frequently
// Takes log object as an argument which ciontains reading entries
function mostReadBook(log) {
  const bookCounts = {};
  for (let entry of log) {
    if (!bookCounts[entry.book]) { // Checks for existing book in the bookCounts object
      bookCounts[entry.book] = 1; // This line initializes the count for a book if it hasn't been counted yet
    } else {
      bookCounts[entry.book]++; // If it exists, increment it by one
    }
  }
// Initialze variables to track the most read book and its count
  let maxBook = null; // Create and initialize a variable to null
  let maxCount = 0;
  for (let book in bookCounts) { // Loop through each book in the bookCounts object
    if (bookCounts[book] > maxCount) { // Check for how many times a book was read and compare it to maxCount
      maxBook = book; // Upadate maxBook to the value in book
      maxCount = bookCounts[book]; // Update maxCount to the book's count
    }
  }
  return maxBook; // Returns a string that represents the most read book
}

// Prints a summary of minutes read per day
// The log object is passed as an argument which contains the reading entries
function printDailySummary(log) {
  for (let entry of log) { // Loops through each log entry
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`); // Prints each day and minutes read
  } // This function could include the total number of days as wall as the total of minutes read
  // It would be helpful to include the totals so they wouldn't have to be calculated separately
}

// Example usage
// Adds an entery to the log, prints daily summary, prints total minutes read, then prints most read book
addReadBook("Saturday", "Dune", 50); // Add an entry to the log
printDailySummary(readingLog); // Function contains a loop to display each entry in the constant readingLog
console.log("Total minutes read:", totalReadingMinutes(readingLog)); // Function calculates total number of minutes from readingLog
console.log("Most read book:", mostReadBook(readingLog)); // Function calculates total number of minutes from readingLog
