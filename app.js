/*............................Assignemnt 1 ................*/
/*Question 1 */
alert("Hello ! wellcome");

/*Question 2 */
alert("Error! Please enter a valid password");

/*Question 3 */
alert("Welcome to JS land happy coding");

/*Question 4 */
alert("Welcome to JS land ");
alert("prevent this page from creating addional dialogs")

/*Question 5 */
console.log("Hellow... I can run JS through my web browse's console");

/*Question 5 */
/*Answer is in html file */

/*............................Assignemnt 2 ................*/
/*Question 1 */
var usermane;

/*Question 2 */
var myName = "Muhammad Adeel";
alert(myName);

/*Question 3 */
var massage;
 massage = "Hellow Worls";
    alert(massage);


/*Question 4 */
var name = "Jhone Doe";
var age = "15 years old";
var cours = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(cours);



/*Question 5 */
/*var food= "PIZZA";
if (var i = 0; i<food.length; i++){
    document.write(food[i]);

}*/


/*Question 6 */
var email = "m.adeel631@gmail.com";
alert("My email address is "+email);

/*Question 7 */
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book "+book);

/*Question 8 */
document.write ("Yah! I can write HTML content through javaScript"+"<br>"+"<br>");

/*Question 9 */
alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");




/*............................Assignemnt 3 ................*/
/*Question 1 */
var age= 15
alert("I am "+age+" year old.")

/*Question 2 */



/*Question 3 */
var birthYear= 22
alert("My birth year is  "+birthYear)

/*Question 4 */
var vNmae = prompt("enter your name !")
var title = prompt("select the product !")
var quantiti= prompt(" select the Quantity !")
document.write(vNmae+" Orderd "+ quantiti+" "+title+" on xyz cloting store"+"<br>"+"<br>"+"<br>" )




/*............................Assignemnt 4 ................*/
/*Question 1 */
var one,two,there;

/*Question 2 */
var variableOne,variableTwo,variableThree,variableFour,variableFive;
/*var 1stVariable,&variable, #variable, .variable, %Variable, */


/*Question 3 */
document.write("RULES FOR NAMING JS VARIABLES"+"<br>"+"<br>")
document.write("Variable names can only contain numbers , $ and _ . For example $my_1stVariable"+"<br>")
document.write("Variables must begin with a Letter, $ or __. For example $name, _name or name"+"<br>")
document.write("Variable names are case sensitive"+"<br>")
document.write("Variable names should not be JS Keywords"+"<br>"+"<br>"+"<br>")





/*............................Assignemnt 5 ................*/
/*Question 1 */
var num1 = prompt("Enter your first number to sum !");
var num2 = prompt("Enter your second number to sum !");
var sum = num1+num2;
document.write(" Sum of "+num1+" and "+num2+" is "+sum +"<br>"+"<br>")

/*Question 2 */
var num1 = prompt("Enter your first number to sub !");
var num2 = prompt("Enter your second number to sub !");
var sub = num1-num2;
document.write(" Subtraction of "+num1+" and "+num2+" is "+sub+"<br>"+"<br>" )

var num1 = prompt("Enter your first number to multiply !");
var num2 = prompt("Enter your second number to multiply !");
var mult = num1*num2;
document.write(" Multiplication of "+num1+" and "+num2+" is "+mult+"<br>"+"<br>" )

var num1 = prompt("Enter your first number to divide ! ");
var num2 = prompt("Enter your second number to divide  !");
var di = num1/num2;
document.write(" Division of "+num1+" and "+num2+" is "+di+"<br>"+"<br>"+"<br>" )



