// function getSum(a,b){
// return a+b;
// }

// let sum=getSum(10,20);
// console.log("TCL: sum", sum)

// //anonymous functions

// let getProduct=function(a,b){
//    return a*b;
// }
// let getProductCopy=(a,b)=>{
//     return a*b;
//  }
// console.log("TCL: getProduct -> getProduct", getProduct)
   



// let product=getProduct(10,20);
// console.log("TCL: product", product)


// //scopes

// let message='Good day';

// function printMessage(){
//     let messageCopy='Good Eve';
//     // console.log("TCL: printMessage -> messageCopy", messageCopy)
//     // console.log(message);
//     function printText(){
//        // console.log("TCL: printMessage -> messageCopy", messageCopy)
//     }
//     printText();
// }
// //console.log("TCL: printMessage -> messageCopy", messageCopy)
// printMessage();

// //closures

// function greetPeople(firstName){

//     let greetingMsg='Good day';
//     function partOfDay(lastName){
//         return greetingMsg+' '+firstName+' '+lastName;
//     }

//     return partOfDay;
// }
   


// let x=greetPeople('John');
// console.log("TCL: x", x);

// let result=x();
// console.log("TCL: result", result)
// let resultOne=x('Tom');
// console.log("TCL: resultOne", resultOne)

// let z={
//     name:'Albert',
//     age:30,
//     address:[
//         {
//             street:123,
//             city:'chicago'
//         },
//         {
//             street:456,
//             city:'New York'
//         }
//     ],
//     phone:{home:12345,cell:356456},
//     Citizen:false
// };

// console.log(z.name)
// console.log(z['name']);
// console.log(z.address[1]['city']);
// console.log(z['phone']['cell']);

// console.log(Object.keys(z));
// for(var z1 in z){
//     console.log("TCL: z1", z1)
// }

// console.log(Object.values(z));
// console.log(Object.entries(z));

// //array of objects
// for(var z2 of z['address'])
// {
//     console.log("TCL: z2", z2)
// }

// z['address'].forEach(element => {
// console.log("TCL: element", element)
// });

// for(var i=0;i<z['address'];i++){
//     console.log(z['address'][i])
// }

// //typeOf,InstanceOf
// let dateCopy=new Date();
// console.log(typeof dateCopy);
// console.log(Object.prototype.toString.call(dateCopy));
// let arr=[1,2,3,4];
// console.log("TCL: arr", typeof arr);
// console.log(Object.prototype.toString.call(arr));

// console.log(Object.prototype.toString.call(z['address']));

// //DOM--document object model
// var paragraph=document.getElementsByClassName('message')[0].innerHTML;
// console.log("TCL: paragraph", paragraph)
// var para=document.querySelector('.message').innerHTML;
// console.log("TCL: para", para)

// var greet=document.getElementById('greet').innerHTML;
// console.log("TCL: greet", greet)
// var greetCopy=document.querySelector('#greet').innerHTML;
// console.log("TCL: greetCopy", greetCopy)



// var element=document.getElementsByTagName('h1')[0].innerHTML;
// console.log("TCL: element", element);

// var elementCopy=document.querySelector('h1').innerHTML;
// console.log("TCL: elementCopy", elementCopy)

//events
//callback functions---a function which is passed as a paramter to another function is called callback fn
//let button=document.getElementsByClassName('button')[0];
///add an event listener to the button
// button.addEventListener('click',()=>{
//     console.log('you clicked the button')
// })

// button.addEventListener('click',printMessage);

// function printMessage(){
// console.log('button clicked');
// }

// var header=document.querySelector('h1');

// header.addEventListener('mouseover',()=>{
//     console.log('you moved the mouse over header element');
// })

//conbsole.log(document.getElementsByTagName('li').length);
// for(let i=0;i<document.getElementsByTagName('li').length;i++)
// {
// document.getElementsByTagName('li')[i].addEventListener('click',()=>{
//     console.log(i);
//    console.log (document.getElementsByTagName('li')[i].innerHTML)
// })
// }

// document.querySelector('.five').addEventListener('click',($event)=>{
//     $event.stopPropagation();
//     })

// //event delegation
// document.querySelector('ul').addEventListener('click',function($event){
//     //console.log('you clicked the li element');
//     console.log($event.target.innerHTML);
// })


//event bubbling---child--parent
//event capturing---parent--child


// function gotoPage($event){
//     $event.preventDefault();
//     console.log('you clicked the anchor')
// }

//jquery


// document.querySelector('h1').addEventListener('click',function($event){
//     //console.log('you clicked the li element');
//     console.log('you cliked h1-js');
// })

// $('h1').on('click',()=>{
//     console.log('you cliked h1--jquery')
// })

$('#exampleInputPassword1').on('keyup',($event)=>{
   console.log($event.target.value); 
})


$.validator.addMethod("pwdValiatorCheck",function(value){
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{4,}$/.test(value);
})

let myForm=$('#myForm').validate();
$('#myForm').validate({
    rules:{
        email:{
            required:true
        },
        password:{
            required:true,
            pwdValiatorCheck:true
        }
    }
    ,
    messages:{
        email:{
            required:'Email mandatory'
        },
        password:{
            required:'Password mandatory',
            pwdValiatorCheck:'Please enter minimum one uuper case,lowecase,one number'
        }
    },
    submitHandler:function(){
       event.preventDefault();

       let email=$('#exampleInputEmail1').val();
       let password=$('#exampleInputPassword1').val();

       let loginDetails={
           'emailValue':email,
           'passwordValue':password
       }

       $.ajax({
           type:'post',
           url:'/login',
           data:loginDetails,
           contentType:'application/json',
           success:function(res){
           console.log("TCL: res", res)

           },
           error: function(err){
           console.log("TCL: err", err)

           }
       })

      console.log(JSON.parse(loginDetails));
       console.log("TCL: loginDetails", loginDetails)
       myForm.resetForm();
    }

})


//AJAX—Asynchronous Javascript and XML (technology)


//XML,JSON(javascript object notation)
//client---server (data exchange format)


//javascript, jquery

//Ajax autocomplete
let people=[];
$('button').on('click',()=>{
    getDogBreeds();
})

function  getDogBreeds(){
    $.ajax({
        type:'get',
        url:'https://dog.ceo/api/breeds/list/all',
        success:function(res){
        console.log("TCL: res", res)
    
         
        },
        error: function(err){
        console.log("TCL: err", err)
    
        }
    })
    
}



    $(function(){
        $.ajax({
            type:'get',
            url:'http://api.open-notify.org/astros.json',
            success:function(res){
            console.log("TCL: res", res['people'])
               
               res['people'].forEach(p=>{
                people.push(p.name);
               })
             
            },
            error: function(err){
            console.log("TCL: err", err)
    
            }
        })
    });
   


$( "#tags" ).autocomplete({
    source: people
  });



  const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (let btnNum = 0; btnNum < prizes.length; btnNum++) {
  
      // For each of our buttons, when the user clicks it...
      document.getElementById(`btn-${btnNum}`).onclick = () => {
  
        // Tell her what she's won!
        alert(prizes[btnNum]);
      };
    }

    console.log('git added');