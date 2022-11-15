
function addData(){
  let myName=document.getElementById('name').value;
  let myEmail=document.getElementById('email').value;
  let myCity=document.getElementById('city').value;
   var data = {
    'name':myName,
    'email':myEmail,
    'city':myCity
   }
   localStorage.setItem("data",JSON.stringify(data));
   let myData = JSON.parse(localStorage.getItem('data'));
   console.log(myData);
   document.getElementById('name').value="";
   document.getElementById('email').value="";
   document.getElementById('city').value="";
}
