---
title: "Creating a Vampire Survivors game in Unity #1 - Movement"
subtitle: "Setting up the project, creating player controls, monster spawning and follow behaviour"
published: true
date: "2023-06-27"
tags: ["Unity", "Tutorial"]
time: "Est. time: 10 min"
image: "post1.jpg"
animImage: "post1.webp"
alt: "Illustration showing a player cube surrounded by enemy cubes."
imageBlurData: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFBv/EACMQAAEDAwQCAwAAAAAAAAAAAAECAxEAEiEEBSIxBqEUUWH/xAAUAQEAAAAAAAAAAAAAAAAAAAAE/8QAGhEAAgIDAAAAAAAAAAAAAAAAAQIAEgMEEf/aAAwDAQACEQMRAD8AiM+OaZ3Zhqfmtpfi6xSgIM8RBzkzGPdZ86hLZKC4QU4i7r1RVLUdtacKjfD3Kc4BjP5SikJuPEd/VMdQYfTyOlrHs//Z"
---

## OVERVIEW

In this first part we will set up the project, add a player and spawn in some enemies that will chase the player.
We will be using 3D and rigidbodies for collisions.

<details>
  <summary>View an animation of the result (player and enemy movement)</summary>
![alt text](/images/post1.webp "Enemies following the player")
</details>

## Setting up the project

Start a new project in Unity with the 3D (URP) template.

Start by rotating the camera downwards by setting it's X rotation to 90 and it's Y position to 30.  
Create a plane and set the X and Z scale to 10.

## Add a player object

<details>
  <summary>Show steps</summary>

1. Add a cube to the scene from GameObject > 3D Object.
2. Give it a name.
3. Give it a tag of "Player".
4. Give it a material.
5. Add a rigidbody.
   1. Disable gravity on it.
   2. Freeze its Y position.
   3. Freeze its X and Z rotation.
6. Add a script to it to handle the player movement.

</details>

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

### Code explanation:

**[SerializeField] private float moveSpeed = 5f;**  
The [SerializeField] attribute lets us have the variable be private while still letting us adjust its value in the Unity Editor.

</details>

## Make the camera follow the player

Give the Main Camera a script that sets it's X and Z position to match the players position.

<details>
  <summary>Show code</summary>
  
```C#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraMovement : MonoBehaviour
{
private Transform playerTransform;
private Vector3 playerPosition;

    void Start()
    {
        GameObject playerObject = GameObject.FindGameObjectWithTag("Player");
        if (playerObject != null)
        {
            playerTransform = playerObject.transform;
        }
    }

    void Update()
    {
        playerPosition = playerTransform.position;
        transform.position = new Vector3(playerPosition.x, 30f, playerPosition.z);
    }

}

````

</details>

## Enemy movement

<details>
  <summary>Show steps</summary>

1. Add a cube to the scene from GameObject > 3D Object.
2. Give it a name.
3. Give it a tag of "Monster".
4. Give it a material.
5. Add a rigidbody.
   1. Disable gravity on it.
   2. Freeze its Y position.
   3. Freeze its X and Z rotation.
6. Add a script to it to handle the enemy movement.
7. Add a folder called Prefabs to the assets
8. Drag the newly created object to it.

</details>

<details>
  <summary>Show code</summary>

```C#
using UnityEngine;

public class EnemyMovement : MonoBehaviour
{
    public float moveSpeed = 10f;
    public float rotationSpeed = 10f;
    private Transform playerTransform;
    private Rigidbody rb;
    private Vector3 direction;
    private Quaternion targetRotation;

    private void Start()
    {
        rb = GetComponent<Rigidbody>();
        GameObject playerObject = GameObject.FindGameObjectWithTag("Player");
        if (playerObject != null)
        {
            playerTransform = playerObject.transform;
        }
        else
        {
            Debug.LogError("Player object not found in the scene!");
        }
    }

    private void FixedUpdate()
    {
        if (playerTransform != null)
        {
            MoveTowardsPlayer();
        }
    }

    private void MoveTowardsPlayer()
    {
        direction = (playerTransform.position - transform.position).normalized;
        rb.velocity = direction * moveSpeed;
        targetRotation = Quaternion.LookRotation(direction);
        rb.MoveRotation(Quaternion.RotateTowards(rb.rotation, targetRotation, rotationSpeed));
    }
}
````

</details>

## Enemy spawning

<details>
  <summary>Show steps</summary>

1. Add an empty GameObject to the scene from GameObject > Empty.
2. Name it GameManager.
3. Add a script to it to spawn enemies in a circle around the player.
4. Add the enemy prefab to the Monster Prefab.

</details>

<details>
  <summary>Show code</summary>

```C#
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    public GameObject monsterPrefab;
    public float spawnDistance = 35f;
    private Transform playerTransform;

    private void Start()
    {
        GameObject playerObject = GameObject.FindGameObjectWithTag("Player");
        if (playerObject != null)
        {
            playerTransform = playerObject.transform;
            for (int i = 0; i < 10; i++)
            {
                SpawnMonster();
            }
        }
        else
        {
            Debug.LogError("Player object not found in the scene!");
        }
    }

    private void SpawnMonster()
    {
        if (playerTransform == null)
        {
            Debug.LogError("Player transform reference is null!");
            return;
        }

        Vector3 playerPosition = playerTransform.position;
        Vector2 randomPosition = Random.insideUnitCircle.normalized;
        Vector3 spawnPosition = playerPosition + new Vector3(randomPosition.x, 0f, randomPosition.y) * spawnDistance;

        Vector3 direction = (playerPosition - spawnPosition).normalized;
        Quaternion targetRotation = Quaternion.LookRotation(direction);
        Instantiate(monsterPrefab, spawnPosition, targetRotation);
    }
}
```

</details>
