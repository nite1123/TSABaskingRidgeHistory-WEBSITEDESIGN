const timelineData = [
  {
    title: "Early Farms",
    text: "Before Basking Ridge became a busier town, a lot of the land was used for farming and open space. Families worked close to the land, and they depended on neighbors to get things done. This older farm life is still important because it shows where the town started and how people lived before modern growth."
  },
  {
    title: "Small Town Life",
    text: "As roads, homes, and small businesses grew, the town started to feel more connected. People had places to meet, talk, shop, and share news. That kind of everyday life helped build the culture of Basking Ridge because the community stayed close and active."
  },
  {
    title: "Schools Grow",
    text: "Schools became one of the biggest parts of the community. Students, teachers, and families all helped make the town stronger. School events, sports, and activities gave people a reason to come together and feel proud of where they lived."
  },
  {
    title: "Today",
    text: "Today, Basking Ridge still keeps pieces of its older past while also looking like a modern town. You can see old ideas mixed with new homes, roads, and places people use every day. That mix is a big part of the town's culture because it shows growth without losing history."
  }
];

const placeFacts = {
  downtown: {
    title: "Downtown Basking Ridge",
    text: "Downtown is one of the best places to see the town's personality. People walk there, meet there, and use it as a main community spot. It shows how Basking Ridge mixes daily life with a small-town feeling."
  },
  school: {
    title: "School Area",
    text: "The school area is important because students are part of the town's future and also part of its story. Schools bring together classes, clubs, sports, and events. That makes them a big part of local culture and community pride."
  },
  park: {
    title: "Park Area",
    text: "Parks matter because they give people a place to relax and have fun outside. Families, kids, and neighbors all use them in different ways. They help the town feel open, active, and friendly."
  },
  church: {
    title: "Church Area",
    text: "Churches are part of the older history of the area and helped people gather long ago. They were places for meetings, news, and community support. That makes them an important part of the town's past and culture."
  },
  station: {
    title: "Station Area",
    text: "The station area connects Basking Ridge to places outside the town. It helps people travel for school, work, and trips. That connection makes the town feel tied to both local life and the bigger world."
  }
};

const qaAnswers = [
  {
    match: "what made basking ridge grow",
    answer: "In 1872, the construction of the railroad allowed residents to commute to nearby cities. Later, the arrival of large corporate headquarters brought many new families and led to the building of modern housing developments."
  },
  {
    match: "how did farms shape the town",
    answer: "The town was originally used for agriculture. Many current neighborhoods sit on the exact locations of previous farm plots. The town still protects specific areas of open land to maintain its original rural appearance."
  },
  {
    match: "why are schools important here",
    answer: "Education is a high priority for the people living in this community. Having a strong school system attracts many new residents and helps ensure that the town remains a popular place for families to live."
  },
  {
    match: "what is special about downtown",
    answer: "The center of town contains buildings from the 1700s, including the historic Presbyterian Church. This area allows people to walk between businesses and see physical examples of the long history of the local region."
  },
  {
    match: "how do parks help the community",
    answer: "The town provides many outdoor spaces for people to use for exercise and social gatherings. These areas are important because they offer room for recreation and protect the natural environment from being completely developed."
  },
  {
    match: "what older places still matter today",
    answer: "The Brick Academy and the Presbyterian Church are important because they are still used for public events. These locations serve as educational centers that help people learn about local life during the American Revolutionary War."
  },
  {
    match: "how did people stay connected in the past",
    answer: "Before modern technology, people communicated by meeting at local general stores and taverns. These physical locations were the primary places where residents discussed politics, shared news with neighbors, and organized various community activities and events."
  },
  {
    match: "what makes the town feel both old and new",
    answer: "Homes from the 1700s are located next to modern houses and businesses. This combination shows that the town maintains its original structures while also building new facilities to meet the current needs of the residents."
  },
  {
    match: "why does history matter in this town",
    answer: "History is important because it explains how the community developed into its current form. Studying the past helps residents understand their local heritage and helps the government make better decisions about future construction and preservation."
  },
  {
    match: "how do local places show community culture",
    answer: "Events like Charter Day take place in the historic center of the town. By holding festivals in these specific locations, residents continue traditions that have been part of the local culture for many years."
  }
];

const prompts = [
  "What made Basking Ridge grow?",
  "How did farms shape the town?",
  "Why are schools important here?",
  "What is special about downtown?",
  "How do parks help the community?",
  "What older places still matter today?",
  "How did people stay connected in the past?",
  "What makes the town feel both old and new?",
  "Why does history matter in this town?",
  "How do local places show community culture?"
];

function loadTimeline() {
  const timeline = document.getElementById("timeline");
  const timelineText = document.getElementById("timelineText");
  if (!timeline || !timelineText) return;

  timeline.innerHTML = "";
  timelineData.forEach((item) => {
    const box = document.createElement("button");
    box.className = "btn timelineItem";
    box.innerHTML = "<strong>" + item.title + "</strong><br><br>" + item.text;
    box.addEventListener("click", () => {
      timelineText.innerHTML = "<strong>" + item.title + ":</strong><br>" + item.text;
    });
    timeline.appendChild(box);
  });
}

function loadMap() {
  const mapDetails = document.getElementById("mapDetails");
  if (!mapDetails) return;

  document.querySelectorAll("[data-place]").forEach((el) => {
    el.addEventListener("click", () => {
      const key = el.dataset.place;
      const place = placeFacts[key];
      if (!place) return;
      mapDetails.innerHTML = "<h3 class='summaryTitle'>" + place.title + "</h3><p class='small'>" + place.text + "</p>";
    });
  });
}

function loadQA() {
  const questionInput = document.getElementById("questionInput");
  const askBtn = document.getElementById("askBtn");
  const answerText = document.getElementById("answerText");
  const promptList = document.getElementById("promptList");
  if (!questionInput || !askBtn || !answerText || !promptList) return;

  promptList.innerHTML = "";
  prompts.forEach((prompt) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "promptChip";
    chip.textContent = prompt;
    chip.addEventListener("click", () => {
      questionInput.value = prompt;
      questionInput.focus();
    });
    promptList.appendChild(chip);
  });

  askBtn.addEventListener("click", () => {
    const q = questionInput.value.toLowerCase().trim();
    let answer = "Try asking one of the prompts above.";

    for (const item of qaAnswers) {
      if (q.includes(item.match.toLowerCase())) {
        answer = item.answer;
        break;
      }
    }

    answerText.textContent = answer;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadTimeline();
  loadMap();
  loadQA();
});
