
const getReposGithub = async () => {
  const username = process.env.GITHUB_USERNAME || "takenet";
  const url = `https://api.github.com/users/${username}/repos?sort=created&direction=asc`;
  const accessToken = process.env.ACCESS_TOKEN;
  const maxRepos = 5;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await response.json();

    const csharpRepos = data.filter((repo) => repo.language === "C#");
    const oldestFiveCsharpRepos = csharpRepos.slice(0, maxRepos);

    return oldestFiveCsharpRepos;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};

module.exports = getReposGithub;
