const copyH = document.getElementById("copy")
const resultH = document.getElementById("result")
const lengthH = document.getElementById("length")
const upperH = document.getElementById("upper")
const lowerH = document.getElementById("lower")
const numberH = document.getElementById("number")
const symbolsH = document.getElementById("symbols")
const generateH = document.getElementById("generate")
const deleteH = document.getElementById("delete")

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

generateH.addEventListener('click', ()=>{
    const length = +lengthH.value
    const ifUpper = upperH.checked
    const ifLower = lowerH.checked
    const ifNumber = numberH.checked
    const ifSymbol = symbolsH.checked

    resultH.innerText = generatePassword(ifUpper, ifLower, ifNumber, ifSymbol, length)
})

function generatePassword(upper, lower, number, symbols, length){
    let generatePassword = ""
    const types = upper + lower + number + symbols
    const arrTypes = [{upper}, {lower}, {number}, {symbols}].filter(item => Object.values(item)[0])

    if(types == 0){
        return ""
    }

    for(let i = 0; i < length; i += types){
        arrTypes.forEach(type => {
            const func = Object.keys(type)[0]
            generatePassword += random[func]()
        })
    }

    const password = generatePassword.slice(0, length)

    return password
}

copyH.addEventListener("click", ()=>{
    const text = document.createElement("textarea")
    const password = resultH.innerText

    if(!password){return}

    text.value = password
    document.body.appendChild(text)
    text.select()
    document.execCommand("copy")
    text.remove()
    alert("Contraseña copiada")
})

deleteH.addEventListener("click", () =>{
    resultH.innerText = ""
})