fetch('https://api.github.com/users/anwarisak')
  .then(response => response.json())
  .then(data => {
    // Process the data here
    //console 
    console.log(data.name);
    console.log(data);

    // Create an img element
    const img = document.createElement('img');
    img.src = data.avatar_url;
    img.style.width = '300px';
    img.title = data.name;
    // Append the img element to a container in your HTML file
    const container = document.getElementById('image-container');
    const name = document.getElementById('name-container');
    const followers = document.getElementById('followers-container');
    const following = document.getElementById('following-container');
    const repo = document.getElementById('repos-container');
    const bio = document.getElementById('bio-container');
    const location = document.getElementById('location-container');
    const btn = document.getElementById('btn');

    btn.addEventListener('click', function() {
      window.open(data.html_url);
      
    });

    container.appendChild(img);
    name.innerHTML = data.name;
    followers.innerHTML = `Followers: ${data.followers}`;
    following.innerHTML = `Following: ${data.following}`;
    repo.innerHTML = `Repos: ${data.public_repos}`;
    location.innerHTML = `Location: ${data.location}`;
    bio.innerHTML = `Bio: ${data.bio}`;


  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });

