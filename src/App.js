import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [cantidadCopias, setCantidadCopias] = useState( " ");
  const [numeroPaginas, setNumeroPaginas] = useState(" ");
  const [totalPaginas, setTotalPaginas] = useState(" ");
  const [valorTotal, setValorTotal] = useState(" ");

  useEffect(() => {
    const nuevoTotalPaginas = cantidadCopias * numeroPaginas;
    setTotalPaginas(nuevoTotalPaginas);
  }, [cantidadCopias, numeroPaginas]);

  const calcularValorTotal = () => {
    let valorPorPagina;

    if (totalPaginas >= 1 && totalPaginas <= 24) {
      valorPorPagina = 0.35;
    } else if (totalPaginas >= 25 && totalPaginas <= 49) {
      valorPorPagina = 0.3;
    } else if (totalPaginas >= 50 && totalPaginas <= 100) {
      valorPorPagina = 0.25;
    } else if (totalPaginas >= 101 && totalPaginas <= 249) {
      valorPorPagina = 0.2;
    } else {
      valorPorPagina = 0;
    }

    const precioTotal = valorPorPagina * totalPaginas;
    setValorTotal(precioTotal.toFixed(2));
  };

  const reiniciarValores = () => {
    setCantidadCopias(" ");
    setNumeroPaginas(" ");
    setTotalPaginas(" ");
    setValorTotal(" ");
  };

  return (
    <div className="container">
      <h1>Kari Price Calculator</h1>
      <div className="input-container">
        <label>
           Number of copies:
          <input
            type="number"
            value={cantidadCopias}
            onChange={(e) => setCantidadCopias(parseInt(e.target.value))}
          />
        </label>
        <label>
          Number of pages of the file:
          <input
            type="number"
            value={numeroPaginas}
            onChange={(e) => setNumeroPaginas(parseInt(e.target.value))}
          />
        </label>
        <div className="total-paginas-container">
          <label>Total number of pages:</label>
          <input type="text" value={totalPaginas} readOnly />
        </div>
        <button onClick={calcularValorTotal}>Calculate</button>
        <button onClick={reiniciarValores}>Restart</button>
      </div>
      <div className="valor-total-container">
        <label>Full Value:</label>
        <input type="text" value={valorTotal} readOnly />
      </div>
      <div className="tabla-rangos-container">
        <h2>Range Table</h2>
        <table>
          <thead>
            <tr>
              <th>Range</th>
              <th>Worth (USD)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 - 24</td>
              <td>0.35</td>
            </tr>
            <tr>
              <td>25 - 49</td>
              <td>0.3</td>
            </tr>
            <tr>
              <td>50 - 100</td>
              <td>0.25</td>
            </tr>
            <tr>
              <td>101 - 249</td>
              <td>0.2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;