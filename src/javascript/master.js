/* eslint-disable no-undef */
async function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/carloscunha611`

  const response = await fetch(url)
  const data = await response.json()

  userImage.src = data.avatar_url
}

getGitHubProfileInfos()
