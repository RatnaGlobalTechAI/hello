// GLOBALS - NO WINDOW !!!

// __dirname - path to the current directory
// __filename - filename
// require - function to use modules
// module - info about current module(file)
// process - info about env where the program is being executed

console.log(__dirname)
console.log(__filename)

setInterval(
    () => {
        console.log('hello world')
    }, 1000
)