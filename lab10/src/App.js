import './App.css';
import '../src/style/style.css'
import task_image from '../src/media/task.jpg';
import PointChecker from './PointChecker';

function App() {
  return (
    <div className="App-container">
      <header>
          <h1>Проектування та розробка веб-застосунків</h1>
          <h2>Лабораторні роботи №5. JavaScript</h2>
          <h2>Виконала Промоцька А.А., студентка групи КН-31</h2> 
          <h2>8 варіант</h2>
        </header>

        <main>
          <section className="task-description">
            <h2>Завдання:</h2>

            <p>
              Необхідно написати проект на фреймворку, який визначає потрапляння крапки на координатній площині в задану область чи ні відповідно до варіанту завдань
            </p>

            <img src={task_image}/>
          </section>
        </main>

        <PointChecker />
    </div>
  );
}

export default App;
