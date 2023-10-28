const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
  {
    text: "New fact",
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// console.log(CATEGORIES.find((cat) => cat.name === "society").color);

const btnOpenForm = document.querySelector(".btn-open-form");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

// Load data from Supabase

loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://fwbckrgmtiasjmjcrqkp.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3YmNrcmdtdGlhc2ptamNycWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMjk0MTgsImV4cCI6MTk5NDgwNTQxOH0.sZD6tcB8NtzIDx7Y1OAXwCff-yZ2OtI6PSWOrTbGLYk",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3YmNrcmdtdGlhc2ptamNycWtwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkyMjk0MTgsImV4cCI6MTk5NDgwNTQxOH0.sZD6tcB8NtzIDx7Y1OAXwCff-yZ2OtI6PSWOrTbGLYk",
      },
    }
  );

  const data = await res.json();

  // const filteredData = data.filter((fact) => fact.category === "society");

  createFactsList(data);
}

// factsList.insertAdjacentHTML("afterbegin", "htmlArr");

// createFactsList(initialFacts);

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
    <p>
      ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
        >(Source)</a
      >
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }" ;
      >${fact.category}</span
    >
    
  </li>`
  );

  html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}

btnOpenForm.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btnOpenForm.textContent = "close";
  } else {
    form.classList.add("hidden");
    btnOpenForm.textContent = "Share A Fact";
  }
});

let votesIntresting = 23;
let votesMindBlowing = 5;

// const text = "Lisbon is the capital of portugal";
// votesIntresting = votesIntresting + 1;
// votesIntresting++;

// console.log(votesIntresting);
// let totalUpVotes = votesIntresting + votesMindBlowing;
// console.log("upVotes:", totalUpVotes);

// votesFalse = 4;
// let isCorrect = totalUpVotes > votesFalse;
// console.log(isCorrect);

// function calcFactAge(year) {
//   let currentYear = new Date().getFullYear();

//   const age = currentYear - year;

//   if (age >= 0) return age;
//   else return "Impossible Year";
// }

// let age1 = calcFactAge(2015);
// let age2 = calcFactAge(2033);

// const message = totalUpVotes > votes;
