import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <ListGroup className="menu">
            <Link className="list-group-item list-group-item-action" to="/">Home</Link>
            <Link className="list-group-item list-group-item-action" to="/add-courses">Add Courses</Link>
            <Link className="list-group-item list-group-item-action" to="/view-courses">View Courses</Link>
            <Link className="list-group-item list-group-item-action" to="/about">About</Link>
            <Link className="list-group-item list-group-item-action" to="/contact">Contact Us</Link>
        </ListGroup>
    );
}

export default Menu;
