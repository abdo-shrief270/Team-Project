

var users=[];
var nameInput=document.getElementById("name");
var ageInput=document.getElementById("age");
var phoneInput=document.getElementById("phone");
var addBtn=document.getElementById("addBtn");
var input=document.getElementsByClassName("form-control");
var searchInput=document.getElementById("searchItem");
var x=0;

if(JSON.parse(localStorage.getItem("productList"))!=null){
    users=JSON.parse(localStorage.getItem("productList"));
    displayData();
}

addBtn.onclick =function(){
    if( document.getElementById("addBtn").innerHTML=="Update"){
        updateInput();
    }
    else{
        add()
    }
    displayData()
    clear();
    
}
function add(){
    var user=
    {
        name:nameInput.value,
        age:ageInput.value,
        phone:phoneInput.value
    }
    users.push(user);
}

function displayData(){
    var cartona="";
    for(var i=0;i<users.length;i++){
        cartona+=
        `
        <tr>
        <td>${users[i].name}</td>
        <td>${users[i].age}</td>
        <td>${users[i].phone}</td>
        <td><buttun onclick='delet(${i})' class='btn btn-danger'>delet</buttun></td>
        <td><buttun onclick='updateItem(${i})' class='btn btn-warning'>update</buttun></td>
        </tr>
        `
    } 
    document.getElementById("tableBody").innerHTML=cartona;
    localStorage.setItem("productList",JSON.stringify(users));
}
function clear(){
    for(i=0;i<input.length;i++){
        input[i].value="";
    }

}
function updateItem(index){
    nameInput.value=users[index].name;
    ageInput.value=users[index].age;
    phoneInput.value=users[index].phone;
    document.getElementById("addBtn").innerHTML="Update" ;  
    x=index;
}

function updateInput(){
    var item={
        name:nameInput.value,
        age:ageInput.value,
        phone:phoneInput.value,
    }
    users.splice(x,1,item);
    document.getElementById("addBtn").innerHTML="Add" ;  

}

function delet(index){
    users.splice(index,1);
    displayData()
    localStorage.setItem("productList",JSON.stringify(users));

}




searchInput.onkeyup=function(){
    var searchValue=searchInput.value;
    var cartona="";
    for(var i=0;i<users.length;i++){
        if(users[i].name.toLowerCase().includes(searchValue.toLowerCase())){
            cartona+=
            `
            <tr>
            <td>${users[i].name}</td>
            <td>${users[i].age}</td>
            <td>${users[i].phone}</td>
            <td><buttun onclick='delet(${i})' class='btn btn-danger'>delet</buttun></td></tr>
            `
        } 
        document.getElementById("tableBody").innerHTML=cartona;
        }
        
}
