const url = 'https://api.jsonbin.io/v3/b/656a263d12a5d37659a1bed0';
const apiKey = '$2a$10$LXLWrCeAqML6U1jcOyITmO/PBHWWOTN6TT74m/NIYxUQEwnvAVTEW';

readStudentsList();

class Students {
    constructor(name, surname, yearOfStudy, group, sch) {
        this.name = name;
        this.surname = surname;
        this.yearOfStudy = yearOfStudy;
        this.group = group;
        if (typeof (sch) == "boolean")
            this.hasScholarship = sch;
        else this.hasScholarship = false;
    }
}

async function readStudentsList() {
    const request = new Request(url);
    request.headers.append('X-Master-Key', apiKey);

    await fetch(request)
    .then(response => response.json())
    .then (data => {
        let students = newStudents(data.record.students);
        showHeader();
        showStudents(students);
    })
    .catch(response => console.error(response))
}

function newStudents(array) {
    let students = [];

    for (a of array) {
        let student = new Students(a.name, a.surname, a.yearOfStudy, a.group, a.hasScholarship);
        students.push(student);
    }

    return students;
}

function showHeader() {
    const section = document.querySelector(".task-solving");
    const studListHeader = document.createElement("h2");
    studListHeader.innerText = "Рейтинг успішності студентів";
    section.appendChild(studListHeader);
}

function showStudents(students) {
    const section = document.querySelector(".task-solving");
  
    const divWithScholarship = document.createElement("div");
    const divWithoutScholarship = document.createElement("div");
  
    const h3With = document.createElement("h3");
    h3With.textContent = "Студенти зі стипендією";
  
    const h3Without = document.createElement("h3");
    h3Without.textContent = "Студенти без стипендії";
  
    const studentsWithList = document.createElement("ul");
    const studentsWithoutList = document.createElement("ul");
  
    for (const student of students) {
      const listItem = document.createElement("li");
      const br1 = document.createElement("br");
      const br2 = document.createElement("br");
      const br3 = document.createElement("br");
      
      listItem.textContent = `${student.name} ${student.surname}`;
      listItem.appendChild(br1);
      listItem.appendChild(document.createTextNode(student.yearOfStudy));
      listItem.appendChild(br2);
      listItem.appendChild(document.createTextNode(student.group));
      listItem.appendChild(br3);
  
      if (student.hasScholarship) {
        studentsWithList.appendChild(listItem);
      } else {
        studentsWithoutList.appendChild(listItem);
      }
    }
  
    divWithScholarship.appendChild(h3With);
    divWithScholarship.appendChild(studentsWithList);
  
    divWithoutScholarship.appendChild(h3Without);
    divWithoutScholarship.appendChild(studentsWithoutList);
  
    section.appendChild(divWithScholarship);
    section.appendChild(divWithoutScholarship);
}