/*
====================================================
       THE FREEDOM DESK — STORIES
====================================================

To add a new story:

1. Copy one of the story blocks below.
2. Paste it ABOVE the other stories.
3. Change the title.
4. Change the date.
5. Change the description.
6. Put the article link in "link".

Example:

{
  title: "My New Story",
  date: "September 1, 2026",
  description: "This is what the story is about.",
  link: "https://example.com"
}

====================================================
*/


const stories = [

  /* ===== STORY 1 ===== */

  {
    title: "Welcome to The Freedom Desk",
    date: "August 31, 2026",
    description:
      "Welcome to the new home of The Freedom Desk. Check back here for the latest stories, updates, and conversations.",
    link: "#"
  },


  /* ===== STORY 2 ===== */

  {
    title: "Your First Story Goes Here",
    date: "September 1, 2026",
    description:
      "Replace this story with your first real news story.",
    link: "#"
  }

];



/*
====================================================
       DON'T EDIT BELOW THIS LINE
====================================================
*/

const storyContainer = document.getElementById("stories");


storyContainer.innerHTML = stories.map(story => {

  return `

    <article class="story-card">

      <div class="story-date">
        ${story.date}
      </div>

      <h3>
        ${story.title}
      </h3>

      <p>
        ${story.description}
      </p>

      ${
        story.link !== "#"
        ?
        `<a href="${story.link}" target="_blank">
          Read More →
        </a>`
        :
        ""
      }

    </article>

  `;

}).join("");
