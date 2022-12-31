var myFunction = () => {
  console.log('izpulnih se')
}
var myPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log('izpulnih se')
    resolve()
  }, 2000)
})
