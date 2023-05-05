import IconAlert from "./Icons/IconAlert";
const Alert = ({ alert, handleClose }) => {
  const { id, type, message, shouldClose } = alert;

  return (
    <button
      className={`alert alert--${type} ${shouldClose ? "fade-out" : ""}`}
      id={id}
      onClick={handleClose}
    >
      <div className={`alert__box alert__box--${type}`}>
        <div className={`alert__box__icon alert__box__icon--${type}`}>
          <IconAlert type={type} />
        </div>
      </div>

      <div className={`alert__message alert__message--${type}`}>
        <p>{message}</p>
      </div>
      <div className="alert__close">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />{" "}
        </svg>
      </div>
    </button>
  );
};

export default Alert;
