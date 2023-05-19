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


    // VARIABILE AGE
    let age = parseInt(document.getElementById("age").value)

    
    // VARIABILE TARIFFA
    let tariffa = (km * 0.21).toFixed(2)

    document.getElementById("costo_biglietto").innerHTML = tariffa+('€')

    // VARIABILE CARROZZA
    let carrozza = Math.floor(Math.random() * 10) + 1;
    document.getElementById("carrozza").innerHTML = carrozza

    // VARIABILE CODICE CP
    let codice_cp = (Math.random() * 10 + 1).toFixed(3); 
    document.getElementById("codice_cp").innerHTML = codice_cp

    

    // PRIMA CONDIZIONE 
    if (age === 1) {
        tariffa = (tariffa * 0.8 ).toFixed(2)

        document.getElementById("costo_biglietto").innerHTML = tariffa+('€')

        let ticket_type = ('')
        document.getElementById("ticket_type").innerText = ('Biglietto per minori')



    // SECONDA CONDIZIONE    
    } else if (age === 2) {

        tariffa = (tariffa * 0.6 ).toFixed(2)

        document.getElementById("costo_biglietto").innerHTML = tariffa+('€')

        let ticket_type = ('')
        document.getElementById("ticket_type").innerText = ('Biglietto per over-65')


    // TERZA CONDIZIONE   
    }else if (age === 3) {

        let ticket_type = ('')
        document.getElementById("ticket_type").innerText = ('Biglietto del Standard')


        
        
    }


    
})


let button_reset = document.getElementById("button_anulla")

button_reset.addEventListener('click', function(){

    //VARIABILE NAME
    document.getElementById("name").innerHTML = ''
   
    // VARIABILE AGE
    let age = parseInt(document.getElementById("age").value)
    
    // VARIABILE TARIFFA
    document.getElementById("costo_biglietto").innerHTML = ''

    // VARIABILE CARROZZA
 
    document.getElementById("carrozza").innerHTML = ''

    // VARIABILE CODICE CP
 
    document.getElementById("codice_cp").innerHTML = ''

    // TIPO DI BIGLIETTO
    document.getElementById("ticket_type").innerText = ''



    


})




