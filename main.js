// chapter 6-9:

// question 1:

// let num = prompt("Enter a number")
// document.write(`Result <br>`)
// document.write(`The value of a is : ${num} <br>`)

// ++num;
// document.write(`The value of ++a is : ${num} <br>`)
// document.write(`Now the value of a is : ${num} <br>`)

// num++;
// document.write(`The value of a++ is : ${num} <br>`)
// document.write(`Now the value of a is : ${num} <br>`)

// --num;
// document.write(`The value of --a is : ${num} <br>`)
// document.write(`Now The value of a is : ${num} <br>`)

// document.write(`The value of a-- is : ${num} <br>`)
// document.write(`Now the value of a is : ${num} <br>`)


// question 2:

// var a = 2;
// var b = 1;
// var result = (--a - --b) + (++b + b--);

// document.write("--a : ", --a, "<br>");
// document.write("(--a - --b) :", --a - --b, "<br>");
// document.write("(--a - --b) + (++b) :", (--a - --b) + (++b), "<br>");
// document.write("(--a - --b) + (++b + b--) :", (--a - --b) + (++b + b--), "<br>");

// question 3:

// let name = prompt("Enter Your name :")
// document.write(`Salam ${name}`)

// question 5:

// let number = +prompt("Enter a number for the multiplication table:");

// document.write(`<h3>Multiplication Table of ${number}</h3>`);

// for (let i = 1; i <= 10; i++) {
//     document.write(`${number} * ${i} = ${number * i}<br>`)
// }

// question 6:

// let subject = prompt("Enter name if Subject one:");
// let subject_two = prompt("Enter name if Subject two:");
// let subject_three = prompt("Enter name if Subject three:");
// let totalmarks = 100;
// let subjectmarks = prompt("Enter Subject one marks:");
// let subjecttwo_marks = prompt("Enter Subject two marks:");
// let subjectthree_marks = prompt("Enter Subject three marks:");

// let resultone = subjectmarks / totalmarks * 100;
// let resulttwo = subjecttwo_marks / totalmarks * 100;
// let resultthree = subjectthree_marks / totalmarks * 100;

// document.write('<table border="1" cellspacing="0">');
// document.write('<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>');
// document.write(`<tr><td>${subject}</td><td>${totalmarks}</td><td>${subjectmarks}</td><td>${resultone}%</td></tr>`);
// document.write(`<tr><td>${subject_two}</td><td>${totalmarks}</td><td>${subjecttwo_marks}</td><td>${resulttwo}%</td></tr>`);
// document.write(`<tr><td>${subject_three}</td><td>${totalmarks}</td><td>${subjectthree_marks}</td><td>${resultthree}%</td></tr>`);
// document.write('</table>');

// chapter 9-11:
// question 1:

// let city = prompt("Enter Your City Name:")
// if (city=="karachi") {
//     document.write(`Welcome to the city of lights`);
// }

// question 2:

// let gender = prompt("Enter Your Gender:")
// if (gender == "male") {
//     document.write("Good Morning Sir");
// } else if (gender == "female") {
//     document.write("Good Morning Ma'am.");
// } else {
//     document.write("Good Morning");
// }


// question 3:

// let color = prompt("Enter color of road traffic signal :")
// document.write(`<table border="1" cellspacing=0>`)
// document.write('<tr><th>Signal Color</th><th>Message</th></tr>');
// document.write(`<tr><td>Red</td><td>Must Stop</td></tr>`);
// document.write(`<tr><td>Yellow</td><td>Ready to move</td></tr>`);
// document.write(`<tr><td>Green</td><td>Move Now</td></tr>`);
// document.write(`<table/>`)

// question 4:

// let litres= +prompt("Enter the remaining fuel in car in litres")
// if (litres<0.25) {
//     document.write(`Please Refill the fuel in your car`)
// }
// else{
//     document.write(`Please be aware of your fuel average `)
// }

// question 5:

// var a=4;
// if (++a ===5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++===83) {
//     alert("given condition for variable b is true");

// }

// var c = 12;
// if (c++===13) {
//     alert("condition 1 is true");

// }
// if (c ===13) {
//     alert("condition 2 is true");
// }

// if (++c<14) {
//     alert("condition 3 is true");
// }

// if (c===14) {
//     alert("condition 4 is true");
// }

// var materialcost= 2000;
// var laborcost= 2000;
// var toalcost= materialcost+laborcost;
// if (toalcost===laborcost+materialcost) {
//     alert("The cost equals");

// }

// if (true) {
//     alert("True");
// }

// if (false) {
//     alert("False");
// }

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// question 6:

