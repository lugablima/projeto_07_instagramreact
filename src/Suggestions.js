function Suggestion(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imgProfile} />
        <div class="texto">
          <div class="nome">{props.nameProfile}</div>
          <div class="razao">{props.reasonProfile}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}

export default function Suggestions() {
  const suggestionsData = [
    { 
      imgProfile: "./assets/img/bad.vibes.memes.svg", 
      nameProfile: "bad.vibes.memes", 
      reasonProfile: "Segue você" 
    },
    { 
      imgProfile: "./assets/img/chibirdart.svg", 
      nameProfile: "chibirdart", 
      reasonProfile: "Segue você" 
    },
    {
      imgProfile: "./assets/img/razoesparaacreditar.svg",
      nameProfile: "razoesparaacreditar",
      reasonProfile: "Novo no Instagram",
    },
    { 
      imgProfile: "./assets/img/adorable_animals.svg", 
      nameProfile: "adorable_animals", 
      reasonProfile: "Segue você" 
    },
    { 
      imgProfile: "./assets/img/smallcutecats.svg", 
      nameProfile: "smallcutecats", 
      reasonProfile: "Segue você" 
    },
  ];

  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {suggestionsData.map((sugg) => (
        <Suggestion imgProfile={sugg.imgProfile} nameProfile={sugg.nameProfile} reasonProfile={sugg.reasonProfile} />
      ))}
    </div>
  );
}
