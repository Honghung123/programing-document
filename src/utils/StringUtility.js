import { Octokit } from "@octokit/core";
const octokit = new Octokit({
    auth: import.meta.env.VITE_GIT_PREFIX + import.meta.env.VITE_GIT_AT + import.meta.env.VITE_GIT_POSTFIX,
});

export const stringToArray = (string) => {
    return string.split(",").map((item) => {
        return item.trim();
    });
};

export const mdToHtmlWithConverter = async (md) => {
    const response = await octokit.request("POST /markdown", {
        text: md,
        headers: {
            "X-GitHub-Api-Version": "2022-11-28",
        },
    });
    return response.data;
};
