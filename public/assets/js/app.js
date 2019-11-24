
//animation for the home page
var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;


var landingPage = {};
landingPage.opacityIn = [0, 1];

anime.timeline({ loop: false })
  .add({
    targets: '.ml4 .letters-1',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-1',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-2',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: '.ml4 .letters-2',
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.ml4 .letters-3',
    opacity: ml4.opacityIn,
    scale: ml4.scaleIn,
    duration: ml4.durationIn
  }).add({
    targets: ['.ml4 .letters-3', '.opening-screen'],
    opacity: 0,
    scale: ml4.scaleOut,
    duration: ml4.durationOut,
    easing: "easeInExpo",
    delay: ml4.delay
  }).add({
    targets: '.landing-page',
    opacity: landingPage.opacityIn,
    easing: "easeInOutCirc",
  }).add({
    targets: ['.ml4', '.opening-screen'],
    scale: 1
  });


//submits data to and from the database
$(function () {
  //POST calls for the leagues page
  submitLeague();
  submitTeam();
  joinTeam();

  //POST call for the sign up page
  newUser();


});

//POST ajax call to the database when creating a new league - will need to edit the titles/syntax
function submitLeague() {
  $("#submit-league").on("click", function () {
    $.ajax("/api/leagues", {
      type: "POST",
      data: addedLeague
    }).then(
      function () {
        console.log("created new league");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
};


//POST ajax call to the database when creating a new team - will need to edit the titles/syntax
function submitTeam() {
  $("#submit-team").on("click", function () {
    $.ajax("/api/teams", {
      type: "POST",
      data: addedTeam
    }).then(
      function () {
        console.log("created new team");
        location.reload();
      }
    );
  });
};


//POST ajax call to the database when creating a new player - will need to edit the titles/syntax
function joinTeam() {
  $("#join-team").on("click", function () {
    $.ajax("/api/teams", {
      type: "POST",
      data: addedPlayer
    }).then(
      function () {
        console.log("added new player");
        location.reload();
      }
    );
  });
};

//POST ajax call to the database when create a new account
function newUser(){
  $("#new-user").on("click", function(){
    $.ajax("/api/users", {
      type: "POST",
      data: addedUser
    }).then(
      function () {
        console.log("created new user");
        //think we would need to do a GET request for profile here instead of a reload...
      }
    )
  })
}