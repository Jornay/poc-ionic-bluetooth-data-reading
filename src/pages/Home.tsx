import React, { useEffect, useState } from 'react';
import { BluetoothSerial } from 'capacitor-bluetooth-serial';

const HomePage = () => {
  const [receivedData, setReceivedData] = useState('');

  useEffect(() => {
    BluetoothSerial.addListener('dataReceived', (data) => {
      setReceivedData(data);
    });
  }, []);

  return (
    <div>
      <p>Received data: {receivedData}</p>
    </div>
  );
};

export default HomePage;
