let button = document.getElementById("button")

button.addEventListener('click', function(){
    let nome_cognome = document.getElementById("name").value
    console.log(nome_cognome)

    let km = document.getElementById("km").value
    console.log(km)
    
    let tariffa = km * 0.21
    console.log(tariffa)

})