function openPopup(courseCode) {
  var title = document.getElementById("popup-title");
  var description = document.getElementById("popup-description");
  if (courseCode === "CSC574") {
      title.textContent = "CSC574 - Dynamic Web Application Development";
      description.textContent = "_____________________\n Tuesday -  4.00pm - 6:00pm (online) \n Wednesday, 8.00am - 10:00am (online) ";
      description.style.whiteSpace = "pre-wrap";
  }
  else if (courseCode === "ITT569") {
      title.textContent = "ITT569 - Internet of thing";
      description.textContent = "_____________________\n Monday- 8.00am - 10.00am (online) \n Tuesday- Thursday, 8.00am - 10.00am (MK18) ";
      description.style.whiteSpace = "pre-wrap";
  }
  else if (courseCode === "ELC550") {
      title.textContent = "ELC550 - English for academic writing";
      description.textContent = "_____________________\n Monday - 10.00am - 12:00pm (BK30)";
      description.style.whiteSpace = "pre-wrap";
  }
  else if (courseCode === "ITS462") {
      title.textContent = "ITS462 - Fundamental of Artificial Intelligence";
      description.textContent = "_____________________\n Monday- 4.00pm - 6:00pm (online) \n Tuesday- 8:00am - 10:00am (BK33) ";
      description.style.whiteSpace = "pre-wrap";
  }
  else if (courseCode === "ITT557") {
      title.textContent = "ITT557 - Web Application Security";
      description.textContent = "_____________________\n Thursday - 2.00pm - 4:00pm (online) \n Friday - 10:00am - 12:00pm (BK30)";
      description.style.whiteSpace = "pre-wrap";
  }
  else if (courseCode === "ITT588") {
      title.textContent = "ITT588 - Front-end Technology";
      description.textContent = "_____________________\n Tuesday -  10.00am - 12:00pm (MK17) \n Wednesday - 2:00pm - 4:00pm (online)";
      description.style.whiteSpace = "pre-wrap";
  }
  else if (courseCode === "CST2MH") {
      title.textContent = "CST2MH - Introductory Mandarin (Level II)";
      description.textContent = "_____________________\n Tuesday - 2.00pm - 4:00pm (BK30)";
      description.style.whiteSpace = "pre-wrap";
  }

  var popup = document.getElementById("popup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
