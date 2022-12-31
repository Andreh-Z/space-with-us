import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Food from "./SectionInfo/Food";
import Gravity from "./SectionInfo/Gravity";
import SpaceShip from "./SectionInfo/SpaceShip";

function TableInformation() {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#gravity">
      <Row>
        <Col sm={4}>
          <ListGroup>
            <ListGroup.Item action href="#gravity">
              GRAVITY
            </ListGroup.Item>
            <ListGroup.Item action href="#food">
              FOOD
            </ListGroup.Item>
            <ListGroup.Item action href="#spaceship">
              SPACE SHIP
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            <Tab.Pane eventKey="#gravity">
              <Gravity />
            </Tab.Pane>
            <Tab.Pane eventKey="#food">
              <Food />
            </Tab.Pane>
            <Tab.Pane eventKey="#spaceship">
              <SpaceShip />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TableInformation;
