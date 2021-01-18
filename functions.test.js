/* eslint-disable no-undef */
const functions = require('./functions')

// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log('Database Initialized....')
// const closeDatabase = () => console.log('Database Closed....')

const nameCheck = () => console.log('Checking Name....')

describe('Checking names', () => {
  beforeEach(() => nameCheck())

  test('User is Jeff', () => {
    const user = 'Jeff'
    expect(user).toBe('Jeff')
  })
  
  test('User is Karen', () => {
    const user = 'Karen'
    expect(user).toBe('Karen')
  })
})


test('Adds 2 + 2 to equal 4 ', () => {
  expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 to not equal 5 ', () => {
  expect(functions.add(2, 2)).not.toBe(5)
})

// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only null
// toBeUndefined matches only undefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false


// toBeNull
test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})


// toBeFalsy
test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
})


//toBeUserObject
// ! toBe is for primitive types. Use toEqual for Objects and Arrays etc
test('User should be OluwaGbenga Object', () => {
  expect(functions.createUser()).toEqual({ firstName: 'Benga', lastName: 'Abiodun' })
})


// less than and greater than

test('should be under 1600', () => {
  const load1 = 800
  const load2 = 700
  expect(load1 + load2).toBeLessThan(1600)
})

//Regex
test('There is no I in team ', () => {
  expect('team').not.toMatch(/I/i)
})

// Arrays
test('Admin should be in usernames ', () => {
  usernames = ['John', 'Karen', 'admin']
  expect(usernames).toContain('admin')
})


// Working with async data
// ? PROMISE
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1)
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})

// ? ASYNC/AWAIT
test('User fetched name should be Leanne Graham', async () => {
  expect.assertions(1)
  try {
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
  } catch (err) {
    console.log(err)
  }
})
