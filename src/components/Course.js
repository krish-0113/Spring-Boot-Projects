import React from "react";
import { 
    Card,
    CardBody,
    CardSubtitle,
    CardText,
    Container,
    Button
} from "reactstrap"; // ✅ Importing UI components from Reactstrap

import axios from 'axios'; // ✅ Importing Axios for API requests
import base_url from "../api/services-api"; // ✅ Importing Base API URL
import { toast } from "react-toastify"; // ✅ Importing Toast for notifications

// ✅ Functional Component to Display Course Information
const Course = ({ course, update }) => {

    // ✅ Function to Update Course
    const updateCourse = () => {
        axios.put(`${base_url}/courses/${course.id}`, course) // 🔹 Sending PUT request to update the course
            .then((response) => {
                console.log(response);
                toast.success("Course updated successfully!"); // 🔹 Show success notification
            })
            .catch((error) => {
                console.log(error);
                toast.error("Update failed! Server error."); // 🔹 Show error notification
            });
    };

    // ✅ Function to Delete Course
    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`) // 🔹 Sending DELETE request to remove the course
            .then((response) => {  
                console.log(response);
                toast.success("Course deleted successfully!"); // 🔹 Show success notification
                update(id); // 🔹 Refresh UI after deletion
            })
            .catch((error) => {
                console.log(error);
                toast.error("Course not deleted! Server issue."); // 🔹 Show error notification
            });
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
