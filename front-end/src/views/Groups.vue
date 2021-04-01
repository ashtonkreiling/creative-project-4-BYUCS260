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
  <div class="groups-wrap">
    <div class="groups-main">
      <h4>Groups Near You</h4>
      <ul>
        <li class="group-block">
          <div class="group-card">
            <img src="../assets/PersonIcon.svg" width='100%'>
            <div class="container">
              <h4><b>Community Action Services</b></h4>
            </div>
          </div>
          <div class="group-about">
            <ul>
              <li>City: Provo, UT</li>
              <li>Phone: 801-373-8200</li>
            </ul>
          </div>
        </li>
        <li class="group-block">
          <div class="group-card">
            <img src="../assets/PersonIcon.svg" width='100%'>
            <div class="container">
              <h4><b>Disabled American Veterans</b></h4>
            </div>
          </div>
          <div class="group-about">
            <ul>
              <li>City: Provo, UT</li>
              <li>Phone: 877-474-2190</li>
            </ul>
          </div>
        </li>
        <li class="group-block">
          <div class="group-card">
            <img src="../assets/PersonIcon.svg" width='100%'>
            <div class="container">
              <h4><b>Women's Shelter - Provo</b></h4>
            </div>
          </div>
          <div class="group-about">
            <ul>
              <li>City: Provo, UT</li>
              <li>Phone: 801-377-5500</li>
            </ul>
          </div>
        </li>
        <li class="group-block">
          <div class="group-card">
            <img src="../assets/PersonIcon.svg" width='100%'>
            <div class="container">
              <h4><b>American Red Cross</b></h4>
            </div>
          </div>
          <div class="group-about">
            <ul>
              <li>City: Provo, UT</li>
              <li>Phone: 801-373-8580</li>
            </ul>
          </div>
        </li>
        <li class="group-block">
          <div class="group-card">
            <img src="../assets/PersonIcon.svg" width='100%'>
            <div class="container">
              <h4><b>Centro Hispano</b></h4>
            </div>
          </div>
          <div class="group-about">
            <ul>
              <li>City: Provo, UT</li>
              <li>Phone: 801-655-0258</li>
            </ul>
          </div>
        </li>
        <li class="group-block">
          <div class="group-card">
            <img src="../assets/PersonIcon.svg" width='100%'>
            <div class="container">
              <h4><b>Help International</b></h4>
            </div>
          </div>
          <div class="group-about">
            <ul>
              <li>City: Provo, UT</li>
              <li>Phone: 801-374-0556</li>
            </ul>
          </div>
        </li>
        <li class="group-block">
          <div class="group-card">
            <img src="../assets/PersonIcon.svg" width='100%'>
            <div class="container">
              <h4><b>Turn Community Services</b></h4>
            </div>
          </div>
          <div class="group-about">
            <ul>
              <li>City: Provo, UT</li>
              <li>Phone: 801-373-0501</li>
            </ul>
          </div>
        </li>
      </ul>
  </div>
</div>
<div class='footer-container'>
  <div class='footer'><a href="https://github.com/BYU-CS-260-Winter-2021/lab-1-photography-website-ashtonkreiling">
      Find Me On Github</a></div>
</div>
</div>
</template>

<style>
.groups-wrap{
  display: flex;
  justify-content: center;
  height: 100%;
}
.groups-main {
  width: 80%;
  display: block;
  background-color: #7545B8;
  margin-top: 2%;
  margin-bottom: 100px;
}
.group-block {
display: flex;
background-color: #D0B3E5;
color: #1B132E;
width: 90%;
margin-top: 2%;
margin-left: 2%;
height: 320px;
}
.group-card h4 {
  color: #1B132E;

  width: 100%;
}
.group-card{
  width:40%;
  height:100%;
  border-right: 1px;
  border-right-color: #1B132E;
}
.group-about {
  display: block;
  background-color: #D0B3E5;
  color: #1B132E;
  width: 100%;
  text-decoration: none;
  font-size: 2em;
}
.group-about ul {
  list-style-type: none;
  font-size: 1em;
  height: 100%;
}

@media only screen and (max-width: 400px){
  .group-block {
    flex-direction: column;
    margin-bottom:60%;
  }
}

@media only screen and (min-width: 401px) and (max-width: 960px) {
  .group-block {
    flex-direction: column;
    margin-bottom:30%;
  }
}


</style>
