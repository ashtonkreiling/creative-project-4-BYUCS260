const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/creative-project-4', {
  useNewUrlParser: true
});

app.post('/api/users/', async (req, res) => {
  const user = new User({
    userName: req.body.userName,
    password: req.body.password,
    personIconPath: req.body.personIconPath,
    personName: req.body.personName,
    birthday: req.body.birthday,
    userCity: req.body.userCity,
    userPhone: req.body.userPhone,
    userGender: req.body.userGender,
    userRelationshipStatus: req.body.userRelationshipStatus,
    userHomeTown: req.body.userHomeTown
  });
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/users/:userID/post', async (req, res) => {
  try {
    let user = await User.findOne({_id: req.params.userID});
    if (!user) {
        res.send(404);
        return;
    }
    let post = new Post({
      user: user,
      personIconPath: user.personIconPath,
      personName: user.personName,
      postMessage: req.body.postMessage,
      postPicture: req.body.postPicture
    });
    await post.save();
    res.send(post);
} catch (error) {
    console.log(error);
    res.sendStatus(500);
}
});

app.post('/api/users/:userID/petition', async (req, res) => {
  try {
    let user = await User.findOne({_id: req.params.userID});
    if (!user) {
        res.send(404);
        return;
    }
    let petition = new Petition({
      user: user,
      petitionPicture: req.body.petitionPicture,
      description: req.body.description
    });
    await petition.save();
    res.send(petition);
} catch (error) {
    console.log(error);
    res.sendStatus(500);
}
});

app.post('/api/users/:userID/project', async (req, res) => {
  try {
    let user = await User.findOne({_id: req.params.userID});
    if (!user) {
        res.send(404);
        return;
    }
    let project = new Project({
      user: user,
      projectPicture: req.body.projectPicture,
      description: req.body.description
    });
    await project.save();
    res.send(project);
} catch (error) {
    console.log(error);
    res.sendStatus(500);
}
});

app.post('/api/users/:userID/group', async (req, res) => {
  try {
    let admin = await User.findOne({_id: req.params.userID});
    if (!admin) {
        res.send(404);
        return;
    }
    let group = new Group({
      admin: admin,
      groupIcon: req.body.groupIcon,
      groupName: req.body.groupName,
      groupCity: req.body.groupCity,
      groupPhone: req.body.groupPhone,
      description: req.body.description
    });
    await project.save();
    res.send(project);
} catch (error) {
    console.log(error);
    res.sendStatus(500);
}
});

app.get('/api/user/:userID/posts', async (req, res) => {
  try {
    let user = await User.findOne({_id: req.params.userID});
    if(!user){
      res.send(404);
      return;
    }

    let posts = await Post.find({user:user});
    res.send(posts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/user/:userID/petitions', async (req, res) => {
  try {
    let user = await User.findOne({_id: req.params.userID});
    if(!user){
      res.send(404);
      return;
    }

    let petitions = await Petition.find({user:user});
    res.send(petitions);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/user/:userID/projects', async (req, res) => {
  try {
    let user = await User.findOne({_id: req.params.userID});
    if(!user){
      res.send(404);
      return;
    }

    let projects = await Project.find({user:user});
    res.send(projects);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/user/:userID/groups', async (req, res) => {
  try {
    let user = await User.findOne({_id: req.params.userID});
    if(!user){
      res.send(404);
      return;
    }

    let posts = await Post.find({user:user});
    res.send(posts);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

app.put('/api/users/:userID/posts/:postID', async (req, res) => {
    try {
        let post = await Post.findOne({_id:req.params.postID, user: req.params.userID});
        if (!post) {
            res.send(404);
            return;
        }
        post.personIconPath = user.personIconPath,
        post.personName = user.personName,
        post.postMessage = req.body.postMessage,
        post.postPicture = req.body.postPicture
        await post.save();
        res.send(post);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put('/api/users/:userID/projects/:projectID', async (req, res) => {
    try {
        let project = await Project.findOne({_id:req.params.projectID, user: req.params.userID});
        if (!project) {
            res.send(404);
            return;
        }
        project.projectPicture = req.body.projectPicture,
        project.description = req.body.description
        await project.save();
        res.send(project);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put('/api/users/:userID/petitions/:petitionID', async (req, res) => {
    try {
        let petition = await Petition.findOne({_id:req.params.petitionID, user: req.params.userID});
        if (!petition) {
            res.send(404);
            return;
        }
        petition.petitionPicture = req.body.petitionPicture,
        petition.description = req.body.description
        await petition.save();
        res.send(petition);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.put('/api/users/:userID/groups/:groupID', async (req, res) => {
    try {
        let group = await Group.findOne({_id:req.params.groupID, user: req.params.userID});
        if (!group) {
            res.send(404);
            return;
        }
        group.groupIcon = req.body.groupIcon,
        group.groupName = req.body.groupName,
        group.groupCity = req.body.groupCity,
        group.groupPhone = req.body.groupPhone,
        group.description = req.body.description
        await petition.save();
        res.send(petition);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

const userSchema = new mongoose.Schema({
  userName: String,
  password: String,
  personIconPath: String,
  personName: String,
  birthday: String,
  userCity: String,
  userPhone: String,
  userGender: String,
  userRelationshipStatus: String,
  userHomeTown: String,
})

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  personIconPath: String,
  personName: String,
  postMessage: String,
  postPicture: String
});

const petitionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  petitionPicture: String,
  description: String
});

const projectSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  projectPicture: String,
  description: String
});

const groupSchema = new mongoose.Schema({
  admin: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },
  groupIcon: String,
  groupName: String,
  groupCity: String,
  groupPhone: String,
  description: String
});

const User = mongoose.model('User',userSchema);
const Post = mongoose.model('Post',postSchema);
const Petition = mongoose.model('Petition',petitionSchema);
const Project = mongoose.model('Project',projectSchema);
const Group = mongoose.model('Group',groupSchema);

app.post('/api/photos', upload.single('photo'), async (req, res) => {
  // Just a safety check
  if (!req.file) {
    return res.sendStatus(400);
  }
  res.send({
    path: "/images/" + req.file.filename
  });
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
