import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaTimesCircle } from "react-icons/fa";

const TransferList = ({ transferList, setTransferList }) => {
  const handleDoubleClick = (id) => {
    setTransferList(
      transferList.map((item) =>
        item.id === id ? { ...item, consulted: !item.consulted } : item
      )
    );
  };
  const handleDelete = (id) => {
    setTransferList(transferList.filter((y) => y.id !== id));
  };
  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(166, 224, 28)" }}>
        Completed Transfer List
      </h3>
      {!transferList.length && (
        <img src="./img/superligtransfers.jpg" alt="transfers" />
      )}
      
      {transferList.map((item) => {
        const { id, team, consulted, player } = item;
        
        return (
            
          <div
            key={id}
            className={consulted ? "transferList consulted" : "transferList "}
            onDoubleClick={() => handleDoubleClick(id)}
          >
            <Row className="justify-content-center align-items-center g-3">
              <Col xs={12} sm={12} md={3}>
                <h5>{player}</h5>
              </Col>
              <Col xs={12} sm={12} md={3}>
                <img src="./img/indir.jpeg" alt="sss" width="250px" height="50px"/>
              </Col>
              <Col xs={12} sm={12} md={3}>
                <h5 className="text-danger">{team}</h5>
              </Col>
              <Col xs={12} sm={12} md={3} className="text-end">
                <FaTimesCircle
                  className="text-danger fs-1"
                  type="button"
                  onClick={() => handleDelete(id)}
                />
              </Col>
            </Row>
          </div>
        );
      })}
    </Container>
  );
};

export default TransferList;
