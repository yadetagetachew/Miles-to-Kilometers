function convert() {
    let miles = document.getElementById('miles').value;
    let kilo = document.getElementById('kilo');

    if (isNaN(miles)){
        kilo.innerHTML = 'NaN';
    }
    else{
        let kiloOutput = 1.60934 * parseFloat(miles);
        kilo.innerHTML = kiloOutput;
    }
};

function animation(){
    document.getElementById('move').className = 'runner'
}