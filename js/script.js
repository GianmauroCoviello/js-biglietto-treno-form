let button = document.getElementById("button")

button.addEventListener('click', function(){

    let nome_cognome = document.getElementById("name_utente").value
    console.log(nome_cognome)
    document.getElementById("name").innerHTML = nome_cognome 
    
    
    let km = document.getElementById("km").value
    console.log(km)
    
    let tariffa = (km * 0.21).toFixed(2)
    console.log(tariffa)
    document.getElementById("costo_biglietto").innerHTML = tariffa+('€')


    let carrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById("carrozza").innerHTML = carrozza

    let codice_cp = (Math.random() * 10 + 1).toFixed(3); 
    document.getElementById("codice_cp").innerHTML = codice_cp


    
    

    


})




