import React from "react";
import { Col } from "react-bootstrap";

const MyCard = ({movies}) => {

    let imgStyle = {
        height: "200px",
        width: "140px",
      };

    return (
        <div className="d-flex">
            {movies.slice(0,7).map((movie) => 
                <Col className="mb-2 px-1">
                    <img className="img"  style={imgStyle} src={movie} alt="movie picture" />
                </Col>
            )}
        </div>
    );
}

export default MyCard;