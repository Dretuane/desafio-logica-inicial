# desafio-logica-inicial
Meu Primeiro Repositório Dio

// PASSO A PASSO PARA LAVAGEM DE ROUPAS
// lista de passos para lavagem de roupas
const passos = [
"separar as roupas brancas",
"separar as roupas coloridas",
"separar as roupas de cama e banho",
"separar as roupas de mesa",
"separar os panos de chão",
"colocar na máquina de lavar as roupas brancas, o sabão em pó, o amaciante e o alvejante",
"colocar as roupas brancas na máquina de lavar roupas",
"ligar a torneira",
"ligar a máquina de lavar roupas e selecionar o programa para a lavagem",
"tirar as roupas da máquina de lavar roupas",
"colocar as roupas brancas no varal",
"tirar as roupas brancas do varal e dobrar as roupas brancas",
"após dobrar as roupas brancas guardar no guarda-roupa",
];
// Função para executar os passos
function executarLavagem() {
    console.log("\\ INICIO");
    passos.forEach((passo, index) => {
        console.log(`${index + 1}. ${passo}`);
    });
    console.log("\\ FIM");
}



    
