import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; // Optional, if you want to use default styles

const ExamplePopup = () => {
    return (
        <div>
            <h1>Example React Popup</h1>
            <Popup trigger={<button> Open Popup </button>} position="right center">
                <div>
                    <h3>Popup Title</h3>
                    <p>This is some additional content inside the popup!</p>
                    <button onClick={() => alert('Clicked!')}>Click Me</button>
                </div>
            </Popup>

        </div>
    );
}

export default ExamplePopup;
