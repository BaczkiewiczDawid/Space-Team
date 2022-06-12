import { InputContainer } from 'components/Settings/Input.style';

const Input = ({
  loggedUserData,
  label,
  userValue,
  onChange,
  disabled,
  name,
  placeholder,
  className
}) => {
  return (
    <InputContainer>
      <label htmlFor="">{label}</label>
      <input
        type="text"
        value={userValue}
        onChange={onChange}
        disabled={disabled}
        name={name}
        className={className}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

export default Input;
