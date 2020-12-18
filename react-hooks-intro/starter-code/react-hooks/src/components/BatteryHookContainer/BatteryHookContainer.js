// Update the import to include the useState hook
import React, { useState, useEffect } from 'react';
// Import the Battery component used for visualization
import Battery from '../Battery/Battery';
import {register, unregister} from '../../utils/battery';

function BatteryHookContainer () {
   // // useState always returns an array of two elements
   // const arr = useState(.55);
   // // First element is the value of the state
   // const level = arr[0];
   // // Second element is a setter function for updating the state
   // const setLevel = arr[1];
   // const [charging, setCharging] = useState(false);

   const [batteryData, setBatteryData] = useState({
      level: .55,
      charging: true
   });

   function updateBattery(data) {
      setBatteryData(data);
   }

   useEffect(() => {
      register(updateBattery);
      return () => {
         unregister(updateBattery);
      };
   }, []);

   return (
      <>
         {/* <Battery level={level} /> */}

         <Battery level={batteryData.level} charging={batteryData.charging} />

         {/* <button onClick={() => setLevel(level + 0.1)}>Update Level</button> */}

         <button onClick={() => setBatteryData({level: batteryData.level + .01, charging: false})}>
           Update Level
         </button>
      </>
   );
}

export default BatteryHookContainer;