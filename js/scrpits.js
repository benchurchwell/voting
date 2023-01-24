window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let voting_Age = document.getElementById("votingAge");
    voting_Age.setAttribute("class", "hidden");
    let under_Age = document.getElementById("underAge");
    under_Age.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);

    if (age > 18) {  // updated to check if age is greater than 21
      voting_Age.removeAttribute("class");
    } else if (age === 18) { // new else if statement
      window.alert("Have some fun, you’re just 18!");
      voting_Age.removeAttribute("class");
    } else {
      under_Age.removeAttribute("class");
    }
  };
};