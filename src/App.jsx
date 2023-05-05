import "./App.css";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  // [ {type: "success", message: "Hola mundo"}, {type: "error", message: "Hola mundo"} ]
  const [alerts, setAlerts] = useState([]);
  const TIME_TO_CLOSE = 1000;
  const TIME_TO_AUTOCLOSE = 2500;

  const handleButton = (alert) => {
    const newAlert = {
      id: Math.random().toString(36) + Date.now(),
      type: alert.type,
      message: alert.message,
      shouldClose: false,
    };
    setAlerts([...alerts, newAlert]);

    setTimeout(() => {
      // Fade out
      setAlerts((prevState) =>
        prevState.map((alert) => {
          if (alert.id === newAlert.id) {
            return { ...alert, shouldClose: true };
          }
          return alert;
        })
      );

      // Elimina la alerta
      setTimeout(() => {
        setAlerts((prevState) =>
          prevState.filter((alert) => alert.id !== newAlert.id)
        );
      }, TIME_TO_CLOSE);
    }, TIME_TO_AUTOCLOSE);
  };

  const handleClose = (e) => {
    const currentId = e.currentTarget.id;
    const newAlerts = alerts.map((alert) => {
      if (alert.id === currentId) {
        return { ...alert, shouldClose: true };
      }
      return alert;
    });
    setAlerts(newAlerts);

    setTimeout(() => {
      setAlerts((prevState) =>
        prevState.filter((alert) => alert.id !== currentId)
      );
    }, TIME_TO_CLOSE); // elimina la alerta después de 2 segundos (2000 milisegundos)
  };

  return (
    <>
      <div>
        <h1>Alertas {alerts.length}</h1>
        <div className="container__buttons">
          <Button
            handleButton={handleButton}
            type="success"
            message="!Éxito!"
          />
          <Button handleButton={handleButton} type="error" message="¡Error!" />
          <Button
            handleButton={handleButton}
            type="warning"
            message="¡Cuidado!"
          />
          <Button handleButton={handleButton} type="info" message="¡Nota!" />
        </div>
      </div>
      <div className="container__alert">
        {alerts.map((alert, index) => (
          <Alert
            key={index}
            alert={alert}
            handleClose={handleClose}
            TIME_TO_AUTOCLOSE={TIME_TO_AUTOCLOSE}
            TIME_TO_CLOSE={TIME_TO_CLOSE}
          />
        ))}
      </div>
    </>
  );
}

export default App;
