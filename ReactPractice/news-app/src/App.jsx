import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import Components from "./components";
// https://newsapi.org/v2/top-headlines?q=market&apiKey=b6fde713efe64af282f1d17871627ca7
//we can alter the q query parameter to use it for different search parameters.
//also we can add the category query parameter to get news articles from specific categories.
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  return (
    <BrowserRouter>
      <Components.NavbarComponent />
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
        <Routes>
          <Route
            path="/"
            element={<Components.NewsList setIsLoading={setIsLoading} news={news} setNews={setNews} />}
          />
          <Route path="about-us" element={<Components.About />} />
          <Route path="contact-us" element={<Components.Contact />} />
          <Route path="signin" element={<Components.Signin />} />
          <Route path="signup" element={<Components.Signup />} />
          <Route path="/news/:index" element={<Components.DetailNews news={news}/>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
