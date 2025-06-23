import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import { Container } from "react-bootstrap";
import NewsList from "./components/NewsList";
import ScaleLoader from "react-spinners/ScaleLoader";
// https://newsapi.org/v2/top-headlines?q=market&apiKey=b6fde713efe64af282f1d17871627ca7
//we can alter the q query parameter to use it for different search parameters.
//also we can add the category query parameter to get news articles from specific categories.
function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <NavbarComponent />
      <Container className="text-center">
        <h1 className="display-3 my-3 mb-4">News App</h1>
        {isLoading && (
          <ScaleLoader
            height={35}
            margin={2}
            radius={1}
            width={5}
            cssOverride={{
              display: "block",
              marginTop: "16em",
              marginLeft: "auto",
            }}
          />
        )}
        <NewsList setIsLoading={setIsLoading} />
      </Container>
    </>
  );
}

export default App;
