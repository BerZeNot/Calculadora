n1 = document.getElementById('num1')
n2 = document.getElementById('num2')
res = document.getElementById('res')
function soma(){
    if(n1.value=='' || n2.value==''){
        alert("Preencha todos os campos!")
    } else{
        let num1 = Number(n1.value)
        let num2 = Number(n2.value)
        let operation = num1+num2
        res.innerHTML = `<p>${n1.value} + ${n2.value} = ${operation}</p>`
        res.style.backgroundColor = "green"
        res.style.color = "white"
        n1.value = ''
        n2.value = ''
    }
}

function subtracao(){
    if(n1.value=='' || n2.value==''){
        alert("Preencha todos os campos!")
    } else{
        let num1 = Number(n1.value)
        let num2 = Number(n2.value)
        let operation = num1-num2
        res.innerHTML = `<p>${n1.value} - ${n2.value} = ${operation}</p>`
        res.style.backgroundColor = "green"
        res.style.color = "white"
        n1.value = ''
        n2.value = ''
    }
}

function multiplicacao(){
    if(n1.value=='' || n2.value==''){
        alert("Preencha todos os campos!")
    } else{
        let num1 = Number(n1.value)
        let num2 = Number(n2.value)
        let operation = num1*num2
        res.innerHTML = `<p>${n1.value} x ${n2.value} = ${operation}</p>`
        res.style.backgroundColor = "green"
        res.style.color = "white"
        n1.value = ''
        n2.value = ''
    }
}

function divisao(){
    if(n1.value=='' || n2.value==''){
        alert("Preencha todos os campos!")
    } else{
        let num1 = Number(n1.value)
        let num2 = Number(n2.value)
        let operation = num1/num2
        res.innerHTML = `<p>${n1.value} / ${n2.value} = ${operation}</p>`
        res.style.backgroundColor = "green"
        res.style.color = "white"
        n1.value = ''
        n2.value = ''
    }
}

function clean(){
    n1.value = ''
    n2.value = ''
    res.innerHTML = `<p>Resultado...</p>`
    res.style.backgroundColor = "white"
    res.style.color = "gray"
}