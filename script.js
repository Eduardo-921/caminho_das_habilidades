const desafios = ["Resolver problemas logicos",
     "Aprender novas funções", 
     "Criar soluções",
     "Analise de erros"
];

function funcaoiniciar(){
    const name = document.getElementById("name").value;
    if (name ===""){
        alert("Digite sue nome primeiro");
        return;
    }
    const numeros = Math.floor(Math.randon() * desafios.length);
    const desafio = desafios[numeros];
    document.getElementById("resposta").innerHTML =`
    <h2> Olá ${name}</h2>`
    `<h2> Seu desafio é: </h2>
    <h3>${desafio}</h3>
    <label for="resposta"
    Qual o seu projeto para realizar esse desafio?
    </label>
    <br><br>
    <texttarea
    id= "resposta"
    rows = "5"
    cols = "40"
    placeholder = "Digite aqui sua resposta ..."
    ></textarea>
    <br><br>
    <button onclick="avaliarresposta()">
        Enviar a resposta
    </button>
    `
    
}

function avaliarresposta(){
    const name = document.getElementById("name").value;
    const resposta = document.getElementById("resposta").value;
    const textodesafio = document.getElementById("# resultado h3").innerHTML;
    if (resposta.trim() ===""){
        alert("Digite sua resposta para continuar");
        return;
    }
    let pontos = 0
    if (resposta.length >= 30){
        pontos += 30;
    }
    const texto = resposta.toLowerCase();
    if (texto.include("criar")||
        texto.include("desenvolver")||
        texto.include("elaborar")){
        pontos += 20;
    }
    if (texto.include("estudo")||
        texto.include("projeto")||
        texto.include("pesquisa")){
        pontos += 20;
    }
    const tempo = Math.floor(Math.randon() * 10)+1;
    let nivel
    if (pontos >= 90){
        nivel = "Inventor de ideias"
    }
    else if (pontos >= 60){
        nivel = "desenvolvedor de ideias"
    }
    else if (pontos >= 30){
        nivel = "explorador de ideias"
    }
    else{
        nivel = "Pesquisador iniciante"
    }


}
