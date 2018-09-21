/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;
  for (var i = 0; i < preferences.length; i++ ) {
    var ang1 = preferences[i];
    var ang2 = preferences[ang1 - 1];
    var ang3 = preferences[ang2 - 1];

    if (ang1 != ang2 && ang2 != ang3 && ang3 != ang1 && i + 1 === ang3) {
      count++
    }
  }
  return count / 3;
};
