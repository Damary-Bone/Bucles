const form = document.getElementById('calculadora');
const resultado = document.getElementById('resultado');

    form.addEventListener('submit', (event) => {
    event.preventDefault();
    const n1 = parseFloat(form.n1.value);
    const n2 = parseFloat(form.n2.value);
    var resultado;
    
    for(let i = 0; i <= 4; i++){
        switch (i) {
    case 0:
        resultado = n1 + n2;
        document.getElementById("resultado").innerHTML += "Resultado de Suma es:" + resultado + "<br>";
    break;
    
    case 1:
        resultado = n1 - n2;
        document.getElementById("resultado").innerHTML += "Resultado de Resta es:" + resultado + "<br>";
    break;
    
    case 2:
        resultado = n1 * n2;
        document.getElementById("resultado").innerHTML += "Resultado de Multiplicación es:" + resultado + "<br>";
    break;
    
    case 3:
        resultado = n1 / n2;
        document.getElementById("resultado").innerHTML += "Resultado de División es:" + resultado + "<br>";
    break;
    
    case 4:
        resultado = n1 % n2;
        document.getElementById("resultado").innerHTML += "Resultado de Módulo es:" + resultado + "<br>";
     break;
     default:
     break;
        }
    }
   
});