const getMax = (a, b) => {console.log(Math.max(a, b));};
[ 100,1].reduce(getMax, 50);
[50].reduce(getMax, 10);