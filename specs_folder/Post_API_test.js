import http from 'k6/http' ;
import {sleep} from 'k6/http' ;
import { check } from 'k6';

export const options = {
    vus : 1 , //usage of 10 threads 
    duration : '3s' //duration to run the test in 30 seconds 
}

export default function () 
{   
    const url = 'https://dummyjson.com/auth/login'  ;
    //create the JSON Payload 
    const payload = JSON.stringify({
        username : "kmichelle",
        password : '0lelplR'
    })
    
    //pass the header parameter 
    const params = {
        headers: 
        {
        'Content-Type' : 'application/json' ,
         }

    }
    //pass the http post  request 
    const API_response = http.post(url, payload, params) ;
    //to verfiy the response - k6 has the check method to verify the response status code 
    check(API_response , {
        'is Status Code ' : (r) => r.status === 200 ,
        'is res body has username ' : (r) => r.body.includes('kmichelle') ,
    });

}