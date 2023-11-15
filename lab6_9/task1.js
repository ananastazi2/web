var examsList = [];

examsList[0] = {
    disciplineName: "Проєктування та розробка веб-застосунків",
    Date: "2023-11-14T10:00:00+02:00",
    classroomNumber: 221
};

examsList[1] = {
    disciplineName: "Високопродуктивні обчислення",
    Date: "2023-11-15T10:00:00+02:00",
};

examsList[2] = {
    disciplineName: "Методи прийняття рішень",
    Date: "2023-11-12T12:00:00+02:00",
    classroomNumber: 304
};

examsList[3] = {
    disciplineName: "Системний аналіз",
    Date: "2023-11-16T10:00:00+02:00",
};

examsList[4] = {
    disciplineName: "Філософія",
    Date: "2023-11-20T11:00:00+02:00",
    classroomNumber: 217
};

function checkExams() {
    // const today = new Date(2023, 11, 13);
    const today = new Date();
    today.setHours(0,0,0,0);

    let resultHTML = '<h2>Результат:</h2>';

    examsList.forEach((exam) => {
        const examDate = new Date(exam.Date);
        examDate.setHours(0,0,0,0);

        if (today.getDate() === examDate.getDate() - 1) {
        if (exam.classroomNumber !== undefined) {
            resultHTML += `<p>Завтра іспит з ${exam.disciplineName} у ${exam.classroomNumber} аудиторії.</p>`;
        } else {
            resultHTML += `<p>Завтра іспит з ${exam.disciplineName}. Невідоме місце проведення.</p>`;
        }
        } else if (today.getDate() === examDate.getDate() - 2) {
            if (exam.classroomNumber !== undefined) {
                resultHTML += `<p>Завтра консультація з ${exam.disciplineName} у ${exam.classroomNumber} аудиторії.</p>`;
            } else {
                resultHTML += `<p>Завтра консультація з ${exam.disciplineName}. Невідоме місце проведення.</p>`;
            }
        }
    });

    if (resultHTML === '<h2>Результат:</h2>') {
        resultHTML += `<p>Відсутні іспити чи консультації завтра</p>`;
    }

    document.getElementById('result').innerHTML = resultHTML;
}
