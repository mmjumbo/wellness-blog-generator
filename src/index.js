function displayBlog(response) {
  new Typewriter("#content", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

function createBlog(event) {
  event.preventDefault();
  let instruction = document.querySelector("#instruction");
  let apiKey = "oa224383a3fb04434bf1df50f107516t";
  let prompt = `Generate a blog that is around employee wellbeing with a specific focus on ${instruction.value}.`;
  let context = `Devise strategies that will support employees in the space of ${instruction.value}. The blog should be structured well. Do not add any type of welcome message at the start. Just go straight to generating content on ${instruction.value}. Use <ol> for numbered elements. The content should be written directly for employees (and not for someone who will be helping employees). Title should be in separate line <h3>. Use clear and defined paragraphs <p> when appropriate. `;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let blogElement = document.querySelector("#content");
  blogElement.classList.remove("hidden");
  blogElement.innerHTML = ` <div class="generating">  ⏳ Generating your wellness blog about ${instruction.value} </div>`;
  axios.get(apiUrl).then(displayBlog);
}

let blogMaker = document.querySelector("#blog-creator");
blogMaker.addEventListener("submit", createBlog);
