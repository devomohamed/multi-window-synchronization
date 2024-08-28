
# Multi Window Synchronization

A multi window synchronization Feature to comunicate with other taps in browsers within URL


## Usage/Examples

```javascript
// Creating prodcast to share changes from it
const broadCast = new BroadcastChannel('number');

// Event to fire changes in other taps
let FireRonaomNumber =()=>{
    broadCast.postMessage({
        number: Math.random() * 100,
    });
}

// Event to lestin changes in other taps
broadCast.onmessage = ({ data = {} }) => {
    console.log(data,"TESSt");
};
```

