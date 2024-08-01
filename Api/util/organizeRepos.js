const getReposGithub = require("../service/getReposGithub");

const organizeRepos = async () => {
  const repos = await getReposGithub();

  if (!repos || repos.error) {
    return {};
  }

  const avatar_url = repos.length > 0 ? repos[0].owner.avatar_url : null;

  const organizedData = repos.reduce((acc, repo, index) => {
    acc[`repo${index + 1}`] = {
      name: repo.full_name,
      description: repo.description,
    };
    return acc;
  }, {});

  return {
    avatar_url,
    ...organizedData,
  };
};

module.exports = organizeRepos;
