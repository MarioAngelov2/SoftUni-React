import * as authService from "../services/authService";
import { useNavigate } from "react-router-dom";

const Login = ({
  onLogin,
}) => {
  let navigate = useNavigate();

  const onLoginHandler = (ev) => {
    ev.preventDefault();

    let formData = new FormData(ev.currentTarget);

    let email = formData.get("email");

    authService.login(email);
    
    onLogin(email);

    navigate('/');
  };

  return (
    <section id="login-page" className="login">
      <form id="login-form" onSubmit={onLoginHandler} method="POST">
        <fieldset>
          <legend>Login Form</legend>
          <p className="field">
            <label htmlFor="email">Email</label>
            <span className="input">
              <input type="text" name="email" id="email" placeholder="Email" />
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </span>
          </p>
          <input className="button submit" type="submit" value="Login" />
        </fieldset>
      </form>
    </section>
  );
};

export default Login;
