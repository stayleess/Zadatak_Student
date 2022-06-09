<!--------------------------------

 ASSIGNMENT - READING STUDENT DATA:


 Create JS Code that will read Student Data from external .txt file;
 Create Studdent Object from this file;
 I created two methods to extract data and to display them through Class Object Student.
 Use Class as template for Student objects;
 Use PROMISE and ASYNC to complete a task

*******************************
 First Method by PROMISE:

 1.0 I used button to dispplay data;
 1.1 I used a loader animation to wait on data display;
 2.0 fetch() method will fetch data and create PROMISE object;
 2.1 if PROMISE status is not 200 throw ERR, otherwise  create ne wPROMISE using text() to get value of text content from PROMISE
 2.2 new PROMISE will match() will separate text content in 4 lines;
 2.3 new PROMISE will now map() through text content and clear empty spaceces adn split and create arrays after "\r\n"
 2.4  new PROMISE will set through map() to new array key:value pairs and pass it to class Object MyClass
 2.5 Promise.all() as an array and run them simultaneously, and process the data once all promises are resolved and displayed on screen.
 2.6 catch() method renders an error

********************************
Second Method by ASYN function:

getFullData()
1.0 Create async function getFullData to create extract, parse, split and create arrays from file to create and return independent objects;
2.0 Use a loader animation to play until data is displayed;

3.0 Async run() will:
3.1  first get a a list of people from API: getFullData()  and format it;
3.2  create instance for class instances for each person; use a map to pass array of parameter properties ([fullName, address, phone and course]) to crete new class Student template with assigned array properties
3.3 finally iterate though each object instance to display each Student Object from Student method getInfo();

4.0 setLoader() starts animation with setTimeou()

5.0 assign ti button event listener and run()

-------------------------------->
