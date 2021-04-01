<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/forgot-password">
            <p class="nav-link">Forgot Password</p>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class='login-box'>
    <div class='input-field-container'>
      <input type="text" name="username" placeholder="Username"/>
      <input type="text" name="password" placeholder="Password"/>
    </div>
    <router-link to="/feed"><a href="">Login</a></router-link>
    <router-link to="/sign-up"><a href="">Sign Up</a></router-link>
  </div>

  <div class='footer-container'>
    <div class='footer'><a href="https://github.com/BYU-CS-260-Winter-2021/lab-1-photography-website-ashtonkreiling">
        Find Me On Github</a></div>
  </div>

</div>
</template>

<style>
media only screen and (max-width: 400px) {

  .login-box {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #D0B3E5;
    border-radius: 10px;
    padding: 10px;
    left:10%;
    width: 80%;
    height: 60%;
    bottom: 10%; }

    .login-box a {
      display: block;
      width: 40%;
      text-align: center;
      border-radius: 10px;
      color: #DBD8E5;
      background-color: #7545B8;
      position:relative;
      left: 30%;
      text-decoration: none;
      font-size: 1.1em;
    }

}

@media only screen and (min-width: 401px) and (max-width: 960px) {
  .login-box {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #D0B3E5;
    border-radius: 10px;
    padding: 10px;
    left: 30%;
    width: 40%;
    height: 40%;
    bottom: 20%; }

    .login-box a {
      display: block;
      width: 40%;
      text-align: center;
      border-radius: 10px;
      color: #DBD8E5;
      background-color: #7545B8;
      position:relative;
      left: 30%;
      text-decoration: none;
      font-size: 1.1em;
    }
}

@media only screen and (min-width: 961px) {
  .login-box {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #D0B3E5;
    border-radius: 10px;
    padding: 10px;
    left: 30%;
    width: 40%;
    height: 40%;
    bottom: 200px; }

    .login-box a {
      display: block;
      width: 40%;
      text-align: center;
      border-radius: 10px;
      color: #DBD8E5;
      background-color: #7545B8;
      position:relative;
      left: 30%;
      text-decoration: none;
      font-size: 1.1em;
    }

}

.login-box a:hover {
  color: #EEE;
}


.input-field-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50%;
}

input {
  border-radius: 5px;
  height:55%;
}
</style>
