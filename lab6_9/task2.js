document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const fullNameInput = document.getElementById('fullname');
    const yearOfStudyInput = document.getElementById('year-of-study');
    const groupInput = document.getElementById('group');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = fullNameInput.value.trim();
        const yearOfStudy = parseInt(yearOfStudyInput.value);
        const group = parseInt(groupInput.value);

        
        if (yearOfStudy !== parseInt(group.toString().charAt(0))) {
            alert('Курс повинен відповідати першій цифрі групи!');
        } else {
            const resultContainer = document.createElement('div');
            resultContainer.className = 'result-message'; 
            resultContainer.textContent = '';
            resultContainer.textContent = `Твоє ім'я, друже: ${fullName}`;
            form.insertAdjacentElement('afterend', resultContainer);
        }

    });
});
