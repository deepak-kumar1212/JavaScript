function f ([ name, val ]) {
    console.log(name, val)
}
function g ({ name, val}) {
    console.log(name, val)
}
function h ({ name, val }) {
    console.log(name, val)
}
f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })