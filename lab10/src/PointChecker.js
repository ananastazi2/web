import './style/PointChecker.css'
import {useState} from 'react'

function PointChecker () {
  const [formData, setFormData] = useState({
    Xn: 0,
    Xk: 0,
    Xh: 0,
    Yn: 0,
    Yk: 0,
    Yh: 0,
    R: 0,
  });

  const [executionTime, setExecutionTime] = useState(0);

  const [calculationResults, setCalculationResults] = useState([]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: Number(value),
    });
  };

  const checkPointInRegion = (x, y, R) => {
    if (
      (x >= -R && x <= 0 && y >= 0 && y <= R) ||
      (x >= 0 && y >= 0 && (x ** 2 + y ** 2 <= (R / 2) ** 2)) || 
      (x >= 0 && x <= R && y <= 0 && y >= -R) 
    ) {
      return true;
    }
    return false;
  };
  
  const performPointCheck = (event) => {
    event.preventDefault();

    const start = performance.now();

    const { Xn, Xk, Yn, Yk, Xh, Yh, R } = formData;

    const results = [];

    for (let x = Xn; x <= Xk; x += Xh) {
      for (let y = Yn; y <= Yk; y += Yh) {
        const isInside = checkPointInRegion(x, y, R);
        results.push({ x, y, isInside });
      }
    }

    setCalculationResults(results);

    const end = performance.now();
    const duration = end - start;

    setExecutionTime(duration);
  };
  

  return (
    <main>
      <section className='task-solving'>
            <h3>Введіть дані для розрахунку</h3>
            <form onSubmit={performPointCheck}>
              <fieldset>
                <legend>Значення Х</legend>

                <div className="input-container">
                      <input type="number" id="Xn" value={formData.Xn} onChange={handleChange} required=""/>
                      <label>
                          Xn
                      </label>
                </div>

                <div className="input-container">
                      <input type="number" id="Xk" value={formData.Xk} onChange={handleChange} required=""/>
                      <label>
                          Xk
                      </label>
                </div>

                <div className="input-container">
                      <input type="number" id="Xh" min="1" value={formData.Xh} onChange={handleChange} required=""/>
                      <label>
                          Xh
                      </label>
                </div>
              </fieldset>

              <fieldset>
                <legend>Значення Y</legend>

                <div className="input-container">
                      <input type="number" id="Yn" value={formData.Yn} onChange={handleChange} required=""/>
                      <label>
                          Yn
                      </label>
                </div>

                <div className="input-container">
                      <input type="number" id="Yk" value={formData.Yk} onChange={handleChange} required=""/>
                      <label>
                          Yk
                      </label>
                </div>

                <div className="input-container">
                      <input type="number" id="Yh" min="1" value={formData.Yh} onChange={handleChange} required=""/>
                      <label>
                          Yh
                      </label>
                </div>
              </fieldset>

              <fieldset>
                <legend>Значення R</legend>

                <div className="input-container">
                      <input type="number" id="R" min="1" value={formData.R} onChange={handleChange} required=""/>
                      <label>
                          R
                      </label>
                </div>
              </fieldset>

              <button type="submit" className='calculate'>Розрахувати</button>
            </form>
      </section>

      <section>
        <h2>Результати</h2>
        <table>
          <thead>
            <tr>
              <th>X</th>
              <th>Y</th>
            </tr>
          </thead>
          <tbody>
            {calculationResults.map(({ x, y, isInside }, index) => (
              <tr key={index} style={{ background: isInside ? 'green' : 'red' }}>
                <td>{x}</td>
                <td>{y}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Поточний час: {new Date().toLocaleString()}</p>
        <p>Час виконання скрипту: {executionTime} млс</p>
      </section>
  </main>
  );
};

export default PointChecker;