/*Question 3 */
var qustion3;
document.write("Value after variable declaration is "+ qustion3+"<br>");
qustion3= prompt("Enter the value to initialized ther variable !" )
document.write("Initial value : "+qustion3+"<br>");
var inc= qustion3++;
document.write("Value after increment is : "+inc+"<br>");
var ad = inc + 7;
document.write("Value after addition of 7 is : "+ad+"<br>");
var dec= --ad;
document.write("Value after decrement is : "+dec+"<br>");
var divi= dec/3;
document.write("Value after dividing by 3 is : "+divi+"<br>");
var rem=divi%3;
document.write("Value of remainder is : "+rem+"<br>"+"<br>"+"<br>");


/*Question 4  ticket buyer*/
var ticket = 600;
var tickt2= prompt('How many tickets you want to buy !');
var amount = 600*tickt2;
document.write(" The coast to buy "+tickt2+" tickets to movie is "+amount+"PKR"+"<br>"+"<br>");

/*Question 5  shopping cart*/
var table= prompt(" Enter a number to print the table !")
document.write("...................TABLE................."+"<br>"+"<br>")
for(var i =1; i<=10; i++){
document.write(table+ "* "+ i +" = "+ table*i +"<br>"+"<br>");
}

/*Question 6 Temperatur converter */
document.write(".....................TEMPERATURE CONVERTER................."+"<br>"+"<br>")
var celceus = prompt("enter Celsius Temprature to convert in Fahrenheit ! ")
var f = (celceus*9/5)+32
document.write("You entred  "+celceus+" Celsius is "+f+" Fahrenheit"+"<br>");

var ferh = prompt("enter Fahrenheit Temprature to convert in Celsius ! ");
var c = (ferh-32)*9/5
document.write("You entred  "+ferh+" Fahrenheit is "+c+" Celsius"+"<br>"+"<br>");


/*Question 7 */
var p1=650;
var p2=100;
var q1=prompt("Enter the Quantity of the item 1 !");
var q2 =prompt("Enter the Quantity of the item 2 !")
document.write("...................SHOPPING CART..............." +"<br>"+"<br>")
document.write("Price of item 1 is "+p1+"<br>");
document.write("Quantity of item 1 is "+q1+"<br>");
document.write("Price of item 2 is "+p2+"<br>");
document.write("Quantity of item 1 is "+q2+"<br>");
document.write("Shipping charges is 100"+"<br>"+"<br>");
var c1 = p1*q1;
var c2 = p2*q2;
var tcoast = c1 + c2 + 100;
document.write("Total cost of your order is "+tcoast+"<br>"+"<br>");


/*Question 8  mark sheet */
document.write("..................MARK SHEET................."+"<br>"+"<br>")
var tot = prompt("Enter the total marks !")
var obt = prompt("Enter your obtain marks !")
var per = (obt/tot)*100 
document.write("Total marks : "+tot+"<br>")
document.write("Marks obtain : "+obt+"<br>")
document.write("Percentage : "+per+"<br>"+"<br>")


/*Question 9 currency converter */
document.write(".....................CURRENCY CONVERTER................."+"<br>"+"<br>")
var dollr= 10;
var riyal= 25;
var conver= (10*104.80)+(25*28)
document.write("Total currency  in PKR: "+conver+"<br>"+"<br>")



/*Question 10 Arithmetic */
document.write(".....................ARITHMETIC................."+"<br>"+"<br>")

var someNum= 4;
var arth= ((someNum+5)*10)/2
document.write("Answer is : "+arth+"<br>"+"<br>")


/*Question 11 Arithmetic */
document.write(".....................AGE CALCULATOR................."+"<br>"+"<br>")
var y1= prompt("Enter the current year !")
var y2 = prompt("Enter your birth year !")
var yourAge= y1-y2
document.write("Current year : "+y1+"<br>")
document.write("Your birth year : "+y2+"<br>")
document.write("Your AGE : "+yourAge+"<br>"+"<br>")


/*Question 12 circle */
document.write(".....................THE GEOMETRIZER................."+"<br>"+"<br>")

