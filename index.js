//----Variables----
 console.log('Fuck You');
 let name = 'Parth';            //let is used to define a variable 
 console.log(name);

 // ---- Rules for Variable names----
 // Cannot be a reserved keyword
 // Should be meaningful
 // Cannot start with a number (1name)
 // Cannot contain a space or hyphen (-)
 // Are case-sensitive

 let firstName = 'Parth' , lastName = 'Bansal';
 console.log(firstName , lastName);

 let age = 18;
 console.log(age);

/*----------------------------------------------------------------------------------------*/

//----Constants----
 const yearBorn = 2007;
 console.log(yearBorn);

 const gradYear = 2029;
 console.log(gradYear);

/*----------------------------------------------------------------------------------------*/

//------Primitive Data Types------
 let clgName = 'IITJ'; // String Literal
 let yearEstb = 2008; // Number Literal
 let isApproved = false; // Boolean Literal
 let loc = undefined;
 let selectedColor = null;

/*----------------------------------------------------------------------------------------*/

/*------Reference Types------
 Types: OBJECTS ; ARRAYS ; FUNCTIONS  */

    /*---- 1. Objects----*/

     let person = {name: 'Parth', age: 18};       //way to define an object
     
     // Dot Notation
     person.name = 'John';

     // Bracket Notation
     person ['name'] = 'Mary';
        //or
     let selection = 'name';
     person [selection] = 'Mary';

     console.log(person.name);      //to print a specific property of an object
     console.log(person);           //to print complete object

   //----------------------------------------------------------

    /*---- 2. Arrays----*/

     /* ARRAYS are used to store multiple values in a single variable. 
       They are also used to store a list of items. They are ordered and indexed. 
       They can contain duplicate values. 
       They can contain different data types. 
       They are mutable (can be changed).*/

     //ARRAY are OBJECTS in JS.

     let selectedColors = ['red' , 'blue' , 'yellow'];      //way to define an array
     selectedColors[3] = 'black';                           //expanding the array
     console.log(selectedColors);                              
     console.log(selectedColors[0]);              //to print a particular element  
     console.log(selectedColors.length);          //to print length of array        
     console.log(selectedColors[3].length);       //to print length of particular element in array  
        
   //----------------------------------------------------------
