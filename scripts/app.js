function saveTask(){//save the task to the local storage
    console.log("Task Saved");//display task saved in the console
    
    //get the values from the html
    const title=$("#txtTitle").val();
    const description=$("#txtDescription").val();
    const color=$("#selColor").val();
    const startdate=$("#selStartDate").val();
    const status=$("#selStatus").val();
    const budget=$("#numBudget").val();
    console.log(title, description, color,startdate, status, budget)

    //build an object
    let taskToSave = new Task(title, description, color,startdate, status, budget); //build task object
    console.log(taskToSave);
    // Save to the server
    
    $.ajax({
        type: "POST",// save to the server
        url: "http://fsdiapi.azurewebsites.net/api/tasks/",// this is the server url
        //here you need to create the logic to define that I want to sned the taskToSave object
        data: JSON.stringify(taskToSave),// convvert taskToSave into text
        contentType: "application/json",// specify the type of application you are using
        
        success: function(response){
            displayTask(taskToSave); //displays the task
            console.log(response);
        },
        error: function(error){//what happens if the connectionn fails
            console.log(error);//displays the error message
        }
    });

    
    //try to create a function to clear at the moment we hit the save button
    clearForm(taskToSave); //clears the form after saving
    
}
function getTask(){
    
    //get the data from the api http://fsdiapi.azurewebsites.net/api/tasks
    $.ajax({
        type: "GET",// get something from the server
        url: "http://fsdiapi.azurewebsites.net/api/tasks",// this is the server url
        success: function(response){
            let data = JSON.parse(response);
            console.log(data);
            for(let i=0; i<data.length; i++){
                let task= data[i];
                if(task.name=="Christina"){//just render the messages that comes from the user
                    displayTask(task);
                }
            }
        },
        error: function(error){
            console.log(error);
        }
        
    });
    
}
function displayTask(task){
    
    let syntax = 
    `<div class ='task'>
    <div class='info'>
    <h3>Title: ${task.title}</h3>
    <h5>Description: ${task.description}</h5>
    </div>
    <h5 class="status">Status: ${task.status}</h5>
    <div class="date-budget">
    <h5>Date: ${task.startdate}</h5>
    <h5>Budget: ${task.budget}</h5>
    </div>
    </div>
    
    `
    
    $(".list-task").append(syntax);
    
}
function testRequest(){
    $.ajax({
        type: "GET",// get something from the server
        url: "http://fsdiapi.azurewebsites.net",// this is the server url
        success: function(response){
            console.log(response);
        },
        error: function(error){
            console.log(error);
        }
        
    });
}
function clearForm(){// clear the form after you hit save button
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#selColor").val("");
    $("#selStartDate").val("");
    $("#selStatus").val("");
    $("#numBudget").val("");
}
function init(){//initialize the application
    console.log("task manager");
    //load data
    getTask();
    //hook the events
    $("#btnSave").click(saveTask);
}








//function getTask{//get the task from the local storage
//}
window.onload = init;//calls the init function when the page is loaded// This is the parent