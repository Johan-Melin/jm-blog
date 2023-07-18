---
title: "Creating a Vampire Survivors game in Unity #1 - Movement"
subtitle: "Setting up the project, creating player controls, monster spawning and follow behaviour"
date: "2023-06-27"
tags: ["Unity", "Tutorial"]
time: "Est. time: 10 min"
image: "post1.jpg"
animImage: "post1.webp"
alt: "Illustration showing a player cube surrounded by enemy cubes."
imageBlurData: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EACMQAAEDAwQCAwAAAAAAAAAAAAECAxEAEiEEBSIxBqEUUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAEgMEEf/aAAwDAQACEQMRAD8AiM+OaZ3Zhqfmtpfi6xSgIM8RBzkzGPdZ86hLZKC4QU4i7r1RVLUdtacKjfD3Kc4BjP5SikJuPEd/VMdQYfTyOlrHs//Z"
---

## OVERVIEW

In this tutorial we will be using 3D and rigidbodies for collisions.
In this first we'll create 4 scripts.

<details>
  <summary>See animation of player and enemy movement</summary>
![alt text](/images/post1.webp "Enemies following the player")
</details>

## Setting up the project

Start a new project in Unity with the 3D (URP) template.
Start by rotating the camera downwards by setting it's X rotation to 90 and it's Y position to 30.
Create a plane and set the X and Z scale to 10.

## Player

### Movement

<details>
  <summary>Show code</summary>

```C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    [SerializeField]private float moveSpeed = 5f;

    void Update()
    {
        float horizontalInput = Input.GetAxis("Horizontal");
        float verticalInput = Input.GetAxis("Vertical");

        Vector3 moveDirection = new Vector3(horizontalInput, 0f, verticalInput).normalized;

        if (moveDirection.magnitude > 0)
        {
            Quaternion targetRotation = Quaternion.LookRotation(moveDirection);
            transform.rotation = targetRotation;
        }

        Vector3 movement = moveDirection * moveSpeed * Time.deltaTime;
        transform.position += movement;
    }
}
```

</details>

## Camera follow

<details>
  <summary>Show code</summary>
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
</details>

## Enemy movement

<details>
  <summary>Show code</summary>
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
</details>

## Enemy spawning

<details>
  <summary>Show code</summary>
```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
</details>
