const data = [
  {
    name: "John Black",
    age: 32,
    gender: "male",
    lookingfor: "female",
    location: "Manhattan, NY",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Kate White",
    age: 23,
    gender: "female",
    lookingfor: "male",
    location: "Miami, FL",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Matt Koviskov",
    age: 43,
    gender: "male",
    lookingfor: "female",
    location: "Cedar Grove, NJ",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const profiles = profileIterator(data);

// call first profile
nextProfile();

// Next Event
document.querySelector("#next").addEventListener("click", nextProfile);

// Next Profile
function nextProfile() {
  const profile = profiles.next().value;

  if (profile != undefined) {
    document.querySelector("#profileDisplay").innerHTML = `
  <ul class="list-group">
    <li class="list-group-item">Name: ${profile.name}</li>
    <li class="list-group-item">Age: ${profile.age}</li>
    <li class="list-group-item">Location: ${profile.location}</li>
    <li class="list-group-item">Preference: ${profile.gender} looking for ${profile.lookingfor}</li>
  </ul>
  `;

    document.querySelector(
      "#imageDisplay"
    ).innerHTML = `<img src=${profile.image}>`;
  } else {
    // when all the profiles ended then the whole page is loaded again to start all over.
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
