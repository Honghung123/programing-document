import { beautifulHTMLFromMDFile } from "../../utils/StringUtility";
// MD files
import cicdMD from "../../assets/MDfiles/cicd.md";

export const documentFiles = [
    {
        name: "CI / CD",
        extension: "md",
        fullName: "cicd.md",
        content: beautifulHTMLFromMDFile(cicdMD),
    },
];
