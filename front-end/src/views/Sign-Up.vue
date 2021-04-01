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
        <input type="text" v-model="firstName" placeholder="First Name"/>
        <input type="text" v-model="lastName" placeholder="Last Name"/>
        <input type="text" v-model="birthday" placeholder="Birthday"/>
        <input type="text" v-model="gender" placeholder="Gender"/>
        <input type="text" v-model="city" placeholder="Current City"/>
        <input type="text" v-model="homeTown" placeholder="Home Town"/>
        <input type="text" v-model="phoneNumber" placeholder="Phone Number"/>
        <input type="text" v-model="relationshipStatus" placeholder="Relationship Status"/>
        <input type="text" v-model="username" placeholder="Username"/>
        <input type="text" v-model="password" placeholder="Password"/>
        <input type="file" name="photo" @change="fileChanged">
      </div>
      <router-link to="/feed"><a href="">Sign Up</a></router-link>
    </div>

    <div class='footer-container'>
      <div class='footer'><a href="https://github.com/BYU-CS-260-Winter-2021/lab-1-photography-website-ashtonkreiling">
          Find Me On Github</a></div>
    </div>
  </div>
</template>

<style>

router-link {
  display: inline;
}

</style>

<!--script>
import axios from 'axios';
export default {
  data() {
    return {
    photoPath: "/public/assets/PersonIcon.svg",
    firstName: "",
    lastName: "",
    birthday: "",
    gender: "",
    city: "",
    homeTown: "",
    phoneNumber: "",
    relationshipStatus: "",
    username: "",
    password: "",
  }
},
  methods: {
    fileChanged(event) {
      this.file = event.target.files[0]
    },
    async signUp() {
      try {
        const formData = new FormData();
        formData.append('photo',this.photoPath, this.photoPath.name)
        let r1 = await axios.post('/api/photos',formData);
        let r2 = await axios.post('/api/users', {
          userName: this.username,
          password: this.password,
          personIconPath: r1.data.path,
          personName: this.firstName + " " + this.lastName,
          birthday: this.birthday,
          userCity: this.city,
          userPhone: this.phoneNumber,
          userGender: this.gender,
          userRelationshipStatus: this.relationshipStatus,
          userHomeTown: this.homeTown
        });
      } catch (error) {
        console.log(error);
      }
    },
  }
}

</script-->
