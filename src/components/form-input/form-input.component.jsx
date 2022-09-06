import "./form-input.style.scss";

const FormInput = ({ label, ...otherprops }) => {
  return (
    <div className="group">
      {label && (
        <label
          className={`${
            otherprops.value.length > 0 ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
      <input className="form-input" {...otherprops} />
    </div>
  );
};

export default FormInput;
