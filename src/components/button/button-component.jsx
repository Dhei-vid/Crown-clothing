import "./button-styles.scss";

const button_type_classes = {
  google: "google-sign-in",
  inverted: "inverted-button",
};

const Button = ({ children, button_type, ...otherprops }) => {
  return (
    <button
      className={`button-container ${button_type_classes[button_type]} }`}
      {...otherprops}
    >
      {children}
    </button>
  );
};

export default Button;
