function merge(arr1, arr2) {
  const mergedArr = arr1.concat(arr2);
  return mergedArr
    .filter((element, index) => {
      return mergedArr.indexOf(element) === index;
    })
    .sort();
}

/*a1 = ["d", "c", "b", "a"];
a2 = ["f", "e", "d", "c"];
console.log(merge(a1, a2));*/