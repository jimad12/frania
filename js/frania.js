//Write a two dimenssional Array for basic Array data

var personnel = new Array();

//Create the first column
personnel[0] = new Array(); 

personnel[0][0] = "Nom : Bernard A.";
personnel[0][1] = "Age : 60";
personnel[0][2] = "Addr : 5eme";

//Second Column
personnel[1] = new Array();

personnel[1][0] = "Nom : Sarkozi";
personnel[1][1] = "Age : 54";
personnel[1][2] = "Addr : 16eme Arrond";
//3rd Column
personnel[2] = new Array();

personnel[2][0] = "Non : Depardieux";
personnel[2][1] = "Age: 66";
personnel[2][2] = "Addr : 2eme Arrond";

//now loop through the 2d-array to output results
//Since array are object use a for in interation loop

var client;

for( client in personnel[client]) {
	document.writeln(personnel[client] + "<br>");
}
//Print the Array's data
document.getElementById("jsData").innerHTML =
"<h4>Clientele : </h4>" + 

"<hr>" +
personnel[1][0] + "<br>" +
personnel[1][1] + "<br>" +
personnel[1][2] + "<br>" + 

"<hr>" +

personnel[0][0] + "<br>" +
personnel[0][1] + "<br>" +
personnel[0][2] + "<br>" + 

"<hr>" +

personnel[2][0] + "<br>" +
personnel[2][1] + "<br>" +
personnel[2][2] + "<br>" + 
"<hr>";



/*

//Object literal new way creating object
var parisBizInfo = {
	id: "1",
	name: "Channel",
	industry: "Garment"
}
//print object
document.getElementById("bizData").innerHTML = 
"<p>  ---Object Literal Data--- </p> " +
"id: " +
parisBizInfo.id + 
"<br>" + 
"Name: " +
parisBizInfo.name +
"<br> " + 
"Industries: " +
parisBizInfo.industry 
+ "<hr>";
*/


/*----------------------------------------*/
/*
//Object creation  with constructor alone
//constructor with no specific obj created
function Person(name, age, job)
{
	//Object Properties
	this.name = name;
	this.age = age;
	this.job = job;
	
	//Object's method to display properties
this.sayName = function()
{
	document.getElementById("bizData").innerHTML =
	this.name  + this.age + this.job;
}
}

//Now Create an instannt of the new Object.
var americanEmp = new Person("James", 27, "Hacker");
var frenchEmp = new Person("francois", 54, "President");
var ducthEmp = new Person("Frekenhaar van Holland", 75, "Landlord");

//Print out the datamericanEmp.name + 
document.getElementById("bizData").innerHTML = 
"<h5>Employee By Countries : </h5>" 
+ "<p>America :</p>" +
"Name : "  + americanEmp.name + 
"<br>" + 
"Age : "  + americanEmp.age +
"<br>" + 
"Job : " + americanEmp.job +
"<hr>" + 

"<p>France :</p>" +
"Name : "  + frenchEmp.name + 
"<br>" + 
"Age : "  + frenchEmp.age +
"<br>" + 
"Job : " + frenchEmp.job +

"<hr>" +
 "<p>Netherlands :</p>" +
"Name : "  + ducthEmp.name + 
"<br>" + 
"Age : "  + ducthEmp.age +
"<br>" + 
"Job : " + ducthEmp.job + "<hr>" ;
*/

/*
Object with constructor and prototype pattern
the prototype will literally create an object when 
the constructor is called.
*/

/*
//test, use of prototype pattern alone

function ParisBizSector()
{}

ParisBizSector.prototype.id = 1;
ParisBizSector.prototype.nom = "Coco Channel";
ParisBizSector.prototype.industry = "Garment";

ParisBizSector.prototype.createSector = function(){
	document.getElementById("bizData").innerHTML =
	this.id + this.nom + this.industry;
}

//create a new instance of ParisBizSector
var chocolatier = new ParisBizSector();
chocolatier.createSector();

//print data
document.getElementById("bizData").innerHTML = 
chocolatier.id + ": " +
chocolatier.nom  + ": " +
chocolatier.industry;
*/

//Combination Object with constructor and prototype pattern
function ParisBizSector(id, nom, industry)
{
	//Object Properties are defined on the constructor pattern
	this.id = id;
	this.nom = nom;
	this.industry = industry;
	this.discour = ["<em> Le savoir faire Francais..</em>"]
}	

//Object methods to be defined on the prototype
ParisBizSector.prototype = {
	constructor : ParisBizSector,
	createSector : function()
	{
		this.id + this.nom + this.industry;
		
	}
}
//now all instance properties are only defined on cosntructor
var chocolatier = new ParisBizSector("Ailm-1", "Chez Buche","Alimentaire");
var parisFashion = new ParisBizSector("Fsh-1", "Coco Chanel","Garment");
var voiture = new ParisBizSector("vtr-1", "Citroen","Automobile");

//Display the data
document.getElementById("bizData").innerHTML =
"<h4>Paris Secteur Commerciaux: </h4>" + 
chocolatier.discour +
"<hr>" 
+  "Num#: " +chocolatier.id +
"<br>" +
"Commerce: " + chocolatier.nom +
"<br>" +
"Industry: " + chocolatier.industry +
"<hr>" +  

"Num#: " + parisFashion.id +
"<br>" +
"Commerce: " + parisFashion.nom +
"<br>" +
"Industry: " + parisFashion.industry +
"<hr>" +

"Num#: " + voiture.id +
"<br>" +
"Commerce: " + voiture.nom +
"<br>" +
"Industry: " + voiture.industry +
"<hr>"
;

/*
//Dynamic prototype pattern
function ElectricCar(company, name, model, year, country)
{
	this.company = company;
	this.name = name;
	this.model = model;
	this.year = year;
	this.country = country;
	
	/*An encasulate function to check for
	an existing constructor/method,
	if not found it creates one.
	Changes to prototype  will be immediate on instance
	so this is better.
	 
	
	if(typeof this.createCar != "function" )
	{
		//Prototype
		ElectricCar.prototype.createCar = function()
		{
			alert(this.company + this.name + 
			this.model + this.year + this.country);
		};
	} //end if()
} //end constructor()


//Create instances 
var AmeriCar = new ElectricCar("Tesla Motors", 
"Model S", "P85-D" , 2015, "USA");

var UkCar = new ElectricCar("Nissan", 
"Nissan Leaf", "R2" , 2014, "UK");

var DeCar = new ElectricCar("BMW", 
"BMW", "i3 Series" , 2016, "Germany");

document.getElementById("bizData").innerHTML =
"Company: " + AmeriCar.company +
"<br>" +
"Name: " + AmeriCar.name +
"<br>" +
"Model: " + AmeriCar.model + 
"<br>" +
"Year: " + AmeriCar.year +
"<br>" +
"Country: " + AmeriCar.country +
"<hr>" +

"Company: " + UkCar.company +
"<br>" +
"Name: " + UkCar.name +
"<br>" +
"Model: " + UkCar.model + 
"<br>" +
"Year: " + UkCar.year +
"<br>" +
"Country: " + UkCar.country +
"<hr>" +

"Company: " + DeCar.company +
"<br>" +
"Name: " + DeCar.name +
"<br>" +
"Model: " + DeCar.model + 
"<br>" +
"Year: " + DeCar.year +
"<br>" +
"Country: " + DeCar.country +
"<hr>" 
;
*/
