function randomLetter(arr) {
  let number = Math.floor(Math.random() * arr.length)
  return arr[number]
}
function generateURL() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const collection = (lowerCaseLetters + upperCaseLetters + numbers).split('')

  let url = 'https://urlshortener.herokuapp.com/'
  for (let i = 0; i < 5; i++) {
    url += randomLetter(collection)
  }
  return url
}

module.exports = generateURL