import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

const Secondfor = props => {
  return (
    <div className="teamplayers" style={{ display: 'flex', justifyContent: 'center'}}>
      {props.teamplayer.map(teamplayer => (
        <div className="note" key={teamplayer.id}>
          <Row>
            <Col sm="6" style={{ border: 'solid black 3px' }}>
              <Card body>
                <CardTitle>
                  <h2>{teamplayer.name}</h2>
                </CardTitle>
                <CardText>
                  <h4>{teamplayer.email}</h4>
                </CardText>
                <CardText>
                  <h4>{teamplayer.role}</h4>
                </CardText>
              </Card>
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
};

export default Secondfor;



style={{ marginLeft: '10px', backgroundColor: '#FF00FF', borderRadius: '12px', fontWeight: 'bold' }}