// let marksobtained = prompt("Enter the marks obtained in three subjects ?");
// let totalmarks = 300;
// let percentage = marksobtained/totalmarks*100;
// document.write(`Total Marks: ${totalmarks}<br>`)
// document.write(`Marks Obtained: ${marksobtained}<br>`)
// document.write(`percentage: ${percentage}<br>`)

// if (percentage >=80) {
//     document.write(`Grade: A-one<br>`)
//     document.write(`Remarks: Excellent br>`)
// }
// else if(percentage>=70){
//     document.write(`Grade: A<br>`)
//     document.write(`Remarks: Good<br>`)

// }

// else if(percentage>=60){
//     document.write(`Grade: B<br>`)
//     document.write(`Remarks: You need to Improve<br>`)

// }
// else if(percentage<60){
//     document.write(`Grade: fail<br>`)
//     document.write(`Remarks: Sorry<br>`)

// }


// question 7:

// let secnum = 6;
// let num = +prompt("Guess the secret number from 1-10")
// if (num ===secnum) {
//     alert("Bingo! Correct answer.")
// }
// else if(num+1 == secnum){
//     alert("Close enough to the3 correct asnwer")
// }
// else{
//     alert("TRY AGAIN!")
// }

// question 8:

// let num= +prompt("Enter any number:")
// if (num%3==0) {
//     document.write(`Number is divisible by 3 `)
// }
// else{
//     document.write(`The number isn't divisible by 3`)
// }

// question 9:

// let num = +prompt("Enter a number :")
// if (num%2===0) {
//     document.write(`This is an even number`)
// }
// else {
//     document.write(`This is an odd number`)
// }

// question 10:

// let temperature= prompt("Enter your temperature in Celcius:")
// if (temperature>40) {
//     document.write(`It is too hot outside`)
// }
// else if(temperature>30) {
//     document.write(`The weather today is normal`)
// }

// else if(temperature>20) {
//     document.write(`The weather today is Cool`)
// }

// else if(temperature>10) {
//     document.write(`OMG! Today's weather today is so cool`)
// }

// question 11:

// let num = +prompt("Enter number one")
// let numone = +prompt("Enter number two")
// let operation = prompt("Enter the operator +,-,*,/,%")
// if (operation === "+") {
//     document.write(`Answer for the sum is : ${num + numone}`)
// }
// else if (operation === "-") {
//     document.write(`Answer for the subtraction is : ${num - numone}`)
// }

// else if (operation === "*") {
//     document.write(`Answer for the multiplication is : ${num * numone}`)
// }

// else if (operation === "/") {
//     document.write(`Answer for the division is : ${num / numone}`)
// }

// else if (operation === "%") {
//     document.write(`Answer for the modulus is : ${num % numone}`)
// }


// chapter 12-13:

// question 2:

// let integerone = +prompt("Enter a number : ")
// let integertwo = +prompt("Enter number two : ")
// if (integerone > integertwo) {
//     document.write(`Number one is greater than number 2 `)
// }

// else if (integertwo > integerone) {
//     document.write(`Number two is greater than one`)
// }

// else if (integerone===integertwo){
//     document.write(`Both the numbers are equal`)
// }

// question 3;

// let num = +prompt("Enter a number :")
// if (num>0) {
//     document.write(`The Number is Positive`)
// }
// else if(num<0){
//     document.write(`The number is negative`)
// }
// else if(num===0){
//     document.write(`The number is zero`)
// }

// question 4:

// let str = prompt("Enter a character")
// if (str == "a") {
//     document.write(`True`)
// }
// else if (str == "e") {
//     document.write(`True`)
// }

// else if (str == "i") {
//     document.write(`True`)
// }

// else if (str == "o") {
//     document.write(`True`)
// }

// else if (str == "u") {
//     document.write(`True`)
// }
// else {
//     document.write(`False`)
// }

// question 5:

// let password = "Ahmed@777";
// let guess = prompt("Enter your Password : ")
// if (guess == "") {
//     alert("Please Enter your password")
// }
// else if (guess == password) {
//     document.write(`Correct! The password you entered matches the original password.`)
// }

// else {
//     document.write("Incorrect Password")
// }

// question 6:

// var greeting;
// var hour = 13;
// if (hour<18) {
//     document.write(`Greeting = Good day`)
// }
// else{
//     document.write(`Greeting = Good Evening`)
// }

// question 7:

// let time = +prompt("enter time in 24 hours")
// if (time>=0 && time<1200 ) {
//     document.write("Good Morning")
// }

// else if(time>=1200 && time<1700){
//     document.write("Good afternoon")
// }

// else if(time>=1700 && time<2100){
//     document.write("Good Evening")
// }

// else if(time>=2100 && time <=2359){
//     document.write("Good Night")
// }