export const stringToArray = (string) => {
    return string.split(",").map((item) => {
        return item.trim();
    });
};
   
export const beautifulHTMLFromMDFile = (code) => {
    code = code.replace(/<h1>/g, "<h1 class='markdown-heading'>");
    code = code.replace(/<h2>/g, "<h2 class='heading-element'>");
    code = code.replace(/<h3>/g, "<h2 class='heading-element'>");
    code = code.replace(/<h4>/g, "<h2 class='heading-element'>");
    code = code.replace(/<h5>/g, "<h2 class='heading-element'>");
    console.log(code);
    return code;
};
