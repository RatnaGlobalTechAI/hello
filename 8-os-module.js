const os = require('os')

//info about the current user
const user = os.userInfo()
console.log(user)

// const names = require('./4-names')
// const hello = require('./5-utils')
// const data = require('./6-alternative-flavour')
// require('./7-mind-grenade')
// console.log('Rajput')
// console.log(names.chandan)
// console.log(names.singh)


//methbod returns the system uptime in seconds

console.log(`The System uptime is  ${os.uptime()} seconds `)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}


console.log(currentOS)