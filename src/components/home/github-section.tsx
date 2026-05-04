import { getGithubStats } from "@/src/lib/github-stats";
import GithubCalender from "../github-calender";

export const revalidate = 3600; // Revalidate every hour

const GithubSection = async () => {
  const data = await getGithubStats();

  if (!data) {
    return null;
  }

  return <GithubCalender data={data} />;
};

export default GithubSection;
