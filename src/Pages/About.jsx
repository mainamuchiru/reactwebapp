import React from 'react';
import { Carousel } from 'antd';
function About(){
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d76',
    };

    const data = [
        {
            id: 1,
            name: 'john doe',
            title: 'Director'
        },
        {
            id: 2,
            name: 'Jane Doe',
            title: 'Managing Director'
        }
    ];
    const listitems = data.map((employee) => 
        <li key={employee.id.toString()}>
                    {employee.name} | {employee.title}
        </li>
    );
    
    return(
        <div>
            <h1>This is the About page</h1>
            <div style={{width: 50 + '%', margin: 'auto'}}> 
            <Carousel autoplay>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
            </Carousel>
            </div>
        </div>
    );
}
export default About;