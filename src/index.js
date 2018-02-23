const isValidDate = (date: Date): boolean =>
  Object.prototype.toString.call(date) === '[object Date]' &&
  !Number.isNaN(+date)

const timeoutDate = (callback: Function, date?: Date): TimeoutID => {
  const now = new Date()
  const timeOutDate = date === undefined ? new Date() : date

  if (!isValidDate(timeOutDate)) {
    throw new TypeError('Please provide a valid date')
  }

  const ms = timeOutDate.getTime() - now.getTime()

  return setTimeout(callback, ms)
}

export default timeoutDate
