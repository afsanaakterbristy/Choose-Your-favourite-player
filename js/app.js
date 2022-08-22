
document.getElementById('btn-select-one').addEventListener('click', function () {
    const nameOne = document.getElementById('name-one');
    const newNameOne = nameOne.innerText;
    const placeList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = newNameOne;
    placeList.appendChild(li);
    
});
document.getElementById('btn-select-two').addEventListener('click', function () {
    const nameOne = document.getElementById('name-two');
    const newNameOne = nameOne.innerText;
    const placeList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = newNameOne;
    placeList.appendChild(li);
    
});
document.getElementById('btn-select-three').addEventListener('click', function () {
    const nameOne = document.getElementById('name-three');
    const newNameOne = nameOne.innerText;
    const placeList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = newNameOne;
    placeList.appendChild(li);
    
});
document.getElementById('btn-select-four').addEventListener('click', function () {
    const nameOne = document.getElementById('name-four');
    const newNameOne = nameOne.innerText;
    const placeList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = newNameOne;
    placeList.appendChild(li);
    
});
document.getElementById('btn-select-five').addEventListener('click', function () {
    const nameOne = document.getElementById('name-five');
    const newNameOne = nameOne.innerText;
    const placeList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = newNameOne;
    placeList.appendChild(li);
    
});
document.getElementById('btn-select-six').addEventListener('click', function () {
    const nameOne = document.getElementById('name-six');
    const newNameOne = nameOne.innerText;
    const placeList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = newNameOne;
    placeList.appendChild(li);
    
});

  let player;
function playerCalculate() {
    const perPlayer = document.getElementById('per-player');
    const playerExpenses = document.getElementById('player-expenses');

    const newPerPlayerString = perPlayer.value;
    const newPerPlayer=parseInt(newPerPlayerString)
  
    player = 5 * newPerPlayer;
    playerExpenses.innerText = player;
}

function totalCalculation() {
    const manager = document.getElementById('manager');
    const newManagerString = manager.value;
    const newManager = parseInt(newManagerString);
    const coach = document.getElementById('coach');
    const newCoachString = coach.value;
    const newCoach = parseInt(newCoachString)
   
    const total = player + newManager + newCoach;
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = total;
}

    document.getElementById('calculate').addEventListener('click', function () {
        playerCalculate();  

   })
    document.getElementById('total-calculate').addEventListener('click', function () {
        totalCalculation();
      
})

