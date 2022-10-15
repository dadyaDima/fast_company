export function paginate(usersList, currentPage, pagesSize) {
    const startIndex = (currentPage - 1) * pagesSize;
    return [...usersList].splice(startIndex, pagesSize);
}
