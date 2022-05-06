function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgProfile} />
          {props.nameProfile}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imgPost} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.imgLike} />
          <div class="texto">
            Curtido por <strong>{props.profileLike}</strong> e <strong>outras {props.numberLikes} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const postsData = [
    {
      imgProfile: "./assets/img/meowed.svg",
      nameProfile: "meowed",
      imgPost: "./assets/img/gato-telefone.svg",
      imgLike: "./assets/img/respondeai.svg",
      profileLike: "respondeai",
      numberLikes: 101.523,
    },
    {
      imgProfile: "./assets/img/barked.svg",
      nameProfile: "barked",
      imgPost: "./assets/img/dog.svg",
      imgLike: "./assets/img/adorable_animals.svg",
      profileLike: "adorable_animals",
      numberLikes: 99.159,
    },
  ];

  return (
    <div class="posts">
      {postsData.map((post) => (
        <Post
          imgProfile={post.imgProfile}
          nameProfile={post.nameProfile}
          imgPost={post.imgPost}
          imgLike={post.imgLike}
          profileLike={post.profileLike}
          numberLikes={post.numberLikes}
        />
      ))} 
    </div>
  );
}
