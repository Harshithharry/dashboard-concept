import React from 'react';
import { Row, Col } from 'reactstrap';
import SvgIcon from "react-icons-kit";
import { ic_thumb_up } from 'react-icons-kit/md/ic_thumb_up';
import { ic_thumb_down } from 'react-icons-kit/md/ic_thumb_down'

const Icon = props => <SvgIcon size={props.size} icon={props.icon} />;

const HighlightsStatBlock = (props) => (

    <Row>
        {props.blockValues.map((item) =>
            <Col xs="12" sm="6" md="6" lg="3" key={item.id}>
                <div className="box">
                    <div className="box-title">
                        <span className="label label-success float-right">{item.days} Days ago</span>
                        <h5>{item.name}</h5>
                    </div>
                    <div className="box-content">
                        {(item.status === "Lose")
                            ?
                            <h1 className="text-danger">${item.amount}</h1>
                            :
                            <h1 >${item.amount}</h1>
                        }

                        {(item.status === "Won")
                            ?
                            <div className="highlights-stat font-bold text-success">
                                {item.status} {" "}
                                <Icon color="white" size="16" icon={ic_thumb_up} />
                            </div>
                            :
                            <div className="highlights-stat font-bold text-danger">
                                {item.status} {" "}
                                <Icon color="white" size="16" icon={ic_thumb_down} />
                            </div>}

                        <small>{item.name} {item.status}</small>
                    </div>
                </div>
            </Col>)}
    </Row>

);

export default HighlightsStatBlock;



