import React from 'react';

function Days(){
    let day = new Date().getDay()
    let greeting;
    switch(day) {
        case 1:
            greeting = 'Happy Monday!';
        case 2:
            greeting = 'Happy Tuesday!';
        case 3:
            greeting = 'Happy Wednesday!';
        case 4:
            greeting = 'Happy Thursday!';
        case 5:
            greeting = 'Happy Friday!';
        case 6:
            greeting = 'Happy Saturday!';
        case 7:
            greeting = 'Happy Monday!';
            
    }
    
    return (
        <p>{greeting}</p>
    );
}

export default Days;