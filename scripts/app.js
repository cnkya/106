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

    //display the info from the server
    displayTask(taskToSave);
//try to create a function to clear at the moment we hit the save button
    clearForm(taskToSave); 

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
//hook the events
$("#btnSave").click(saveTask);
}








//function getTask{//get the task from the local storage
//}
window.onload = init;//calls the init function when the page is loaded// This is the parent