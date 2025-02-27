import { beautifulHTMLFromMDFile } from "../../utils/StringUtility";
// MD files
import javascriptMD from "../../assets/MDfiles/javascript.md";
import typescriptMD from "../../assets/MDfiles/typescript.md";
import csharpMD from "../../assets/MDfiles/c_sharp.md";
import javaMD from "../../assets/MDfiles/java.md";
import designPatternsMD from "../../assets/MDfiles/design_patterns.md";
import sqlNoSqlMD from "../../assets/MDfiles/sql_nosql.md";
import message_queueMD from "../../assets/MDfiles/message_queue.md";

export const documentFiles = [
    {
        name: "java",
        extension: "md",
        fullName: "java.md",
        content: beautifulHTMLFromMDFile(javaMD),
    },
    {
        name: "design patterns",
        extension: "md",
        fullName: "design_patterns.md",
        content: beautifulHTMLFromMDFile(designPatternsMD),
    },
    {
        name: "sql-nosql",
        extension: "md",
        fullName: "sql_nosql.md",
        content: beautifulHTMLFromMDFile(sqlNoSqlMD),
    },
    {
        name: "message queue",
        extension: "md",
        fullName: "message_queue.md",
        content: beautifulHTMLFromMDFile(message_queueMD),
    },
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
