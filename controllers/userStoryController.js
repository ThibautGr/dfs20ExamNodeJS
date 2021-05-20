const UserStory = require("../models/userStory");

const allByProject = (request, response) => {
    const projectId = request.params.projectId;
    UserStory.find({projectId})
    .then(userStories => response.render("userStories", { projectId, userStories }))
    .catch(err => console.log(err));
}

const createGet = (request, response) => {
    const projectId = request.params.projectId;
    response.render("userStories/create", { projectId });
};

const createPost = (request, response) => {
    UserStory.create(request.body)
        .then(() => response.redirect("/userStories/"+request.body.projectId))
        .catch(err => console.log(err));
};

module.exports = {
    allByProject,
    createGet,
    createPost
};