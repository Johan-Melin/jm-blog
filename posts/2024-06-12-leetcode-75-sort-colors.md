---
title: "LeetCode 75. Sort Colors"
subtitle: "Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue."
published: true
date: "2024-06-12"
tags: [Array, Two Pointers, Sorting]
time: "10"
image: "75.webp"
animImage: "post1.webp"
alt: "Illustration showing the number 75 on a road sign."
imageBlurData: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EACMQAAEDAwQCAwAAAAAAAAAAAAECAxEAEiEEBSIxBqEUUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAEgMEEf/aAAwDAQACEQMRAD8AiM+OaZ3Zhqfmtpfi6xSgIM8RBzkzGPdZ86hLZKC4QU4i7r1RVLUdtacKjfD3Kc4BjP5SikJuPEd/VMdQYfTyOlrHs//Z"
---

## OVERVIEW

<a href="https://leetcode.com/problems/sort-colors/description/" target="_blank">LeetCode link</a>
<br>
<a href="https://github.com/Johan-Melin/leetcode-js/blob/main/solutions/75.%20Sort%20Colors.js" target="_blank">Github link</a> 


### Final result
**Runtime: 50 ms (top 26%)**  
**Memory: 48.37 MB (top 7%)**  

## Problem Statement

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

**Follow up:** Could you come up with a one-pass algorithm using only constant extra space?

Example

```js
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

## Step 1. Two pointers

My initial idea was to use a bubble sort, but seeing <a href="https://leetcode.com/articles/two-pointer-technique/" target="_blank">two pointers</a> in the tags and having a one-pass algorith challenge I decided to implement a two pointer solution. From the LeetCode article:
*"One pointer starts from the beginning while the other pointer starts from the end. They move toward each other until they both meet."*

Since there are only 3 values possible, 0's can be swapped with the left pointer, 2's with the right pointer, allowing for an iterator making a single pass possible.


<details>
  <summary>Show code</summary>

```js
function sortColors(nums) {
    let left = 0;
    let right = nums.length - 1;
    let current = 0;

    while (current <= right) {
        if (nums[current] === 0) {
            [nums[left], nums[current]] = [nums[current], nums[left]];
            left++;
            current++;
        } else if (nums[current] === 1) {
            current++;
        } else {
            [nums[current], nums[right]] = [nums[right], nums[current]];
            right--;
        }
    }
}
```

**Runtime: 50 ms (top 26%)**  
**Memory: 48.37 MB (top 7%)**  


</details>

