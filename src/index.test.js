import timeoutDate from './'

jest.useFakeTimers()

test('throws on invalid date', () => {
  const callback = jest.fn()
  const invalidDate = new Date('sadasd')
  expect(() => timeoutDate(callback, invalidDate)).toThrow()
  expect(() => timeoutDate(callback, 55)).toThrow()
  expect(() => timeoutDate(callback, {})).toThrow()
  expect(() => timeoutDate(callback, '55')).toThrow()
  expect(callback).not.toBeCalled()
})

test('uses current date if no date is provided', () => {
  const callback = jest.fn()
  expect(() => timeoutDate(callback)).not.toThrow()
  jest.runTimersToTime(1)
  expect(callback).toBeCalled()
})

test('sets timeout by calculating ms between dates', () => {
  const tenMinutes = 600000
  const callback = jest.fn()
  const now = Date.now()
  const tenMinuteFromNow = new Date(now + tenMinutes)
  timeoutDate(callback, tenMinuteFromNow)
  expect(callback).not.toBeCalled()
  jest.runTimersToTime(tenMinutes % 4)
  expect(callback).not.toBeCalled()
  jest.runTimersToTime(tenMinutes % 2)
  expect(callback).not.toBeCalled()
  jest.runTimersToTime(tenMinutes)
  expect(callback).toBeCalled()
})

test('returns timeout object so we can clearTimeout()', () => {
  const tenMinutes = 600000
  const callback = jest.fn()
  const now = Date.now()
  const tenMinuteFromNow = new Date(now + tenMinutes)
  const t = timeoutDate(callback, tenMinuteFromNow)
  expect(t).toHaveProperty('id')
  clearTimeout(t)
  jest.runTimersToTime(tenMinutes)
  expect(callback).not.toBeCalled()
})
