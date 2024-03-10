import {mult, sum} from './01';

test('sum should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result = sum(a, b);

    //expect result
    expect(result).toBe(3);
})
test('multiply should be correct', () => {
    //data
    const a = 1;
    const b = 2;
    const c = 3;

    //action
    const result1 = mult(a, b);
    const result2 = mult(b, c);


    //expect result
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

