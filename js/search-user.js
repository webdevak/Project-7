// Filter through members from message user section searchbar

// --Object literal---
const members = [
  { name: "shannon brown" },
  { name: "james sullivan" },
  { name: "victoria chambers" },
  { name: "elliot ali" },
];

const searchBar = document.getElementById("input");
const suggestionNames = document.querySelector(".suggestions");

searchBar.addEventListener("keyup", (e) =>  {
    const element = e.target;
  const input = searchBar.value;
  const suggestions = members.filter(function (member) {
    return member.name.toLowerCase().startsWith(input);
  });
  suggestions.forEach(function (suggestions) {
    const div = document.createElement("div");
    div.innerHTML = suggestions.name;
    suggestionNames.appendChild(div);
  });
    if (input === "") {
      suggestionNames.innerHTML = "";
    } else if ( input === suggestions) {
        suggestionNames.innerHTML = "";
    }
});



// div.on('click', 'suggestions div' function() {

//   searchBar.value.div.textContent;

// };



// assign a click event handler that sets the .value of the input to the name.
