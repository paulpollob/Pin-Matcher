document.getElementById('keypad').addEventListener('click', function(event){

    console.log("Hare Krishna");
    console.log(event.target.innerText);

    const chance = document.getElementById('chance');
    const display = document.getElementById('display');
    const btnValue = event.target.innerText; 
    if(!isNaN(btnValue)){
        display.value = display.value+btnValue;
    }
    else if(btnValue === '<')
    {
        let temp = display.value;
        display.value = temp.substring(0, temp.length-1);
    }
    else if(btnValue === 'C')
    {
        display.value = '';
    }
    else if(btnValue === "Submit")
    {
        if(display.value === document.getElementById('showPin').value)
        {
            alert("Hori ball you are successfull");
        }
        else
        {
            alert("Hare Krishna try again.best of luck");
            chance.innerText = chance.innerText-1;
            
        }
    }
    
});