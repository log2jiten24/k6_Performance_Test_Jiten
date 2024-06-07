import http from 'k6/http' ;
import {sleep} from 'k6/http' ;


export const options = {
    vus : 10 , //usage of 10 threads 
    duration : '30s', //duration to run the test in 30 seconds
    //execute the tests on the grafana cloud 
    cloud: {
        // Project: k6_Demo_Performance_Test
        projectID: 3697242,
        // Test runs with the same name groups test runs together.
        name: 'Test_Run_Demo_01'
      } 
}

//sudden ramp up to test the performance of the Application 
export const options_ramp_up = {
   
    stages: [
      { duration: '30s', target: 20 },//20 virtual users will run for 30 seconds 
      { duration: '1m30s', target: 10 },
      { duration: '20s', target: 0 },
    ],

   
  };

export default function () {
    //pass the http get request 
    http.get('http://test.k6.io') ;
    sleep(1) ;
}