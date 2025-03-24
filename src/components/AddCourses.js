import React, { Fragment, useState } from "react";
import { Button, FormGroup, Input } from "reactstrap";
import Course from './Course';
import base_url from './../api/services-api';
import { Response } from './../../node_modules/typescript/lib/typescript.d';
import { toast } from "react-toastify";

const AddCourses =() =>{

    useEffect(() => {
        document.title = "Add courses || krishna";
    }, []);

      //to store 
      const[Course,setCourse] = useState({});

      //form handler function 
      const handleForm =(e)=>{
        console.log(Course);
        postdatatoServer(Course);
        e.preventDefault();
      }

      //function to post data on server
      const postdatatoServer = (Course) => {
        axios.post(`${base_url}/courses`, Course).then(
            (response) => {
                console.log(response); // ✅ Backend ka response console me print hoga
                toast.success("Course added successfully!"); // ✅ Success message
                setCourse({ id: "", title: "", description: "" }); // ✅ Form clear karna
            },
            (error) => {
                console.log(error); // ✅ Error debugging ke liye
                toast.error("Something went wrong!"); // ✅ Error message show karna
            }
        );
    }
    
    return (
        
        <Fragment>
            <h1 className="text-centre">Fill course detaills...</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                <Label for="userId">Course Id</Label>
                <Input 
                type="text"
                placeholder="Enter here.."
                class="userId"
                Id="userId"
                onChange={(e) =>{
                    setCourse({...Course,id:e.target.value})
                }}/>
                </FormGroup>

                <FormGroup>
                <Label for="title"> Course Title</Label>
                <Input 
                type="text"
                placeholder="Enter title here.."
                Id="title"
                onChange={() =>{
                    setCourse({...Course,title:e.t.value});
                }}
                />
                </FormGroup>

                <FormGroup>
                <Label for="description">Course Description</Label>
                <Input 
                type="textarea"
                placeholder="Enter description here.."
                Id="description"
                style={{height: 150}}
                
                onChange={() =>{
                    setCourse({...Course,description:e.t.value});
                }}/>
                </FormGroup>

                <Container>
                    <Button type="submit" color="success">Add courses</Button>
                    <Button  type="reset"
                    color="warning"
                    onClick={()=>{
                        setCourse({id:"",title:"",description:""}); 
                    }}>Clear</Button>
                </Container>
            </Form>
        </Fragment>
    );
}

export default AddCourses;