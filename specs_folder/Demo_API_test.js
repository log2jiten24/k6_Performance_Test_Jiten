// ./test.js
import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  duration: '30s',
  vus: 100,
  //define the threshold limits 
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<500'], // 95% of requests should be below 500ms
    http_req_duration: ['p(99)<500'], // 99% of requests should be below 500ms
  },
  executor :'per-vu-iterations',
  iterations: 100
};

export default function () {
  const res = http.get('https://test.k6.io');
  sleep(1);
}
