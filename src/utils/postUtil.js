export const getPostInitial = (authorName) => {
    return getStrFirstLetter(authorName);
}


const getStrFirstLetter = (str) => {
    if (str == "") return "";
    return str.charAt(0)?.toLowerCase();
}