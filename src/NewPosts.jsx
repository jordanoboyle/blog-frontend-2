export function NewPosts() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form id="idForm">
        <div>
          Post Title: <input type="text" id="logPostTitle" />
        </div>
        <div>
          Date Entry: <input type="text" id="logPostDate" />
        </div>
        <div>
          Record Game Data Here: <input type="text" id="logPost" />
        </div>
        <button type="submit">SAVE YOUR GAME</button>
      </form>
    </div>
  );
}
