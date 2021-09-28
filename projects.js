// Variables

const projectsMenu = document.getElementById("projects-menu");
const gitUsername = "iHarryD";
const gitReposAPI = `https://api.github.com/users/${gitUsername}/repos`;
const searchFilterProject = document.getElementById("search-pr");

const projectLiveLinks = {
  "neoG-markOne": "replit.com/@iHarryD/neoG-markOne#index.js",
  "neoG-markTwo": "replit.com/@iHarryD/neoG-markTwo#index.js",
  "neoG-markNine": "iharryd.github.io/csb-0gu5x/",
  "neoG-markEight": "iharryd.github.io/csb-w3jt5/",
};

// Event Listeners
searchFilterProject.addEventListener("keyup", searchingProjects);

// Getting data from API

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

// Functions

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
  if (repoName.slice(0, 3) === "csb" || repoName === "portfolio") {
    project.classList.add("project-hide");
  }
  projectsMenu.appendChild(project);
}

function searchingProjects() {
  let searchKey = event.target.value;
  searchKey = searchKey.toLowerCase();
  let allCurrentProjectsHeadings =
    document.querySelectorAll(".project-heading");
  allCurrentProjectsHeadings.forEach((heading) => {
    let headingText = heading.innerText.toLowerCase();
    if (headingText.includes(searchKey)) {
      heading.parentElement.classList.remove("search-hide");
    } else {
      heading.parentElement.classList.add("search-hide");
    }
  });
}
