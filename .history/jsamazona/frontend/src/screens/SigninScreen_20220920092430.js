import { signin } from "../api";

/* eslint-disable arrow-body-style */
const SigninScreen = {
    after_render: () => {
        document.getElementById('signin-form')
        .addEventListener("submit", async (e) => {
            e.preventDefault();
            const data = await signin({
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,                
            });
            if(data.error){
                alert(data.error);
            }else {
                document.location.hash = '/';
            }
        })
    },
    render: () => {
      return `
      <div class="form-container">
        <form id="signin-form">
          <ul class="form-items">
            <li>
              <h1>Sign-In</h1>
            </li>
            <li>
              <label for="email">Email</label>
              <input type="email" name="email" id="email" />
            </li>
            <li>
              <label for="password">Password</label>
              <input type="password" name="password" id="password" />
            </li>
            <li>
              <button type="submit" class="primary">Signin</button>
            </li>
            <li>
              <div>
                New User?
                <a href="/#/register">Create your account </a>
              </div>
            </li>
          </ul>
        </form>
      </div>
      `;
    },
  };
  export default SigninScreen;