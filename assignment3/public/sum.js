
const xhr=new XMLHttpRequest();

xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        document.querySelector(".content").innerHTML=`<h1>Result: ${xhr.responseText}</h1>`;
    }
}

function sendAJAX(){
    console.log(document.querySelector("#inputOfNum").value);
    if(document.querySelector("#inputOfNum").value==""){
        xhr.open('get',`http://localhost:3000/getData`);
    }
    else{
        xhr.open('get',`http://localhost:3000/getData?number=${document.querySelector("#inputOfNum").value}`);
    }
    
    xhr.send();
}
