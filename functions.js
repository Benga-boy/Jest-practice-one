const { default: axios } = require('axios')

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {
      firstName: 'Benga'
    }
    user['lastName'] = 'Abiodun'
    return user
  },
  fetchUser: async () => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      return res.data
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = functions