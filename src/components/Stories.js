import Story from "./Story";

export default function Stories() {
  const storiesData = [
    { image: "./assets/img/9gag.svg", name: "9gag" },
    { image: "./assets/img/meowed.svg", name: "meowed" },
    { image: "./assets/img/barked.svg", name: "barked" },
    { image: "./assets/img/nathanwpylestrangeplanet.svg", name: "nathanwpylestrangeplanet" },
    { image: "./assets/img/wawawicomics.svg", name: "wawawicomics" },
    { image: "./assets/img/respondeai.svg", name: "respondeai" },
    { image: "./assets/img/filomoderna.svg", name: "filomoderna" },
    { image: "./assets/img/memeriagourmet.svg", name: "memeriagourmet" },
  ];

  return (
    <div class="stories">
      {storiesData.map((story) => (
        <Story image={story.image} name={story.name} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
