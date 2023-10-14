// Function to fetch JSON data from a file
function fetchData() {
  fetch("info.json") // Specify the path to your JSON file
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      var information = data;
      elems = document.getElementsByClassName("styled-table");

      function sortby(a, b) {
        console.log(a["# of Skill Badges Completed"]);
        console.log(b["# of Skill Badges Completed"]);
        var val = (- (a["# of Skill Badges Completed"] + a["# of Courses Completed"] + a["# of GenAI Game Completed"]) + (b["# of Skill Badges Completed"] + b["# of Courses Completed"] + b["# of GenAI Game Completed"]));
        return val;
      }
      // sorting
      information = information.sort(sortby);

      information = information.filter(prod => (prod["Redemption Status"] == "Yes" || prod["Student Name"] == "SIDDHARTHA PATRA"));

      console.log(information);

      for (i = 0; i < elems.length; i++) {
        for (j = 0; j < information.length; j++) {
          elem = elems[i];
          tr = document.createElement("tr");
          td0 = document.createElement("td");
          td1 = document.createElement("td");
          td2 = document.createElement("td");
          td3 = document.createElement("td");
          td4 = document.createElement("td");
          td5 = document.createElement("td");
          td6 = document.createElement("td");
          // td7 = document.createElement("td");
          td0.textContent = j + 1;
          tr.appendChild(td0);
          td1.textContent = information[j]["Student Name"];
          tr.appendChild(td1);
          td2.textContent = information[j]["Enrolment Status"];
          tr.appendChild(td2);
          td3.textContent = information[j]["# of Courses Completed"];
          tr.appendChild(td3);
          td4.textContent = information[j]["# of Skill Badges Completed"];
          tr.appendChild(td4);
          td5.textContent = information[j]["# of GenAI Game Completed"];
          tr.appendChild(td5);
          td6.textContent = information[j]["Total Completions of both Pathways"];
          tr.appendChild(td6);
          // td7.textContent = information[j]["Redemption Status"];
          // tr.appendChild(td7);
          elem.appendChild(tr);
        }
      }
    })
    .catch((error) => {
      console.error("There was a problem fetching or displaying data:", error);
    });
}

// Call the fetchData function when the page loads
window.addEventListener("load", fetchData);


const start = () => {
  setTimeout(function () {
    confetti.start()
  }, 1000); // 1000 is time that after 1 second start the confetti ( 1000 = 1 sec)
};

//  for stopping the confetti 

const stop = () => {
  setTimeout(function () {
    confetti.stop()
  }, 5000); // 5000 is time that after 5 second stop the confetti ( 5000 = 5 sec)
};

// after this here we are calling both the function so it works
start();
stop();


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
