let suaidade;
let aventura;
let ação;
let RPG;
let titulo;
let corpo;
let jogos = {
  menor10:{
  ação: "Minecrft",
  aventura: "Animal crossing",
  RPG: "Pokemon Let's Go"  
  },
  entre10e14:{
    ação: "Super Smash Bross",
    aventura: "Luigi's Mansion 3",
    RPG: "Starwlew Valley",
  },
  entre14e16:{
    ação: "Spider-Man",
    aventura: "Fortnite",
    RPG: "Genshin Impact",
  },
  entre16e18:{
    ação: "Apex Legends",
    aventura: "Read Dead Redemption",
    RPG: "Hades"
  },
  maior18:{
    ação: "GTA V",
    aventura: "Death Stranding",
    RPG: "Cyberpunk"
  }
};

let button;

function setup() {
  createCanvas(850, 400).position(100,100);
  createSpan("Qual sua idade?").position(670,560).addClass("hidden");
  suaidade = createInput("").position(630,585).addClass("hidden");
  ação = createCheckbox("Gosta de jogos de ação? 😎").position(100,600).addClass("hidden");
  aventura = createCheckbox("Gosta de jogos de aventura? 🤠").position(100,650).addClass("hidden");
  RPG = createCheckbox("Gosta de jogos de RPG? 👻").position(100,700).addClass("hidden");
  titulo = "Permanent Marker"
  corpo = "Bebas Neue";
  button = createButton("START PLAY👽").position(width/2,520);
  button.mousePressed(bota);
  button.addClass("botao");
}

function bota(){
  selectAll(".hidden").forEach((el)=>el.removeClass("hidden"));
  button.hide();
}

function draw() {
  background("rgb(255,255,255)");
  fill("black");
  stroke("rgb(0,255,201)");
  textAlign(CENTER,CENTER);
  textSize(40);
  text("MELHOR INDICADOR DE JOGOS", width/2, 30);
  textFont(corpo);
  
  
  let idade = parseInt(suaidade.value());
  let checkação = ação.checked();
  let checkaventura = aventura.checked();
  let checkRPG = RPG.checked();
  let jogo = "insira suas preferências";
  if (suaidade.value() !==""){
  jogo = mostrajogo(idade, checkação, checkaventura, checkRPG);  
  }
  fill("black");
  textAlign(CENTER, CENTER);
  textSize(40);
  text(jogo, width/2, height/2)
  textFont(titulo)
}

function mostrajogo(idade, checkação, checkaventura, checkRPG){
  if (isNaN(idade)){
    return "Idade Inválida";
  } else
    if (idade < 5){
      return "Você é uma criança"
    } else
      if (idade > 120){
        return "Já Faleceu"
      }
  if (idade >= 5 && idade < 10){
    if (checkação){
  return jogos["menor10"]["ação"];
    }
      if (checkaventura){
  return jogos["menor10"]["aventura"];
    }
      if (checkRPG){
  return jogos["menor10"]["RPG"];
    }
        }
  else if (idade >= 10 && idade < 14){
    if (checkação){
  return jogos["entre10e14"]["ação"];
    }
      if (checkaventura){
  return jogos["entre10e14"]["aventura"];
    }
      if (checkRPG){
  return jogos["entre10e14"]["RPG"];
    }
  }
    else if (idade >= 14 && idade < 16){
    if (checkação){
  return jogos["entre14e16"]["ação"];
    }
      if (checkaventura){
  return jogos["entre14e16"]["aventura"];
    }
      if (checkRPG){
  return jogos["entre14e16"]["RPG"];
    }
  }
  else if (idade >= 16 && idade < 18){
    if (checkação){
  return jogos["entre16e18"]["ação"];
    }
      if (checkaventura){
  return jogos["entre16e18"]["aventura"];
    }
      if (checkRPG){
  return jogos["entre16e18"]["RPG"];
    }
  }
  else if (idade >=18){
    if (checkação){
  return jogos["maior18"]["ação"];
    }
      if (checkaventura){
  return jogos["maior18"]["aventura"];
    }
       if (checkRPG){
  return jogos["maior18"]["RPG"];
    }
  }
}