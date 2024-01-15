import React from "react";
import { Col } from "react-bootstrap";

const MyCard = ({movies}) => {

    let imgStyle = {
        height: "230px",
        width: "160px",
      };

    return (
        <div className="d-flex">
            {movies.map((movie) => 
                <Col className="mb-2 px-1">
                    <img className="img"  style={imgStyle} src={movie} alt="movie picture" />
                </Col>
            )}
        </div>
    );
}

export default MyCard;