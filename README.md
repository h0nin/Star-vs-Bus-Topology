# STAR vs BUS Topology Quiz

An interactive quiz application that tests your knowledge of STAR and BUS network topologies as they appear in CBSE Sample Question Papers (SQPs) from 2015-16 to 2024-25.

![Screenshot of the application](https://i.imgur.com/EYJxDu2.png)

## Overview

This application presents network topology diagrams from CBSE Computer Science Sample Question Papers and challenges users to identify the  topology. After making a selection, users can reveal the correct answer and track their progress.

## Features

- **Interactive Quiz**: Test your knowledge of network topologies
- **Year-by-Year Questions**: 10 questions covering 10 years of CBSE SQPs
- **Immediate Feedback**: Get instant feedback on your answers
- **Progress Tracking**: Track your score and completion status
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## How to Play

1. Head on over to [topology-guessr](https://topology-guessr.vercel.app).
2. Click on a year button to start a question
3. Select either STAR or BUS topology
4. Click "REVEAL ANSWER" to check if you're correct
5. View your statistics by clicking the "STATS" button

## Customization

### Adding New Questions

To add new years or update existing questions, modify the JavaScript arrays in the file:

```javascript
const years = [
    "2015-16", "2016-17", /* add new years here */
];

const questionImages = {
    "2015-16": "https://i.imgur.com/l4D7tEf.png",
    /* add questions URLs here */
};

const correctAnswers = {
    "2015-16": "STAR",
    /* add correct answers here */
};

const answerImages = {
    "2015-16": "https://i.imgur.com/8zkjf5i.png",
    /* add answers image URLs here */
};
