// alert("good morning");
// // variables 

// var name="ram";
// console.log(name)

// // let age="20"
// // console.log(age);

// let message;
// console.log(message);
// message="hey ram charan sai how are you";
// console.log(message);

// // convertion of types
// let num=10;
// console.log(num);
// num=String(num)
// console.log(num);

// // prompt
// let age =prompt("what is your age",18);
// console.log("you are age is",age);

// // confirm
// let underdecision = confirm("do you want to delete");
// console.log(underdecision)

// console.log(+"5")

// // if statement

// let voteEligibility = false;
// if (age>=19){
//     voteEligibility=true
// }
// if (age<=19){
//     voteEligibility=false
// }
// console.log("voteeligibility",voteEligibility);

// // for loop
// for (let i=1;i<=10;i++){
//     console.log(i)
// }

// // while loop
// let i=1
// while (i<=10){
//     console.log(i);
//     i++;
// }

// functions
// let name1="ram";
// function greet(greetingmsg){
//     console.log(greetingmsg,name1);
// };
// greet("hello");

// function ask(question,yes,no){
//     if(confirm(question))yes();
//     else no();
// }
// function agree(){
//     alert("im agree")
// }
// function disagree(){
//     alert("not agree");
// }
// ask("do you agree?",agree,disagree);

// arow function
// let sum=(a,b)=>a+b;
// console.log(sum(30,10));

// function add(a,b,c=1,d=20){
//     const sum=a+b+c+d;
//     return sum;
// }
// const sum=add(10,20);
// console.log(sum);

// let sum=(a,b)=>a*b;
// console.log(sum(10,10))

// object

// const person = {
//     name : "ram",
//     age : 20

// };
// console.log(person)

// person.name="charan";
// createing obj in using function

// function createuser (name,age){
//     return{
//         name,age
//     };
    
// };
// const user=createuser("rakesh",21);
// console.log(user);

// OVER WRITTING CLASS

// class animal{
//     constructor(name){
//         this.name=name;
//         this.speed=0
//     }
//     run(speed){
//         this.speed=speed;
//         console.log("the animal is running")

//     }
//         class dog extends animal{
//             constructor(name,bread){
//                 super(name);
//                 this.name=name;
//                 this.bread=bread;
//             }
//         }
// }
// const tommy=new dog("tommy",'lab');
// console.log(tommy);

// private , protect and public

// class user{
//     _gender="undefined"
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     setgender(gender){
//         this.gender=gender;
//     }
//     getgender(){
//         return this.gender;
//     }
// }
// const user1=new user("ram",20);
// console.log(user1)

// user1.setgender("m")
// console.log(user1.gender);
// user1.setgender("f")   it not change

// private and protect

// class user{
//     #gender="m";
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
//     setgender(gender){
//         this.#gender=gender;
        
//     }
//     getgender(){
//         return this.#gender;
//     }
// };

// const user1=new user("ram",20);
// console.log(user1);
// user1.gender="f";
// console.log(user1.gender);

// user.#gender="f"
// console.log(user.gender);

