import React from 'react';
import { Container, Button } from 'reactstrap';

const Home = () => {
    return (
        <div>
            <Container className="text-center">
                <h1>This is all learning courses</h1>
                <p>This is a course application developed by Krishna Jadhav</p>
                <Button color='primary' outline>Start using</Button>
            </Container>
        </div>
    );
};

export default Home;
