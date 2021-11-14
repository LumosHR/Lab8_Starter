module.exports = {sum};

function sum(...args) {
    let ret = 0;
    for (let arg of args) {
        console.log(arg);
        ret += arg;
    }
    return ret;
}