<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <input type="text" name="Search" placeholder="Search"/>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link" to="/feed"><img src="../assets/FeedIcon.svg" width="30px"></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/groups"><img src="../assets/GroupIcon.svg" width="30px"></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/profile"><img src="../assets/PersonIcon.svg" width="30px"></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/"><img src="../assets/LogOutIcon.svg" width="30px"></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/projects"><img src="../assets/HammerIcon.svg" width="30px"></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/petitions"><img src="../assets/ScrollIcon.svg" width="30px"></router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="main-wrap">
    <div class = "profile-block">
      <div class="card">
  <img src="../assets/PersonIcon.svg" width='100%'>
  <div class="container">
    <h4><b>John Doe</b></h4>
  </div>
</div>
      <div class="about">
        <ul>
          <li>Birthday: 01/01/2001</li>
          <li>Lives in: Provo, UT</li>
          <li>Phone: 000-000-0000</li>
          <li>Gender: Male</li>
          <li>Relationship Status: Single</li>
          <li>From : Nowheresville, NA</li>
        </ul>
      </div>
      </div>
    </div>


  <div class='footer-container'>
    <div class='footer'><a href="https://github.com/BYU-CS-260-Winter-2021/lab-1-photography-website-ashtonkreiling">
        Find Me On Github</a></div>
  </div>
</div>
</template>
