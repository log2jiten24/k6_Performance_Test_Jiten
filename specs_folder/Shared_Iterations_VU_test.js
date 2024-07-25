import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'shared-iterations',
      vus: 10,
      iterations: 200,
      maxDuration: '30s',
    },
     //execute the tests on the grafana cloud 
    //  cloud: {
    //     // Project: k6_Demo_Performance_Test
    //     projectID: 3697242,
    //     // Test runs with the same name groups test runs together.
    //     name: 'Test_Run_Demo_Shared_Virtual_Users'
    //   } 
  },
};

export default function () {
  http.get('https://test.k6.io/contacts.php');
  // Injecting sleep
  // Sleep time is 500ms. Total iteration time is sleep + time to finish request.
  sleep(0.5);
}
