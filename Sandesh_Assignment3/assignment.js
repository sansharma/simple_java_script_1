function checknum()
{
	var num=prompt("Enter any number");

	if(num>100)
		{
			alert("The number is greater than 100");
		}
	else
		{
			alert("The number is less than 100");
		}

}
function changeTemperature()
{
	var value=prompt("Enter the temperature");
	var farenheit=(x*9/5)+32;
	var celcius=(x-32)*5/9 ;
	alert("The temperature in farenheit is:"+ farheinheit);
	
	alert("The temperature in celcius is :" + celcius);
	

}
function calculate()
{
	var num1 =prompt("enter first number ");
	var num2 =prompt("enter second number ");
	var mul=a*b;
	var div=a/b;
	alert("The Product of" +a + "and" +b + "is"+ mul );
	alert("The division of" +a  + "and" +b + "is"+ div );
}
function calculatePercentage()
{
	var sub1=prompt("Please enter marks in Physics");
	var sub2=prompt("Please enter marks in Chemistry");
	var sub3=prompt("Please enter marks in Biology");
	var result =(+sub1+ +sub2+ +sub3)/3;
	if (result>=80&&result<=100) {
		alert("congratulation you have passed in  distinction with "+result+"%");

	}
	else  if (result>=60&&result<=79) {
		alert("congratulation you have passed in  First divison with "+result+"%");

	}
	else if (result>=40&&result<=59) {
		alert("congratulation you have passed in  second divison with "+result+"%");

	}
	else
	{
		alert("Sorry you have failed with" +result+"%");
	}
}
function checkString()
{
	var val_boy=prompt("enter string","boy");
	var val_girl=prompt("enter string","girl");
	
	var type=prompt("do you want to continue? press y to continue n to exit");
	while(type!='n')
	{
	counter1=0;
	counter2=0;
	for (var i = 0; i < val_boy.length; i++) {

		if (val_boy[i]=='b')
		{
			counter1++;
		}
	}
	for (var i = 0; i < val_girl.length; i++) {
		if (val_girl[i]=='g')
		{
			counter2++;
		}
	}
	alert("the number of char b in"+val_boy+" is:" + counter1);
	alert("the number of char g in"+val_girl+" is:" + counter2);
	var type=prompt("do you want to continue? press y to continue n to exit");
}

}
