import { beautifulHTMLFromMDFile } from "../../utils/StringUtility";
// MD files
import javascriptMD from "../../assets/MDfiles/javascript.md";
import typescriptMD from "../../assets/MDfiles/typescript.md";
import csharpMD from "../../assets/MDfiles/c_sharp.md";

export const documentFiles = [
    {
        name: "c#",
        extension: "md",
        fullName: "c#.md",
        content: beautifulHTMLFromMDFile(csharpMD),
    },
    {
        name: "javascript",
        extension: "md",
        fullName: "javascript.md",
        content: beautifulHTMLFromMDFile(javascriptMD),
    },
    {
        name: "typescript",
        extension: "md",
        fullName: "typescript.md",
        content: beautifulHTMLFromMDFile(typescriptMD),
    },
];
