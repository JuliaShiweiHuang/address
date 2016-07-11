
  var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
  var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
  var scentanceArray = []; // create an empty array to store the string.
  var countGlobal = 0;
  document.getElementById("demo1").innerHTML = "My startup " + startupX[Math.floor(Math.random() * startupX.length)] + " is " + startupY[Math.floor(Math.random() * startupY.length)] + "!";

   // function myFunctionCreate() {
   //  var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
   //  var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];


   //  document.getElementById("demo1").innerHTML = "My startup " + startupX[Math.floor(Math.random() * startupX.length)] + " is " + startupY[Math.floor(Math.random() * startupY.length)] + "!";
   //  }

    document.getElementById("create").onclick=myFunctionCreate;
    function myFunctionCreate() {
    var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
    var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];


    document.getElementById("demo1").innerHTML = "My startup " + startupX[Math.floor(Math.random() * startupX.length)] + " is " + startupY[Math.floor(Math.random() * startupY.length)] + "!";
    }

    
    document.getElementById("save").onclick = myFunctionFav;
    function myFunctionFav() {
      // alert("button was clicked");
        // scentanceArray[countGlobal] = "My startup " + startupX[Math.floor(Math.random() * startupX.length)] + " is " + startupY[Math.floor(Math.random() * startupY.length)] + "!";
        // alert(scentanceArray[countGlobal]);
        // scentanceArray[countGlobal] = document.getElementById("demo1").innerHTML;
        scentanceArray.push(document.getElementById("demo1").innerHTML);
        alert(scentanceArray[countGlobal]);
        countGlobal ++ ;
    }

    document.getElementById("print").onclick=myFunctionPrint2;
     function myFunctionPrint2() {
        
        scentanceArray.toString();
        document.getElementById("printArray").innerHTML = scentanceArray;
    }



    function myFunctionPrint() {
      // alert(scentanceArray);
      scentanceArray.join();
      document.getElementById("printArray").innerHTML = scentanceArray;

    }