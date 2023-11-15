window.onload = () => {
    generateBlocks(5);
    addButtonsListener();
};

function generateBlocks(count) {
    const container = document.querySelector('.block-container'); 
  
    for (let i = 1; i <= count; i++) {
        const block = generateBlock(i);
  
        container.appendChild(block); 
    }
}

function generateBlock(i) {
    const block = document.createElement('div'); 
    block.classList.add('block'); 

    block.appendChild(document.createTextNode(`Блок ${i}`));
    if (Math.random() < 0.2) {
        block.appendChild(generateBlock(i + '.1'))
    }
    const closeButton = document.createElement('button'); 
    closeButton.classList.add('close-btn'); 
    closeButton.textContent = 'Закрити блок';

    block.appendChild(closeButton);

    return block;
}

function addButtonsListener() {
    const closeButtons = document.querySelectorAll('.close-btn');

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const block = button.closest('.block');
            if (block) {
                block.style.display = 'none';
            }
        });
    });
}
