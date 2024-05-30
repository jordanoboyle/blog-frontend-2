import { NewPosts } from "./NewPosts";
import { PostsIndex } from "./PostsIndex";

export function Content() {
  const handlesIndexPosts = () => {
    console.log("GET That DATA!")
  }
  let posts = [
    {
      id: 1,
      title: "Game 1",
      date: "Date: month day year",
      image: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1708091/capsule_616x353.jpg?t=1706638660",
      body: "Here is some information about Halo Infinite!",
    },
    {
      id: 2,
      title: "Super Contra",
      date: "Date: month day year",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbE3qwmloOV1eCR6WLcjSlD5kk36DftHQ-EQ&s",
      body: "Here is some information about contra",
    }
  ];
  return (
    <div>
      <NewPosts />
      <br></br>
      <button title="PressHere" onClick={handlesIndexPosts}>
        BIG RED BUTTON
      </button>
      <PostsIndex posts={posts} />
    </div>
  );
}
