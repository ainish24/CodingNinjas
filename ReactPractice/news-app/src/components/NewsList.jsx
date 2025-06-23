import { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const NewsList = ({ setIsLoading }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await axios.get(
          "https://newsapi.org/v2/top-headlines?q=war&apiKey=b6fde713efe64af282f1d17871627ca7"
        );
        const newsData = data.data.articles;
        setNews(newsData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Row>
        {news.map((article, index) => {
          return (
            <Col key={index} lg={3} md={6} xs={12}>
              <Card
                style={{ width: "18rem", height: "34rem" }}
                className="mb-4"
              >
                <Card.Img
                  variant="top"
                  src={
                    article.urlToImage
                      ? article.urlToImage
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHiRXiMePQuvwqznRXCNlsJUJA1svLiyxyGw&s"
                  }
                  style={{ aspectRatio: 7 / 5 }}
                />
                <Card.Body>
                  <Card.Title>
                    {article.title.length < 90
                      ? article.title
                      : `${article.title.slice(0, 87)}...`}
                  </Card.Title>
                  <Card.Text style={{ position: "absolute", top: "20.5rem", transform:"translateX(-2.75%)"}}>
                    {article.content && article.content.length >= 150
                      ? `${article.content.substring(0, 150)}...`
                      : article.content && article.content.length < 150
                      ? article.content
                      : article.description && article.description.length >= 150
                      ? `${article.description.substring(0, 150)}...`
                      : article.description && article.description.length < 150
                      ? article.description
                      : "No Content Available."}
                  </Card.Text>
                  <a
                    className="btn btn-outline-dark"
                    href={article.url}
                    target="_blank"
                    style={{
                      position: "absolute",
                      bottom: "1em",
                      right: "5.5em",
                    }}
                  >
                    Read More
                  </a>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default NewsList;
