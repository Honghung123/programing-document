import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TagList from "../../components/TagList";
import { stringToArray, mdToHtmlWithConverter } from "../../utils/StringUtility";
import "./index.css";

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
        import(filePath)
            .then((res) => {
                fetch(res.default)
                    .then((res) => res.text())
                    .then(async (res) => setFileContent(await mdToHtmlWithConverter(res)))
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
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
                    <div dangerouslySetInnerHTML={{ __html: fileContent }} />
                </div>
            </div>
        </div>
    );
}
