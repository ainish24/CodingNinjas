import { Button, Card } from "react-bootstrap";

const styles={
      commentCard: {
    width: "35rem",
    marginLeft: "auto",
    marginRight: "20.5em",
    borderRadius: '0',
    borderTop:'none'
  },
  commentUserAvatar:{
        width: "20px",
    height: "20px",
    borderRadius: "50%",
  }
}

const Comment = ({user, content, avatar}) => {
  return (
    <Card style={styles.commentCard}>
        <Card.Body className="ms-3 p-2">
          <blockquote className="blockquote mb-0 fs-6">
            <p className="fs-6">
                {content}
            </p>
            <footer className="blockquote-footer">
              <img
                style={styles.commentUserAvatar}
                src={avatar}
                alt="userImg"
                className="me-2"
              />
              @{user}
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
  )
}

export default Comment