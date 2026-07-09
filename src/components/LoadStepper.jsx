import './LoadStepper.css';

export default function LoadStepper({ value, step = 1, onChange }) {
  function ajustar(delta) {
    const novo = Math.max(0, Math.round((value + delta) * 10) / 10);
    onChange(novo);
  }

  return (
    <div className="load-stepper">
      <button
        className="load-stepper-btn"
        onClick={() => ajustar(-step)}
        aria-label="Diminuir carga"
      >
        −
      </button>
      <div className="load-stepper-value">
        <span className="display">{value}</span>
        <span className="load-stepper-unit">kg</span>
      </div>
      <button
        className="load-stepper-btn load-stepper-btn--add"
        onClick={() => ajustar(step)}
        aria-label="Aumentar carga"
      >
        +
      </button>
    </div>
  );
}
