/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    k = 0;
    for(i = 1;i < preferences.length+1;i++){
        if(preferences[preferences[preferences[i-1]-1]-1] == i) k++;
    }
    return Math.floor(k/3);
};
