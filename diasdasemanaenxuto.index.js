let dia = "sábado"; 
const mensagens = {
  "segunda": "Dia de começar a semana com energia!",
  "terça": "Hora de aprender coisas novas!",
  "quarta": "Metade da semana, continue firme!",
  "quinta": "Quase lá, um pouco mais de esforço!",
  "sexta": "Dia de comemorar, o fim de semana está chegando!",
  "sábado": "Final de semana! Descanse e divirta-se!",
  "domingo": "Final de semana! Descanse e divirta-se!"
};

console.log(mensagens[dia] || "Dia inválido, escolha outro!");
