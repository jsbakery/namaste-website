import React from 'react';

import namasteMessage from './assets/NamasteTiffinsMessage.jpg';

const appStyle = {
    display: 'flex',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: '#428895',
};
const mapStyle = {
    position: 'absolute',
    zIndex: 10,
    width: '150%',
    height: '100%',
    opacity: 0.5,
    marginLeft: '-50%',
};
const messageImageStyle = {
    zIndex: 11,
};
const creditsStyle = {
    position: 'absolute',
    bottom: 0,
    marginBottom: 3,
    fontSize: 10,
    color: '#fff',
    zIndex: 11,
};

function App() {
    return (
        <div style={appStyle}>
            <iframe
                title="Namaste Tiffins location"
                style={mapStyle}
                frameBorder="0"
                src="https://www.google.com/maps/embed/v1/place?q=Namaste+Tiffins,+Cullen+Road,+opp.+Bhima+Jewellers,+Erezha,+Mullakkal,+Alappuzha,+Kerala,+India&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
            <img
                src={namasteMessage}
                style={messageImageStyle}
                alt="Namaste Tiffins welcome message"
            />
            <div style={creditsStyle}>
                A NE.RA.SA Venture
            </div>
        </div>
    );
}

export default App;
