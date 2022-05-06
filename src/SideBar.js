import Suggestions from "./Suggestions";

function User(props) {
  return (
    <div class="usuario">
      <img src={props.imgUser} />
      <div class="texto">
        <strong>{props.nameProfile}</strong>
        {props.nameUser}
      </div>
    </div>
  );
}

export default function SideBar() {
  return (
    <div class="sidebar">
      <User imgUser="./assets/img/catanacomics.svg" nameProfile="catanacomics" nameUser="Catana" />
      <Suggestions />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
        Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
