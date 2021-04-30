/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord(array) {
  return {firstName: array[0], familyName: array[1], title: array[2], payPerHour: array[3], timeInEvents: [], timeOutEvents: []}
}

function createEmployeeRecords(array) {
  let records = []
  for (const index in array) {
    records.push(createEmployeeRecord(array[index]))
  }
  return records
}

function createTimeInEvent(time) {
  let t = time.split(' ')
  this.timeInEvents.push({type: "TimeIn", date: t[0], hour: parseInt(t[1])})
  return this
}

function createTimeOutEvent(time) {
  let t = time.split(' ')
  this.timeOutEvents.push({type: "TimeOut", date: t[0], hour: parseInt(t[1])})
  return this
}

function hoursWorkedOnDate(date) {
  let inDate = this.timeInEvents.find(i => i.date === date)
  let outDate = this.timeOutEvents.find(i => i.date === date)
  return (outDate.hour - inDate.hour) / 100
}

function wagesEarnedOnDate(date) {
  let hours = hoursWorkedOnDate.call(this, date)
  return hours * this.payPerHour
}

function calculatePayroll(employees) {
  const wages = []
  for (const index in employees) {
    wages.push(allWagesFor.call(employees[index]))
  }
  return wages.reduce(function(ele, total){return total + ele})
}

function findEmployeeByFirstName(employees, name) {
  return employees.find(e => e.firstName === name)
}
