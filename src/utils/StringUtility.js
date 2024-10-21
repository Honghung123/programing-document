export const stringToArray = (string) => {
    return string.split(",").map((item) => {
        return item.trim();
    });
};

export const mdToHtmlWithConverter = async (md) => {
    return md;
};
