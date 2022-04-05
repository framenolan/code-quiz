# code-quiz

Deployed App: https://framenolan.github.io/code-quiz

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## My Approach

I divided each individual process into a function and used event listeners to call those functions. This resulted in a lot of variables, and the code could probably by dryer.

When the player starts the game, a countdown timer from 30 seconds begins counting down. If a player guesses correctly, their score increases by 1 point. If a player guesses incorrectly, 5 seconds are removed from the timer. Whenever a player guesses an answer, the next question and answer set are shown. When the timer reaches 0, the game is over. When all questions are answered, the remaining time is added to the player's score for a final score.

When shown the final score, the player is able to save their name to a leaderboard. The leaderboard page can be access from a button in the header at any time.

## Troubles and Issues

I was not able to figure out how keep the leaderboard between sessions, but this was not a technical requirement.

I was not able to figure out how to rank the leaderboard by highest score to lowest score, but this was not a technical requirement.

In my original approach, I attempted to randomly generate simple arithmetic questions and verify the answer, but it was getting too complicated and not in the technical requirements, so I pivoted to queer history questions in arrays instead.

## Screenshots
![image](https://user-images.githubusercontent.com/101062909/161665495-15577013-f9f8-4bb9-949c-f1a151148321.png)

![image](https://user-images.githubusercontent.com/101062909/161665522-e63849ef-9b5b-487c-a4c5-3a595c263c8f.png)

![image](https://user-images.githubusercontent.com/101062909/161665559-97def15e-b352-40e5-987f-edc01f031f9c.png)

![image](https://user-images.githubusercontent.com/101062909/161665589-0f6cfc9f-eb5c-4af4-8fe1-50a3784cff5d.png)

