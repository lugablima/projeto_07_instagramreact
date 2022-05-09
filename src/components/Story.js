export default function Story(props) {
    return (
      <div class="story">
        <div class="imagem">
          <img src={props.image} alt="Story profile" />
        </div>
        <div class="usuario">{props.name}</div>
      </div>
    );
  }