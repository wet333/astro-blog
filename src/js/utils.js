import path from 'path';

export function getTagsCount(blogArray) {
    const tagCountMap = {};

    blogArray.forEach(blog => {
        blog.forEach(tag => {
            if (tagCountMap[tag]) {
                tagCountMap[tag]++;
            } else {
                tagCountMap[tag] = 1;
            }
        });
    });

    const tagCountArray = [];
    for (const tag in tagCountMap) {
        tagCountArray.push({ stringText: tag, stringOccurences: tagCountMap[tag] });
    }
    return tagCountArray;
}

export function extractFileName(filePath) {
    const fileName = path.basename(filePath, path.extname(filePath));
    return fileName;
}