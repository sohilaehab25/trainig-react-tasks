import './App.css';
import Footer from "./bars/Footer";
import NavBar from "./bars/NavBar";
import { Slider } from './content/Slider';
import Content from './content/Content';

function App() {
  // title = "hi"
  return (

<>



<NavBar></NavBar>
<Slider></Slider>
<Content  title="hi from the hell" bgColor="bg-dark" ></Content>
<Content  title="hi from the hell" bgColor="bg-dark" ></Content>
<Content  title="hi from the hell" bgColor="bg-dark" ></Content>
<Footer></Footer>
</>


  );
}

export default App;
