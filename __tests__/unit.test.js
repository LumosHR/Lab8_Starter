// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Test isPhoneNumber', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
    expect(functions.isPhoneNumber('987-654-3210')).toBe(true);
    expect(functions.isPhoneNumber('123-abc-456')).toBe(false);
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});

test('Test isEmail', () => {
    expect(functions.isEmail('ruh010@ucsd.edu')).toBe(true);
    expect(functions.isEmail('abc@abc.com')).toBe(true);
    expect(functions.isEmail('123.com')).toBe(false);
    expect(functions.isEmail('@123.com')).toBe(false);
});

test('Test isStrongPassword', () => {
    expect(functions.isStrongPassword('AbcA123')).toBe(true);
    expect(functions.isStrongPassword('DojaCat101')).toBe(true);
    expect(functions.isStrongPassword('123abc')).toBe(false);
    expect(functions.isStrongPassword('abc@123')).toBe(false);
});

test('Test isDate', () => {
    expect(functions.isDate('11/13/2021')).toBe(true);
    expect(functions.isDate('11/14/2021')).toBe(true);
    expect(functions.isDate('13112021')).toBe(false);
    expect(functions.isDate('11/13/21')).toBe(false);
});

test('Test isHexColor', () => {
    expect(functions.isHexColor('aaee33')).toBe(true);
    expect(functions.isHexColor('837401')).toBe(true);
    expect(functions.isHexColor('hi')).toBe(false);
    expect(functions.isHexColor('hello')).toBe(false);
});