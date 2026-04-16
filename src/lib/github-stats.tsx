export async function getGithubStats() {
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          user(login: "Ammu108") {
            contributionsCollection {
              contributionCalendar {    
                totalContributions
                weeks {
                  contributionDays {
                    date
                    contributionCount
                    color
                  }
                }
              }
            }
          }
        }
      `,
    }),
  });

  const json = await res.json();
  return json.data.user.contributionsCollection.contributionCalendar;
}
