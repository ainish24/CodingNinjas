import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import Comment from "./Comment";
const styles = {
  postCard: {
    width: "40rem",
    margin: "3em auto 0",
    borderRadius: "0.375rem 0.375rem 0 0.375rem",
  },
  userAvatar: {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
  },
};
function Post({ user, name, content, uploadTime, avatar, comments }) {
  return (
    <>
      <Card style={styles.postCard}>
        <Card.Header className="d-flex justify-content-between">
          <div>
            <img
              style={styles.userAvatar}
              src={avatar}
              alt="userImg"
              className="me-2"
            />
            <span className="fw-semibold">@{user}</span>
            <span className="text-muted ms-2">{name}</span>
          </div>
          <div>{uploadTime}</div>
        </Card.Header>
        <Card.Body>
          <Card.Text>{content}</Card.Text>
          <div className="d-flex" style={{ gap: "1em" }}>
            <Button variant="info" className="w-100">
              <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Button variant="info" className="w-100">
              <FontAwesomeIcon icon={faComment} />
            </Button>
          </div>
        </Card.Body>
      </Card>
      {
        (comments.map((comment,index) => (
          <Comment key={index} user={comment.user} content={comment.content} avatar={comment.avatar} />
        )))
      }
    </>
  );
}

export default Post;
