import './App.css';
import Footer from "./bars/Footer";
import NavBar from "./bars/NavBar";
import { Slider } from './content/Slider';
// import Content from './content/Content';
// import PropsInfo from './content/PropsInfo';
import Hocks from './content/Hocks';
import Users from './login_register/Users';

function App() {
  // const sayhello = () =>{
  //   console.log("hello world");
  // }
  // const the_hell =() =>{
  //   console.log("hello bloody hell")
  // }
  // title = "hi"
  return (

<>



<NavBar></NavBar>
<Slider></Slider>
{/* <PropsInfo onthe_hell={the_hell}/>
<PropsInfo onthe_hell={the_hell}>
  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus ut magni accusantium aliquid. Velit, nam asperiores? Et laborum, animi voluptatibus voluptatum recusandae non minima veritatis nobis, velit consectetur, voluptas ullam!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae animi voluptas, tempora magni nisi consequuntur, exercitationem numquam eos ullam blanditiis minus temporibus architecto quisquam doloremque tempore facilis! Vitae, earum!</p>
   email<input type='email'/> */}
{/* </PropsInfo> */}
{/* <Hocks title = "hello from the hell" count= "0"> */}
<Hocks>
</Hocks>
<Users/>
<Footer></Footer>
</>


  );
}

export default App;
