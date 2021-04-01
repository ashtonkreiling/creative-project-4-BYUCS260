<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/">
            <p class="nav-link">Back</p>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>

  <div class='input-box'>
    <div class='input-field-container'>
      <input type="text" name="username" placeholder="Username"/>
      <div class='input-pair'>
      <select id="Security Q1">
        <option>What is the name of the road you grew up on?</option>
        <option>What is your mother's maiden name?</option>
        <option>What was the name of your first pet?</option>
      </select>
      <input type="text" name="SQ-answer-1" placeholder="Answer"/>
      </div>
      <div class='input-pair'>
      <select id="Security Q2">
        <option>What is your favorite book?</option>
        <option>What was the first company you worked for?</option>
        <option>Where did you meet your spouse?</option>
      </select>
      <input type="text" name="SQ-answer-2" placeholder="Answer"/>
      </div>
      <div class = 'input-pair'>
      <select id="Security Q3">
        <option>Where did you go to high school?</option>
        <option>What city were you born in?</option>
        <option>What is your favorite food?</option>
      </select>
      <input type="text" name="SQ-answer-2" placeholder="Answer"/>
      </div>
    </div>
    <router-link to="/feed"><a href="">Reset</a></router-link>
  </div>

  <div class='footer-container'>
    <div class='footer'><a href="https://github.com/BYU-CS-260-Winter-2021/lab-1-photography-website-ashtonkreiling">
        Find Me On Github</a></div>
  </div>
</div>
</template>
