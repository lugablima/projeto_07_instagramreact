import React from "react";

export default function Post(props) {
  const [liked, setLiked] = React.useState("heart-outline");

  function likePost() {
    (liked === "heart-outline") ? setLiked("heart-sharp") : setLiked("heart-outline");
  } 

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgProfile} alt="Post profile"/>
          {props.nameProfile}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imgPost} alt="Post content" onClick={likePost}/>
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name={liked} onClick={likePost}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgLike} alt="Liked profile"/>
          <div class="texto">
            Curtido por <strong>{props.profileLike}</strong> e <strong>outras {props.numberLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}