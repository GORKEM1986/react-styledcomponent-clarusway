import Header from "./components/Header";
import Container from "./components/styled/Container.styled";
import { GlobalStyles } from "./components/styled/GlobalStyles.styled";


//!Theme kullanımı
import { ThemeProvider } from "styled-components"; 
import Card from "./components/Card";
import Footer from "./components/Footer";

const styles = {
  colors:{
    secondary:"#666",
    primary:"#eee"
  }, 
  margins:{

  },
  paddings:{

  },
  breakpoints:{
xs:"300px", sm:"500px", md:"700px"
  }
}

const App = () => {
  return (
    <ThemeProvider theme= {styles}>
    <GlobalStyles/>
    <Container>
     <Header/>
     <Card/>
     </Container>
    <Footer/>
    </ThemeProvider>
  
  );
};

export default App;
