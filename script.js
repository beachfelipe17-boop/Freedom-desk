// ===============================
// EDIT YOUR WEBSITE HERE
// ===============================
// To add a story, copy one of these objects,
// change the title/category/text, and save.
//
// category must be: Latest, Politics, Kentucky, or Opinion.

const stories = [
  {
    category: "Latest",
    title: "Your first Freedom Desk story",
    text: "Replace this with your latest headline and a short description of the story."
  },
  {
    category: "Politics",
    title: "Politics story goes here",
    text: "Add your political news, reporting, or commentary here."
  },
  {
    category: "Kentucky",
    title: "Kentucky story goes here",
    text: "Cover Kentucky, Ashland, Boyd County, or other local stories here."
  },
  {
    category: "Opinion",
    title: "Your opinion goes here",
    text: "Use this section for clearly labeled opinion and commentary."
  }
];

function makeCard(story){
  return `
    <article class="card">
      <div class="card-img">THE FREEDOM DESK</div>
      <div class="card-body">
        <div class="tag">${story.category.toUpperCase()}</div>
        <h3>${story.title}</h3>
        <p>${story.text}</p>
      </div>
    </article>`;
}

function fill(id, category){
  const items = stories.filter(s => s.category === category);
  document.getElementById(id).innerHTML =
    items.length ? items.map(makeCard).join("") : "<p>No stories yet.</p>";
}

fill("latest-grid","Latest");
fill("politics-grid","Politics");
fill("kentucky-grid","Kentucky");
fill("opinion-grid","Opinion");
