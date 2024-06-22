function showHide(){
    let icon = document.getElementById('iEscondeResp')
    if(icon.src.includes('images/icon-plus.svg')){
        icon.src = 'images/icon-minus.svg'
        document.querySelector(".resposta").innerHTML = "Para adotar um animal, você precisa preencher nosso formulário de adoção disponível no site, passar por uma breve entrevista e, em seguida, agendar uma visita ao abrigo para conhecer o animal."
        let resposta = document.querySelector(".resposta");
        resposta.style.marginBottom = '20px'
    } else {
        icon.src = 'images/icon-plus.svg'
        document.querySelector(".resposta").innerHTML = ""
        let resposta = document.querySelector(".resposta")
        resposta.style.marginBottom = '-2px'
    }
}

function showHide1(){
    let icon1 = document.getElementById('iEscondeResp1')
    if(icon1.src.includes('images/icon-plus.svg')){
        icon1.src = 'images/icon-minus.svg'
        document.querySelector(".resposta1").innerHTML = "Os requisitos incluem ser maior de 18 anos, apresentar um documento de identidade válido, comprovante de residência, e ter condições financeiras e emocionais para cuidar de um animal de estimação."
        let resposta1 = document.querySelector(".resposta1");
        resposta1.style.marginBottom = '20px'
    } else {
        icon1.src = 'images/icon-plus.svg'
        document.querySelector(".resposta1").innerHTML = ""
        let resposta1 = document.querySelector(".resposta1")
        resposta1.style.marginBottom = '-2px'
    }
}

function showHide2(){
    let icon2 = document.getElementById('iEscondeResp2')
    if(icon2.src.includes('images/icon-plus.svg')){
        icon2.src = 'images/icon-minus.svg'
        document.querySelector(".resposta2").innerHTML = "Sim, há uma taxa de adoção que ajuda a cobrir os custos com vacinas, castração, alimentação e cuidados veterinários. O valor da taxa varia dependendo do animal."
        let resposta2 = document.querySelector(".resposta2");
        resposta2.style.marginBottom = '20px'
    } else {
        icon2.src = 'images/icon-plus.svg'
        document.querySelector(".resposta2").innerHTML = ""
        let resposta2 = document.querySelector(".resposta2")
        resposta2.style.marginBottom = '-2px'
    }
}

function showHide3(){
    let icon3 = document.getElementById('iEscondeResp3')
    if(icon3.src.includes('images/icon-plus.svg')){
        icon3.src = 'images/icon-minus.svg'
        document.querySelector(".resposta3").innerHTML = "Se você não puder mais cuidar do seu animal adotado, entre em contato conosco imediatamente. Vamos trabalhar juntos para encontrar uma solução, que pode incluir a devolução do animal ao nosso abrigo."
        let resposta3 = document.querySelector(".resposta3");
        resposta3.style.marginBottom = '20px'
    } else {
        icon3.src = 'images/icon-plus.svg'
        document.querySelector(".resposta3").innerHTML = ""
        let resposta3 = document.querySelector(".resposta3")
        resposta3.style.marginBottom = '-2px'
    }
}