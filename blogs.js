// Variables

const searchFilterBlog = document.getElementById("search-blog");

// Event Listeners

searchFilterBlog.addEventListener("keyup", searchingBlogs);

// Functions

function searchingBlogs() {
  let searchKey = event.target.value;
  searchKey = searchKey.toLowerCase();
  let allCurrentBlogsHeadings = document.querySelectorAll(".blog-heading");
  allCurrentBlogsHeadings.forEach((heading) => {
    let headingText = heading.innerText.toLowerCase();
    if (headingText.includes(searchKey)) {
      heading.parentElement.classList.remove("search-hide");
    } else {
      heading.parentElement.classList.add("search-hide");
    }
  });
}
