const copyH = document.getElementById("copy")
const resultH = document.getElementById("result")
const lengthH = document.getElementById("length")
const upperH = document.getElementById("upper")
const lowerH = document.getElementById("lower")
const numberH = document.getElementById("number")
const symbolsH = document.getElementById("symbols")
const generateH = document.getElementById("generate")

function getRandomUpper(){
    const uppercase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    return uppercase[Math.floor(Math.random() * uppercase.length)]
}

function getRandomLower(){
    const lowercase = "abcdefghijklmnñopqrstuvwxyz"
    return lowercase[Math.floor(Math.random() * lowercase.length)]
}

function getRandomNumber(){
    const num = "1234567890"
    return num[Math.floor(Math.random() * num.length)]
}

function getRandomSymbol(){
    const sym = "!@#$%^&*(){}[]=<>/,."
    return sym[Math.floor(Math.random() * sym.length)]
}

const random = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbols: getRandomSymbol
}