// All player list

const playerArray = [];
function display(playerDisplay) {
    const tableBody = document.getElementById('new-player');
    tableBody.innerHTML = "";
    for (let i = 0; i < playerDisplay.length; i++) {
        const playerName = playerArray[i];
        
        const tr = document.createElement("tr");
        tr.innerHTML = ` 
                        <th>${i+1}</th>
                        <td>${playerName}</td>
                    `;
        tableBody.appendChild(tr);

    }
}

// For disable button after click
let btn = document.getElementsByClassName('btn-select');
for (let btns of btn) {
    btns.addEventListener('click', function (event) {
        event.target.classList.add('disabled');
        btns.style.backgroundColor = 'grey';
        btns.style.borderStyle = 'none';
        
    });
}

//Find Player lenght with element

function allPlayer(element) {
    const playerName = element.parentNode.parentNode.children[1].innerText;
    
    if (playerArray.length < 5) {
       playerArray.push(playerName);
    display(playerArray); 
    } else {
        alert('You are not allow to select more than five');
        return;
   }
}

// player Budget calculation
    let player;
    function playerCalculate() {
    const perPlayer = document.getElementById('per-player');
    
    
    const newPerPlayerString = perPlayer.value;
    const newPerPlayer = parseInt(newPerPlayerString);
    let playerLength = playerArray.length;
    player = newPerPlayer * playerLength;
   
    if (isNaN(newPerPlayer) || newPerPlayer<=0) {
        alert('Please Enter a valiad number');
        return;
    }
    const playerExpenses = document.getElementById('player-expenses');
    playerExpenses.innerText = player;
    perPlayer.value = '';
}
 
// pTotal Budget calculation
function totalCalculation() {
    const manager = document.getElementById('manager');
    const newManagerString = manager.value;
    const newManager = parseInt(newManagerString);
    const coach = document.getElementById('coach');
    const newCoachString = coach.value;
    const newCoach = parseInt(newCoachString)
    if (isNaN(newManager) || newManager<=0||isNaN(newCoach) || newCoach<=0) {
        alert('Please Enter a valiad number');
        return;
    }
    const total = player + newManager + newCoach;
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = total;
    manager.value = '';
    coach.value = '';
}

document.getElementById('calculate').addEventListener('click', function () {
    playerCalculate();

});
document.getElementById('total-calculate').addEventListener('click', function () {
    totalCalculation();
      
});

