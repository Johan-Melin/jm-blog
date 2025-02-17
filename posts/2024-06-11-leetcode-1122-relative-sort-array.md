---
title: "Top retail companies’ SEO and Performance insights"
subtitle: "Given two arrays, sort the elements of the first so that the relative ordering of items are the same as in the second array."
published: true
date: "2025-02-18"
tags: [SEO, Performance]
time: "10"
image: "laptop_lighthouse.webp"
animImage: "post1.webp"
alt: "Digital illustration of a laptop displaying a Google Lighthouse audit report with performance metrics such as speed scores, SEO ratings, and accessibility scores. Around the laptop, floating icons and logos of major retail companies represent different websites being analyzed."
---

## OVERVIEW

<a href="https://leetcode.com/problems/relative-sort-array/description/" target="_blank">LeetCode link</a>
<br>
<a href="https://github.com/Johan-Melin/leetcode-js/blob/main/solutions/1122.%20Relative%20Sort%20Array.js" target="_blank">Github link</a> 

### Final result
**Runtime: 45 ms (top 6%)**  
**Memory: 48.79 MB (top 9%)**  

## Problem Statement

Given two arrays arr1 and arr2, where the elements of arr2 are distinct and all elements in arr2 are also in arr1, we need to sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

Example

```js
Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
```

## Step 1. Brute force

To get a working solution we can simply iterate over the second array since it determines the order, and compare it to every instance in the second array, and add to a new array when we find matches.

We can then loop over the first array and compare it to the second array, and add to a new array when we do not find matches. Then we concatenate the two arrays and we have our result.

<details>
  <summary>Show code</summary>

```js
var relativeSortArray = function(arr1, arr2) {
    let sortedArr = [];
    let unsortedArr = [];
    for (let i in arr2) {
        for (let j in arr1) {
            if (arr1[j] === arr2[i]) {
                sortedArr.push(arr1[j]);
            }
        }
    }
    for (let i in arr1) {
        if (!arr2.includes(arr1[i])) {
            unsortedArr.push(arr1[i]);
        }
    }

    unsortedArr = unsortedArr.sort((a,b) => a-b);
    sortedArr = [...sortedArr, ...unsortedArr];
    return sortedArr;
};
```

**Runtime: 79 ms (bottom 5%)**  
**Memory: 55.10 MB (bottom 5%)**  

</details>


## Step 2. Optimization - removing nested loops

Our brute force solution uses a loop in a loop causing a bad (O(N^2)) time complexity. To optimize we should check if this could be done in linear time. 

Since JavaScript objects has a O(1) time complexity, if we add the array items to objects, we could iterate over that and achieve a O(N) time complexity.

<details>
  <summary>Show code</summary>

```js
var relativeSortArray = function(arr1, arr2) {
    let sortedArr = [];
    let unsortedArr = [];
    let lookup = {};
    let counts = {};

    for (let num of arr2) {
        lookup[num] = true;
    }

    for (let num of arr1) {
        if (num in lookup) {
            counts[num] = counts[num] + 1 || 1;
        } else {
            unsortedArr.push(num);
        }
    }

    for (let num of arr2) {
        let count = counts[num] || 0;
        while (count-- > 0) {
            sortedArr.push(num);
        }
    }

    unsortedArr.sort((a, b) => a - b);
    sortedArr = [...sortedArr, ...unsortedArr];
    return sortedArr;
};
```

**Runtime: 54 ms (top 36%)**  
**Memory: 50.85 MB (bottom 25%)**  

</details>


## Step 3. Further optimization

Simply changing the array concatination from a spread to use a concat made a big difference in time complexity.

~~sortedArr = [...sortedArr, ...unsortedArr];~~
**~~Runtime: 54 ms (top 36%)~~**

sortedArr = sortedArr.concat(unsortedArr);
**Runtime: 48 ms (top 13%)**  

To gather insight I asked ChatGPT to create a brute force solution.

<details>
  <summary>Show code</summary>

```js
var relativeSortArray = function(arr1, arr2) {
    let result = [];
    
    for (let num of arr2) {
        while (arr1.includes(num)) {
            result.push(num);
            arr1.splice(arr1.indexOf(num), 1);
        }
    }
    
    arr1.sort((a, b) => a - b);
    result = result.concat(arr1);
    return result;
}
```

**Runtime: 50 ms (top 20%)**  
**Memory: 49.23 MB (top 27%)**  

Very impressive. In just 13 lines of code it achieves a great runtime and memory result.

</details>

Using ChatGPT's brute force solution, I remove the two array declarations.

<details>
  <summary>Show code</summary>

```js
var relativeSortArray = function(arr1, arr2, result = []) {
    for (let num of arr2) {
        while (arr1.includes(num)) {
            result.push(num);
            arr1.splice(arr1.indexOf(num), 1);
        }
    }
    
    arr1.sort((a, b) => a - b);
    return result.concat(arr1);
}
```

**Runtime: 45 ms (top 6%)**  
**Memory: 48.79 MB (top 9%)**  

This is not the best optimizations for large arrays, but optimized to deliver a high result while also not being too complicated.
</details>
