function Header() {
  return(
  <header>
    <a href="#">Main Menu</a> | <a href="#posts-index">Game Save Data</a> | <a href="#posts-new">New Game</a>
  </header>
)}

function NewPosts () {
  return (
      <div id="posts-new">
        <h1>New post</h1>
        <form id="idForm">
          <div>
            Post Title: <input type="text" id="logPostTitle"/>
          </div>
          <div>
            Date Entry: <input type="text" id="logPostDate" />
          </div>
          <div>
            Record Game Data Here: <input type="text" id="logPost"/>
          </div>
          <button type="submit">SAVE YOUR GAME</button>
        </form>
      </div>
  )
}

function PostsIndex (props) {
  console.log("The props are", props)
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="posts">
        <h2>Game 1</h2>
        <p>This is the test: {props.name}</p>
        <p>Date: month day year</p>
        <img src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1708091/capsule_616x353.jpg?t=1706638660"/>
        <p>
          Here is some information about Halo Infinite!
        </p>
        <button className="button1" type="button">Gameplay</button>
        <h2>Super Contra</h2>
        <p>Date: month day year</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbE3qwmloOV1eCR6WLcjSlD5kk36DftHQ-EQ&s"/>
        <p>
          Here is some information about contra
        </p>
      </div>
    </div>
  )
}
function Footer () {
  return (
    <footer>
      <p>Copyright 20XX</p>
      <p>Content from many contributors</p>
      <p>Site by: Jordan O'Boyle</p>
    </footer>
  )
}

function Content () {
  let name = "BRIAN TEST"
  return (
    <div>
      <NewPosts />
      <PostsIndex name={name}/>
    </div>
  )
}

function App() {
  return (
    <div>
     <Header />
     <Content />
     <Footer />
    </div>
  );
}

export default App;