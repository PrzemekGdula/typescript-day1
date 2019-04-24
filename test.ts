console.log('Test')
function add(a, b) {
    a = a + 1
    b = b + 1
    return a + b
}

const c = add(7, 9)
const b = add('12', 7)
const d = add(null, '12')