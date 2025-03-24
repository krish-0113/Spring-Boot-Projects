import React from "react";
import { 
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Container,
    Button
} from "reactstrap";
import axios from 'axios';
import base_url from "../api/services-api";
import { toast } from "react-toastify";

// ✅ Corrected function declaration with destructured props
const Course = ({ course, update }) => {

    // ✅ Function to handle course update
    const updateCourse = () => {
        axios.put(`${base_url}/courses/${course.id}`, course).then(
            (response) => {
                console.log(response);
                toast.success("Course updated successfully!");
            },
            (error) => {
                console.log(error);
                toast.error("Update failed! Server error.");
            }
        );
    };

    // ✅ Function to delete the course
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {  // ✅ Fixed 'response' spelling
                console.log(response);
                toast.success("Course deleted successfully!");
                update(id); // ✅ Update UI after deletion
            },
            (error) => {
                console.log(error);
                toast.error("Course not deleted! Server issue.");
            }
        );
    };

    return (
        <Card className="mt-2">
            <CardBody>
                {/* ✅ Display Course Title */}
                <CardSubtitle className="font-weight-bold">
                    {course.title}
                </CardSubtitle>

                {/* ✅ Display Course Description */}
                <CardText>{course.description}</CardText>

                <Container>
                    {/* ✅ Delete Button */}
                    <Button color="danger" onClick={() => deleteCourse(course.id)}>
                        Delete
                    </Button>

                    {/* ✅ Update Button */}
                    <Button color="warning" className="ml-3" onClick={updateCourse}>
                        Update
                    </Button>
                </Container>
            </CardBody>
        </Card>
    );
};

export default Course;
