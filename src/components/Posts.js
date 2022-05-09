import Post from "./Post";

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
