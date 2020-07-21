const request = require('request');
const forecast = (APIkey,city_name,callback) => {
    const url = `http://api.weatherbit.io/v2.0/current?city=${city_name}&key=${APIkey}`;
        request({ url:url,json:true },(error,response)=>{
        if(error){
            callback("an error is occoured!",undefined)
        }else if(!response.body){
            callback("please check the entered!",undefined)
        }else if(response.body.data===undefined){
            callback("please check the entered!",undefined)
        }else{
            callback(error=undefined,data=response.body.data[0])
        }
    });
}

// const http = require('http');
// const url = `http://api.weatherbit.io/v2.0/current?city=esfahan&key=17785cb56b0843b5b6c187d97a87d969`;

// const request = http.request(url,(response)=>{
//     let data = '';

//     response.on('data',(d)=>{
//         data = data + d.toString();
//     });
//     response.on('end',()=>{
//         const body = JSON.parse(data);
//         console.log(body);
//     })
// });

// request.on('error',(error)=>{
//     console.log(error);
// });

// request.end();

module.exports = forecast;