var radius= prompt("Enter the radius of the circle !");
var circum= 2*3.142*radius
document.write("Radis of the circle is : "+radius+"<br>")
document.write("Circumference of the circle is : "+circum+"<br>")
var area= (3.142)*(radius*2);
document.write("Area of the circle is : "+area+"<br>"+"<br>")



/*Question 13 life supply calculator */
document.write(".....................THE LIFE SUPPLY CALCULATOR................."+"<br>"+"<br>")
var s1= prompt("Enter your favorite snack !")
var s2= prompt("Enter your current AGE !")
var s3= prompt("Enter your approximate maximum AGE !")
var s4= prompt("Enter estimated amount per day (as a number) !")

var supply= 
document.write("Favorite snack : "+s1+"<br>")
document.write("Your current AGE : "+s2+"<br>")
document.write("Your your approximate maximum AGE : "+s3+"<br>")
document.write("Amont of snacks per day : "+s4+"<br>")
document.write("You will need "+"  "+s1+" to last you untill the ripe old age of "+s3+"<br>")



/*............................Assignemnt 6 ................*/
/*Question 1 increment and decrement */
document.write(".....................INCREMENTS AND DECREMENTS................."+"<br>"+"<br>")

var incr= prompt("Enter a numner for the increment and decrement !")
document.write("RESULTS : "+"<br>")
document.write("The value of a is: "+incr+"<br>"+"<br>")
++incr
document.write("The value of ++a is: "+incr+"<br>")
document.write("The value of a is: "+incr+"<br>"+"<br>")
incr++
document.write("The value of a++ is: "+incr+"<br>")
document.write("The value of a is: "+incr+"<br>"+"<br>")
--incr
document.write("The value of --a is: "+incr+"<br>")
document.write("The value of a is: "+incr+"<br>"+"<br>")
incr--
document.write("The value of a-- is: "+incr+"<br>")
document.write("The value of a is: "+incr+"<br>"+"<br>"+"<br>")


/*Question 2 */
document.write("..........................................................................."+"<br>"+"<br>")

var a =2
var b =1
var result =--a - --b + ++b + b--
document.write("A is 2 "+"<br>")
document.write("B is 1 "+"<br>")
document.write("Result is : "+result+"<br>"+"<br>")


var a =2
var c= --a
document.write("Output of --a is : "+c+"<br>")
var c= --a - --b
document.write("Output of --a - --b is : "+c+"<br>")
var c= --a - --b + ++b
document.write("Output of ---a - --b + ++b is : "+c+"<br>")
var c= --a - --b + ++b + b--
document.write("Output of --a - --b + ++b + b-- is : "+c+"<br>"+"<br>"+"<br>")


/*Question 3 */
document.write(".....................GREETING......................"+"<br>"+"<br>")

var greet =prompt("Enter your name !")
document.write("Hello "+greet+" How are you?")



/*Question 5 */
document.write(".....................TABLE OF 5......................"+"<br>"+"<br>")

var table= prompt(" Enter a number to print the table !")
if(table===5){
    
for(var i =1; i<=10; i++){
    document.write(5+ "* "+ i +" = "+ 5*i +"<br>"+"<br>");
    }
}
else{
    for(var i =1; i<=10; i++){
    document.write(table+ "* "+ i +" = "+ table*i +"<br>"+"<br>");
    }
}



/*Question 5 */
document.write(".................MARK SHEET................."+"<br>"+"<br>")
 var sub1 =prompt(" Enter first subject !")
 var sub2 =prompt(" Enter second subject !")
 var sub3 =prompt(" Enter third subject !")
 var tt = 100
 var mak1 =prompt(" Enter marks for first subject ")
 var mak2 =prompt(" Enter marks for second subject ")
 var mak3 =prompt(" Enter marks for thire subject ")
 
document.write(tt+" "+sub1+" "+mak1/100+"<br>")
document.write(tt+" "+sub2+" "+mak2/100+"<br>")
document.write(tt+" "+sub3+" "+mak3/100+"<br>"  )


























