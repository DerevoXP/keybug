document.addEventListener('keypress', event => run(event));

function run(event) {
     if (event.code == 'Space') {
        alert('Теперь попробуйте нажать F5 не закрывая это всплывающее окно нажатием на OK!');
    } else {
        document.getElementById('ind').innerText = event.code;
    };
};