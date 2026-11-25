function atualizarCampos() {
    let figura = document.getElementById("figura").value;

    document.getElementById("camposRetangulo").style.display = "none";
    document.getElementById("campoCirculo").style.display = "none";
    document.getElementById("campoQuadrado").style.display = "none";

    if (figura == "retangulo" || figura == "triangulo") {
        document.getElementById("camposRetangulo").style.display = "block";
    }
    else if (figura == "circulo") {
        document.getElementById("campoCirculo").style.display = "block";
    }
    else if (figura == "quadrado") {
        document.getElementById("campoQuadrado").style.display = "block";
    }
}

function calcularAreaRetangulo() {
    let figura = document.getElementById("figura").value;
    let area;

    if (figura == "retangulo" || figura == "triangulo") {
        let base = Number(document.getElementById("base").value);
        let altura = Number(document.getElementById("altura").value);

        if (base <= 0 || altura <= 0) {
            document.getElementById("resultado").textContent =
                "Digite medidas válidas!";
            return;
        }

        if (figura == "retangulo") {
            area = base * altura;
        } else {
            area = (base * altura) / 2;
        }
    }

    else if (figura == "circulo") {
        let raio = Number(document.getElementById("raio").value);

        if (raio <= 0) {
            document.getElementById("resultado").textContent =
                "Digite um raio válido!";
            return;
        }

        area = Math.PI * raio * raio;
    }

    else if (figura == "quadrado") {
        let lado = Number(document.getElementById("lado").value);

        if (lado <= 0) {
            document.getElementById("resultado").textContent =
                "Digite um lado válido!";
            return;
        }

        area = lado * lado;
    }

    document.getElementById("resultado").textContent =
        "Área: " + area.toFixed(2) + " cm²";
}

document.getElementById("figura").addEventListener("change", atualizarCampos);

atualizarCampos();
