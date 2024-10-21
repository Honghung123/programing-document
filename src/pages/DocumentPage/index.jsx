import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import TagList from "../../components/TagList";
import "./index.css";
import { documentFiles } from "./documentFiles";
import HeadToTop from "../../components/HeadToTop";

const resolveFile = (currentDocName, files) => {
    let targetFile = null;
    if (currentDocName && currentDocName.length > 0) {
        targetFile = files.find((file) => file.name === currentDocName);
    }
    if (targetFile) return targetFile;
    const lastDocName = localStorage.getItem("docName");
    if (lastDocName && lastDocName.length > 0) {
        targetFile = files.find((file) => file.name === lastDocName);
    }
    return targetFile || files[0];
};

export default function DocumentPage() {
    const [searchParams] = useSearchParams();
    const currentDocFile = resolveFile(searchParams.get("doc"), documentFiles);
    const [docFile, setDocFile] = useState(currentDocFile);
    const [fileContent, setFileContent] = useState("");
    useEffect(() => {
        setFileContent(docFile.content);
    }, [docFile]);

    const handleClick = (file) => {
        localStorage.setItem("docName", file.name);
        setDocFile({ ...file });
    };

    return (
        <div className="container m-auto p-6 scroll-smooth">
            <div className="p-2 mx-12">
                <h1 className="text-3xl font-bold text-center pb-2">My Document</h1>
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
            <HeadToTop style={{ position: "fixed", bottom: "10px", right: "10px" }}>
                <div className="inline-flex items-center border border-1 rounded-full bg-white cursor-pointer">Top</div>
            </HeadToTop>
        </div>
    );
}
