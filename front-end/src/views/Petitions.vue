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
  <div class="projects-wrap">
    <div class="projects-main">
      <h4>Local Petitions</h4>

      <div class="post" style="margin-bottom: 10px;">
        <div class="post-header"><img src="../assets/PersonIcon.svg"><h5>{{userName}}</h5>
        </div><div class="form">
          <input v-model="petitionContent" placeholder="Start a new petition!" style="width: 90%;"/>
          <input type="file" name="petitionPhoto" style="margin-bottom: 10px;" @change="fileChanged">
          <button @click="uploadPetition" style="width: 100%">Post</button>
        </div>
      </div>

      <div v-for="petition in petitions" :key="petition.id">
        <p class="post"><img :src="petition.petitionPicture" width="50px">{{petition.description}} </p>
      </div>

      <p class="post"><a href = ''>See More</a></p>
    </div>
  </div>
  <div class='footer-container'>
    <div class='footer'><a href="https://github.com/BYU-CS-260-Winter-2021/lab-1-photography-website-ashtonkreiling">
        Find Me On Github</a></div>
  </div>
</div>
</template>

<style>
.projects-wrap{
  display: flex;
  justify-content: center;
  height: 100%;
}
.projects-main {
  width: 80%;
  display: block;
  background-color: #7545B8;
  margin-top: 2%;
  margin-bottom: 100px;
}
</style>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      userID: "60623116b5b85446a83d364d",
      userName: "Admin",
      petitionContent:"",
      file: null,
      petitions: []
    }
  },
  created() {
    this.getPetitions();
  },
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async uploadPetition() {
      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        await axios.post(`/api/users/${this.userID}/petition`, {
          user: this.userID,
          petitionPicture: r1.data.path,
          description: this.petitionContent
        });
        this.file = null;
      } catch (error) {
        console.log(error);
      }
      this.getPetitions();
    },
    async getPetitions() {
      try {
        let response = await axios.get(`/api/user/${this.userID}/petitions`);
        this.petitions = response.data;
        this.petitions.reverse();
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  }
}
</script>
