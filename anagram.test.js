const isAnagram = require('./anagram')

test('Check isAnagram function exixts ', () => {
  expect(typeof isAnagram).toEqual('function')
})

test('cinema is an anagram if iceman ', () => {
  expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

test('bored is an anagram of robed', () => {
  expect(isAnagram('bored', 'robed')).toBeTruthy()
})

test('dormitory is an anagram of dirty room', () => {
  expect(isAnagram('dormitory', 'dirty room')).toBeTruthy()
})

test('Hello should not be an anagram of Alloha', () => {
  expect(isAnagram('Hello', 'Alloha')).toBeFalsy()
})
