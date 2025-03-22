# STAR vs BUS Topology 

Display the answers for STAR or BUS network topology questions across 10 years of CBSE Sample Question Papers (SQPs).

![Screenshot of the application](https://i.imgur.com/f9epuQQ.png)

## Features

- **Year-by-Year Visualization**: Select any academic year to view its specific topology diagram
- **Comprehensive View**: "View All" option to see all years' topologies at once
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## Customization

### Add New Years/Images

To add new years or update existing images, modify the JavaScript in the file:

```javascript
const years = [
    "2015-16", "2016-17", /* add new years here */
];

const images = {
    "2015-16": "https://i.imgur.com/l4D7tEf.png",
    "2016-17": "https://i.imgur.com/7GpQtjW.png",
    /* add new image URLs here */
};
