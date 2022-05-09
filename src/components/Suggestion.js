export default function Suggestion(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imgProfile} alt="Suggested profile" />
        <div class="texto">
          <div class="nome">{props.nameProfile}</div>
          <div class="razao">{props.reasonProfile}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
