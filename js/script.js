function convert() {
    let miles = document.getElementById('miles').value;
    let kilo = document.getElementById('kilo');

    if (isNaN(miles)){
        kilo.innerHTML = 'Please enter number';
    }
    else{
        let kiloOutput = 1.60934 * parseFloat(miles);
        kilo.innerHTML = 'Kilometers = ' + kiloOutput;
    }
    
};