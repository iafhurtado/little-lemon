// import './App.css';
import {ChakraProvider} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import FootNav from "./components/FootNav";
import OffsettingExample from "./components/FootNav";
import AutoLayoutExample from "./components/FootNav";
import ResponsiveAutoExample from "./components/FootNav";
import HorizontalExample from "./components/FootNav";
import ButtonsExample from "./components/FootNav";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import Specials from "./components/Specials";

function App() {
    return (
      <ChakraProvider>
      <ThemeProvider>
          <main>
            <NavBar/>
            <Specials/>
            <Highlights/>
            {/* <Testimonials />
            <About />  */}
            {/* <FootNav /> */}
          </main>
      </ThemeProvider>
      </ChakraProvider>
    );
  }
    // <div className="container">
    //   <header className="App-header">
    //   <nav>
    //   <HStack spacing={30}>
    //       <Avatar
    //             src={Logo_LL} alt=""
    //             width={150}
    //             name="Riki Wendri"
    //       />
    //       <li><a href="/Home">Home</a></li>
    //       <li><a href="/About">About</a></li>
    //       <li><a href="/Menu">Menu</a></li>
    //       <li><a href="/Reservation">Reservation</a></li>
    //       <li><a href="/Order Online">Order Online</a></li>
    //       <li><a href="/Login">Login</a></li>
    //     </HStack>
    //     </nav>
    //   </header>
    //   <main>
    //     <HStack>
    //       <article>
    //         <h1>
    //         Little Lemon
    //         </h1>
    //         <h3>Chicago</h3>
    //         <img
    //             src={croffle} alt=""
    //             width={150}
    //             name="Riki Wendri"
    //       />
    //       </article>
    //     </HStack>
    //   </main>
    // </div>

export default App;
