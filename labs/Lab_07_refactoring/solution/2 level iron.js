let f = new Array('apple', 'strawberry', 'blueberry', 'raspberry', 'lemon');
console.log(f.join('\n'));


for (i = 0; i < f.length; i++){
    if (f[i] === 'apple') console.log(f[i] + ' green')
    if (f[i] === 'strawberry') console.log(f[i] + ' red')
    if (f[i] === 'blueberry') console.log(f[i] + ' blue')
    if (f[i] === 'raspberry') console.log(f[i] + ' light red')
    if (f[i] === 'lemon') console.log(f[i] + ' yellow')
}
