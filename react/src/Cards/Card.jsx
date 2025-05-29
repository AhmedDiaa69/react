import PropTypes from "prop-types";
import styles from "./Cards.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import TextPressure from "../components/TextPressure";

function Card_({
  no = 0,
  name = "undefined",
  title = "unknown",
  text = "idk tbh",
}) {
  const style = {
    width: "18rem",
  };
  PropTypes.checkPropTypes(
    Card_.propTypes,
    { name, no, title, text },
    "prop",
    "Card_"
  );

  const src = `https://dummyimage.com/300X200/92${no}/fff&text=${name}`;

  // so i can go to a website using the button

  let click;

  const nName = (name || "").trim().toLowerCase();

  if (nName == "dino") {
    click = () => (window.location.href = "https://chromedino.com/");
  } else if (nName == "potato") {
    click = () =>
      (window.location.href = "https://en.wikipedia.org/wiki/Potato");
  } else if (nName == "mario") {
    click = () =>
      (window.location.href = "https://en.wikipedia.org/wiki/Mario");
  }

  return (
    <Card style={style} bg="dark" text="white">
      <Card.Img variant="top" src={src} loading="lazy" />
      <Card.Body>
        <Card.Title>
          <div
            style={{
              position: "relative",
              height: "120px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextPressure
              text={title}
              flex={true}
              alpha={false}
              stroke={false}
              width={false}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#ff0000"
              minFontSize={24}
            />
          </div>
        </Card.Title>
        <Card.Text className={styles.text}>{text}</Card.Text>
        <Button variant="primary" onClick={click}>
          My profile
        </Button>
      </Card.Body>
    </Card>
  );
}

Card_.propTypes = {
  name: PropTypes.string,
  no: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Card_;
