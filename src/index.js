const isValidDate = (date: Date): boolean =>
  Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date)

const timeoutDate = (callback: Function, date?: Date): TimeoutID => {
  const now = new Date()

  if (date === undefined) {
    date = new Date()
  }

  if (!isValidDate(date)) {
    throw new TypeError('Please provide a valid date')
  }

  const ms = date.getTime() - now.getTime()

  return setTimeout(callback, ms)
}

export default timeoutDate
