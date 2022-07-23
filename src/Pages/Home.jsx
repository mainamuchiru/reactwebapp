import React from 'react';
import { Steps } from 'antd';
const { Step } = Steps;
function Home(){
    
    return(
        <div style={{ display: 'block', width: 700, padding: 30 }}>
            <h1>This is the home page</h1>
            <Steps direction="horizontal" current={1}>
            <Step title="first step" />
            <Step title="second step" />
            <Step title="third step" />
            </Steps>
        </div>
    );
}

export default Home;