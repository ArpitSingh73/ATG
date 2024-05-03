import Navbar from './components/navbar/Navbar';
import Category from './components/category/Category';
import Image from './components/image/Image';
import Post from './components/post/Post';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Image></Image>
      <Category></Category>
      <div
        className="mx-auto d-flex gap-5 justify-content-center"
        style={{ "max-width": "1040px" }}
      >
        <Post></Post>
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
