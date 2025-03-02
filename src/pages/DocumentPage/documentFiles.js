import { beautifulHTMLFromMDFile } from "../../utils/StringUtility";
// MD files
import javascriptMD from "../../assets/MDfiles/javascript.md";
import typescriptMD from "../../assets/MDfiles/typescript.md";
import csharpMD from "../../assets/MDfiles/c_sharp.md";
import javaMD from "../../assets/MDfiles/java.md";
import architectureMD from "../../assets/MDfiles/architecture.md";
import designPatternsMD from "../../assets/MDfiles/design_patterns.md";
import sqlNoSqlMD from "../../assets/MDfiles/sql_nosql.md";
import message_queueMD from "../../assets/MDfiles/message_queue.md";
import dsaMD from "../../assets/MDfiles/algorithm.md";
import resolveDsaMD from "../../assets/MDfiles/common_dsa_resolve.md";
import javaCollectionMD from "../../assets/MDfiles/java_collection.md";
import javaFeatureMD from "../../assets/MDfiles/java_feature.md";

export const documentFiles = [
    {
        name: "java",
        extension: "md",
        fullName: "java.md",
        content: beautifulHTMLFromMDFile(javaMD),
    },
    {
        name: "java feature",
        extension: "md",
        fullName: "java_feature.md",
        content: beautifulHTMLFromMDFile(javaFeatureMD),
    },
    {
        name: "java collection",
        extension: "md",
        fullName: "java_collection.md",
        content: beautifulHTMLFromMDFile(javaCollectionMD),
    },
    {
        name: "DSA",
        extension: "md",
        fullName: "dsa.md",
        content: beautifulHTMLFromMDFile(dsaMD),
    },
    {
        name: "resolve DSA",
        extension: "md",
        fullName: "common_dsa_resolve.md",
        content: beautifulHTMLFromMDFile(resolveDsaMD),
    },
    {
        name: "architecture",
        extension: "md",
        fullName: "architecture.md",
        content: beautifulHTMLFromMDFile(architectureMD),
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
