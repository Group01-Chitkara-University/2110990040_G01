let get_btn = document.getElementById("btn1");
get_btn.addEventListener("click",buttonClickHandler);

function buttonClickHandler(){
    console.log("you have clicked the Get button");
    // create the instance of XMLHttpRequest Object

    const xhr = new XMLHttpRequest();
    xhr.open('POST',"http://dummy.restapiexample.com/api/v1/employees",true)
    // Open Request
    xhr.getResponseHeader('Content-type','aplication/json');
    //xhr.open('GET',"ajaxserver.txt",true)
    // when response is ready to deliver from server to client
//xhr.onprogress=function(){
     //   console.log("pn progress....");
   // }
   // xhr.onreadystatechange = function () {
    //    console.log('ready stae is ', xhr.readyState);
//}
    
    xhr.onload = function(){
        if (this.status=== 200){
            let obj= JSON.parse(this.responseText);
            console.log(obj);
            
            let lst = document.getElementById('list');
            str="";
            for(key in obj.data){
                str += `<li>${obj.data[key].employee_name} </li>`;
            }
        }
        else{
            console.error("Some Error occured");
        }
    }
    // send the request to the server
    xhr.send();
}