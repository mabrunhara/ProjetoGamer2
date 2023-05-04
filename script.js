alert ("Olá seja bem vindo");
let p1 =prompt ("Digite seu nome");
let p2 =prompt ("Digite um poder que gostaria de ter");
let p3 =prompt ("Digite o nome de um vilão");
let p4 =prompt ("Digite um lugar que você gostaria de estar agora");

let msg = document.getElementById('msg');

msg.innerHTML = <p>Olá ${p1} o seu poder é a/o ${p2} você vai enfrentar o/a ${p3} no/em ${p4}</p>