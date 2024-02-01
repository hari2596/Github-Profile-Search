
class GitHub {
    async getUserDetails(username) {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();
        this.createUserCard(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    }
  
    createUserCard(userData) {
      const main = document.getElementById('main');
      main.innerHTML = '';
  
      const card = document.createElement('div');
      card.classList.add('card');
  
      const avatar = document.createElement('img');
      avatar.src = userData.avatar_url;
      avatar.alt = 'Avatar';
      avatar.classList.add('avatar');
  
      const userInfo = document.createElement('div');
      userInfo.classList.add('user-info');
  
      const name = document.createElement('h2');
      name.textContent = userData.name || 'No Name';
  
      const userInfoSecondRow = document.createElement('div');
      userInfoSecondRow.classList.add('user-info');
  
      const bio = document.createElement('p');
      bio.textContent = userData.bio || 'No bio available';
  
      const followers = document.createElement('p');
      followers.textContent = `Followers: ${userData.followers}`;
  
      const following = document.createElement('p');
      following.textContent = `Following: ${userData.following}`;
  
      const userInfoThirdRow = document.createElement('div');
      userInfoThirdRow.classList.add('user-info');
  
      const repos = document.createElement('p');
      repos.textContent = `Repositories: ${userData.public_repos}`;
  
      const twitter = document.createElement('p');
      twitter.textContent = `Twitter: ${userData.twitter_username || 'Not available'}`;
  
      const location = document.createElement('p');
      location.textContent = `Location: ${userData.location || 'Not available'}`;
  
      userInfo.appendChild(name);
      userInfoSecondRow.appendChild(bio);
      userInfoSecondRow.appendChild(followers);
      userInfoSecondRow.appendChild(following);
      userInfoThirdRow.appendChild(repos);
      userInfoThirdRow.appendChild(twitter);
      userInfoThirdRow.appendChild(location);
  
      card.appendChild(avatar);
      card.appendChild(userInfo);
      card.appendChild(userInfoSecondRow);
      card.appendChild(userInfoThirdRow);
  
      main.appendChild(card);
    }
  }
  
  // Initialize with a default GitHub username (you can replace it with your own GitHub username)
  const defaultUsername = 'your-github-username';
  const github = new GitHub();
  github.getUserDetails(defaultUsername);
  
  // Listen for the 'Enter' key press
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      const username = document.getElementById('search').value;
      github.getUserDetails(username);
    }
  });
  