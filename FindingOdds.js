document.querySelector('#submitBtn').addEventListener('click', findingOdds);

function findingOdds(e){
    e.preventDefault();

    let numValue = document.querySelector('#userInput[type="text"]').value;
    
    if (numValue === '') {
        alert("You have not inputted anything \nKindly ensure you enter figures");
    } else if (numValue%2 === 0){
        document.getElementById("answer").innerHTML= `${numValue} is an even number`;
    } else if (isNaN(numValue)){
        alert("That is not a figure, you no get sense?");
    } else if (numValue%2 !== 0){
        document.getElementById("answer").innerHTML= `${numValue} is an odd number`;
    }

    clearfields();

    setTimeout(() => {
        document.getElementById("answer").innerHTML = '';
    }, 5000);
    
    
}

function clearfields(){
    document.querySelector('#userInput[type="text"]').value = '';
}


