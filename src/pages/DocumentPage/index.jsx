import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TagList from "../../components/TagList";
import { stringToArray, mdToHtmlWithConverter } from "../../utils/StringUtility";
import "./index.css";
import javascriptMD, { attributes } from "../../assets/MDfiles/javascript.md";

const resolveFile = (currentDocName, files) => {
    if (!currentDocName || !currentDocName.length) {
        return files[0];
    }
    const targetFile = files.find((file) => file.name === currentDocName);
    return targetFile || files[0];
};
const mdFolderPath = "../../assets/MDfiles";
const documentFiles = stringToArray(import.meta.env.VITE_DOCUMENT_FILES).map((f) => {
    const [name, extension] = f.split(".");
    return {
        name,
        extension,
        fullName: `${name}.${extension}`,
    };
});

export default function DocumentPage() {
    const [searchParams] = useSearchParams();
    const currentDocFile = resolveFile(searchParams.get("doc"), documentFiles);
    const [docFile, setDocFile] = useState(currentDocFile);
    const [fileContent, setFileContent] = useState("");
    useEffect(() => {
        const filePath = `${mdFolderPath}/${docFile.fullName}`;
        async function fetchData(path) {
            try {
                const module = await import(path);
                const response = await fetch(module.default);
                const text = await response.text();
                const htmlContent = await mdToHtmlWithConverter(text);
                setFileContent(htmlContent);
            } catch (err) {
                console.log(err);
            }
        }
        // fetchData(filePath);
    }, [docFile]);

    const handleClick = (file) => {
        setDocFile({ ...file });
    };
    return (
        <div className="container m-auto">
            <div className="p-2 mx-12">
                <h1 className="text-3xl font-bold text-center py-4">My Document</h1>
                <TagList fileList={documentFiles} handleClick={handleClick} />
            </div>
            <hr />
            <div className="py-2">
                <p className="text-3xl font-bold text-center py-2 first-letter:capitalize text-gradient">
                    {docFile.name}
                </p>
                <div className="wrapper document-content py-2">
                    <div dangerouslySetInnerHTML={{ __html: javascriptMD }} />
                </div>
            </div>
        </div>
    );
}
