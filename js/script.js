// VARIABILE BUTTON
let button = document.getElementById("button")

// INSERIAMO UN ADDEVENTLISTENER AL BUTTON
button.addEventListener('click', function(){
    // VARIABILE NOME E COGNOME
    let nome_cognome = document.getElementById("name_utente").value
    console.log(nome_cognome)
    document.getElementById("name").innerHTML = nome_cognome 
    
    // VARIABILE KM
    let km = parseInt(document.getElementById("km").value)
    console.log(km)

    // VARIABILE AGE
    let age = parseInt(document.getElementById("age").value)
    console.log(age)
    
    // VARIABILE TARIFFA
    let tariffa = (km * 0.21).toFixed(2)
    console.log(tariffa)
    document.getElementById("costo_biglietto").innerHTML = tariffa+('€')

    // VARIABILE CARROZZA
    let carrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById("carrozza").innerHTML = carrozza

    // VARIABILE CODICE CP
    let codice_cp = (Math.random() * 10 + 1).toFixed(3); 
    document.getElementById("codice_cp").innerHTML = codice_cp

    if (age === 1) {
        tariffa = (tariffa * 0.8 ).toFixed(2)
        console.log(tariffa)
        document.getElementById("costo_biglietto").innerHTML = tariffa+('€')
        
    } else if (age === 2) {

        tariffa = (tariffa * 0.6 ).toFixed(2)
        console.log(tariffa)
        document.getElementById("costo_biglietto").innerHTML = tariffa+('€')

        
    }else if (age === 3) {
        console.log(tariffa)

        
        
    }


    
})




