import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Discussion = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <br />
          <div className="Text">Let's chat</div>
          <br />
          <Card>
            <Card.Body
              style={{
                backgroundColor: "#00E7FF",
                width: "500px",
                textAlign: "center",
              }}
            >
              <Card.Title style={{ color: "white" }}>Film Update</Card.Title>
              <Card.Text style={{ color: "white" }}>
                What movie update now?
              </Card.Text>
              <Button style={{ color: "white", backgroundColor: "#C147E9" }}>
                Let's discuss
              </Button>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Body
              style={{
                backgroundColor: "#FFCAC8",
                width: "500px",
                textAlign: "center",
              }}
            >
              <Card.Title style={{ color: "white" }}>
                Best movie of the week
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                What's the best movie of the week?
              </Card.Text>
              <Button style={{ color: "white", backgroundColor: "#C147E9" }}>
                Let's discuss
              </Button>
            </Card.Body>
          </Card>
          <br />
          <Card>
            <Card.Body
              style={{
                backgroundColor: "#F8F988",
                width: "500px",
                textAlign: "center",
              }}
            >
              <Card.Title style={{ color: "white" }}>
                Best movie recommendation{" "}
              </Card.Title>
              <Card.Text style={{ color: "white" }}>
                What movie recommendations do you think?
              </Card.Text>
              <Button style={{ color: "white", backgroundColor: "#C147E9 " }}>
                Let's discuss
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
