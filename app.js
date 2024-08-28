const broadCast = new BroadcastChannel('number');

let FireRonaomNumber =()=>{
    broadCast.postMessage({
        number: Math.random() * 100,
    });
}

broadCast.onmessage = ({ data = {} }) => {
    console.log(data,"TESSt");
};