// fetch("http://puzzle.mead.io/puzzle").then(res=>{
//      res.json().then(data=>{
//         console.log(data);
//      })
// });


const city_name = document.querySelector('#cityname');

document.querySelector('.weatherForm').addEventListener('submit',(e)=>{
    e.preventDefault()
    document.querySelector('.city_table').textContent="LOADING...";
    document.querySelector('.temp_table').innerHTML="";
    document.querySelector('.status_table').innerHTML="";
    fetch(`/weather?city=${city_name.value}`).then(res=>{
        res.json().then(data=>{
            if(data.error){
                alert(data.error);
                city_name.value="";
                document.querySelector('.city_table').textContent="";
            }else{
                document.querySelector('.city_table').textContent=data.city;
                document.querySelector('.temp_table').innerHTML=data.temperture+" C";
                document.querySelector('.status_table').innerHTML=data.status;
                console.log(data)
            }
        })
    });
});