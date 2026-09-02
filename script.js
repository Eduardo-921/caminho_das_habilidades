const desafios = ["Resolver problemas logicos",
     "Aprender novas funções", 
     "Criar soluções",
     "Analise de erros"
];

function funçaoiniciar(){
    const name = document.getElementById("name").value;
    if (name ===""){
        alert("Digite sue nome primeiro");
        return;
    }
    const numeros = Math.floor(Math.random() * desafios.length);
    const desafio = desafios[numeros];
    document.getElementById("resposta").innerHTML =`
    <h2> Olá ${name}</h2>`
    `<h2> Seu desafio é: ${desafio}</h2>`
}
