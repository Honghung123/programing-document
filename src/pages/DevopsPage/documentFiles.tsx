import { beautifulHTMLFromMDFile } from "./../../utils/StringUtility";
// MD files
import cicdMD from "@/assets/devops_MDfiles/cicd.md";
import github_actionMD from "@/assets/devops_MDfiles/github_action.md";

export const documentFiles = [
    {
        name: "CI / CD",
        extension: "md",
        fullName: "cicd.md",
        content: beautifulHTMLFromMDFile(cicdMD),
    },
    {
        name: "Github Action",
        extension: "md",
        fullName: "github_action.md",
        content: beautifulHTMLFromMDFile(github_actionMD),
    },
];
