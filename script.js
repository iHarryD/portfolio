// Variables

const hamburgerNav = document.querySelector("#hamburger-nav");
const crossNav = document.querySelector("#cross-nav");
const navBar = document.querySelector("nav");
const navItems = document.querySelectorAll("header nav ul li a");
const projectsMenu = document.getElementById("projects-menu");
const gitUsername = "iHarryD";
const gitReposAPI = `https://api.github.com/users/${gitUsername}/repos`;

const projectLiveLinks = {
  "neoG-markOne": "replit.com/@iHarryD/neoG-markOne?embed=1&output=1#index.js",
  "neoG-markTwo": "replit.com/@iHarryD/neoG-markTwo?embed=1&output=1#index.js",
  "neoG-markNine": "iharryd.github.io/csb-0gu5x/",
  "neoG-markEight": "iharryd.github.io/csb-w3jt5/",
};

// Event Listener

hamburgerNav.addEventListener("click", openPhoneNav);
crossNav.addEventListener("click", closePhoneNav);

// Functions

function openPhoneNav() {
  navBar.style.transform = "translateX(0)";
  document.body.classList.add("overlay");
}

function closePhoneNav() {
  navBar.style.transform = "translateX(100%)";
  document.body.classList.remove("overlay");
}

navItems.forEach((item) => {
  if (item.href === location.href) {
    item.classList.toggle("active");
  }
});

fetch(gitReposAPI)
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    json.forEach((repos) => {
      let repoName = repos["name"];
      let repoDescription = repos["description"];
      let repoCreatedDate = repos["created_at"].substring(0, 10);
      let repoCodeLink = repos["html_url"];
      let repoLiveSite = "";
      if (Object.keys(projectLiveLinks).includes(repoName, 0)) {
        repoLiveSite = projectLiveLinks[repoName];
      } else {
        repoLiveSite = `${gitUsername}.github.io/${repoName}`;
      }
      createProject(
        repoName,
        repoDescription,
        repoCreatedDate,
        repoCodeLink,
        repoLiveSite
      );
    });
  });

function createProject(
  repoName,
  repoDescription,
  repoCreatedDate,
  repoCodeLink,
  repoLiveSite
) {
  let project = document.createElement("div");
  project.classList.add("projects");
  let projectHeading = document.createElement("h3");
  projectHeading.classList.add("project-heading");
  projectHeading.innerText = repoName;
  let projectDescription = document.createElement("p");
  projectDescription.classList.add("project-description");
  projectDescription.innerText = repoDescription;
  let projectDate = document.createElement("span");
  projectDate.classList.add("project-date");
  projectDate.innerText = `Created on: ${repoCreatedDate}`;
  let projectButtonsDiv = document.createElement("div");
  projectButtonsDiv.classList.add("project-buttons-div");
  let projectCodeButton = document.createElement("button");
  projectCodeButton.classList.add("project-view-code-btn");
  projectCodeButton.innerText = "View Code";
  projectCodeButton.setAttribute("onclick", `location.href='${repoCodeLink}'`);
  let projectLiveButton = document.createElement("button");
  projectLiveButton.classList.add("project-show-live-site-btn");
  projectLiveButton.innerText = "Live Site";
  projectLiveButton.setAttribute(
    "onclick",
    `location.href='http://${repoLiveSite}'`
  );
  projectButtonsDiv.appendChild(projectCodeButton);
  projectButtonsDiv.appendChild(projectLiveButton);
  project.appendChild(projectHeading);
  project.appendChild(projectDescription);
  project.appendChild(projectDate);
  project.appendChild(projectButtonsDiv);
  projectsMenu.appendChild(project);
  if (repoName.slice(0, 3) === "csb" || repoName === "portfolio") {
    project.classList.add("project-hide");
  }
}

{
  let dynamicIntroWords = ["Harry,", "Prashant,"];
  let dynamicIntroCount = 0;
  let dynamicIntroIndex = 0;
  let dynamicIntroCurrentWord = "";
  let dynamicIntroCurrentLetter = "";
  (function typingEffect() {
    if (dynamicIntroCount === dynamicIntroWords.length) {
      dynamicIntroCount = 0;
    }

    dynamicIntroCurrentWord = dynamicIntroWords[dynamicIntroCount];
    dynamicIntroCurrentLetter = dynamicIntroCurrentWord.slice(
      0,
      ++dynamicIntroIndex
    );

    document.querySelector(".intro-names").innerText =
      dynamicIntroCurrentLetter;
    if (dynamicIntroCurrentLetter.length === dynamicIntroCurrentWord.length) {
      dynamicIntroCount++;
      dynamicIntroIndex = 0;
    }

    setTimeout(typingEffect, 500);
  })();
}
