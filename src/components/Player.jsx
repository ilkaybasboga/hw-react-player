import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { AddModals } from "./AddModals";
import { useState } from "react";

const Player = ({ player, transferList, setTransferList }) => {
  const [show, setShow] = useState(false);
  const [selectedPlayerName, setSelectedPlayerName] = useState("");

  const handleClick = (playerName) => {
    setShow(true);
    setSelectedPlayerName(playerName);
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-3 " style={{ color: "rgb(110, 86, 8)" }}>
        Football Players
      </h3>
      <hr className="text-light" />
      <Row className="justify-content-center m-3 text-warning">
        {player.map((item) => (
          <Col key={item.id} xs={6} sm={4} md={3} className="">
            <img
              src={item.img}
              alt={item.name}
              className="player-img"
              onClick={() => handleClick(item.name)}
            />
            <h5>{item.name}</h5>
            <h6>{item.position}</h6>
            <hr className="text-light" />
          </Col>
        ))}
      </Row>

      <AddModals
        show={show}
        handleClose={() => setShow(false)}
        pName={selectedPlayerName}
        transferList={transferList}
        setTransferList={setTransferList}
      />
    </Container>
  );
};

export default Player;
