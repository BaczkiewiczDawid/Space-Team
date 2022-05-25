import { useNavigate } from "react-router-dom";
import logoutIcon from "assets/images/log-out.svg";
import { LogoutBtn } from 'components/Logout.style';

const Logout = () => {
  let navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login", { replace: true });
  };

  return (
    <LogoutBtn onClick={handleLogout}>
      <img src={logoutIcon} alt="logout"></img>
      <p>Log out</p>
    </LogoutBtn>
  );
};

export default Logout;
