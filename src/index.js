function createBlog(event) {
  event.preventDefault();

  new Typewriter("#content", {
    strings: "working on your blog - please wait a moment ...",
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}

let blogMaker = document.querySelector("#blog-creator");
blogMaker.addEventListener("submit", createBlog);
