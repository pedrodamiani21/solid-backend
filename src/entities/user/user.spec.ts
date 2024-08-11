import { expect, test } from 'vitest';
import { User } from './user';

test('create a user', () => {
    const user = new User({
        name: 'john',
        email: 'johndoe@mail.com',
        password: 'john123',
        companyId: 1
    });

    expect(user).toBeInstanceOf(User);
    expect(user.email).toEqual('johndoe@mail.com');
});

test('create a user with empty email should throw error', () => {
    expect(() => {
        new User({
            name: 'john',
            email: '',
            password: 'test123',
            companyId: 1
        });
    })
});

test('create a user with invalid email format should throw error', () => {
    expect(() => {
        new User({
            name: 'john',
            email: 'invalidemail',
            password: 'test123',
            companyId: 1
        });
    }).toThrow();
});

test('create a user with password shorter than 6 characters should throw error', () => {
    expect(() => {
        new User({
            name: 'john',
            email: 'johndoe@mail.com',
            password: 'abc',
            companyId: 1
        });
    }).toThrow();
});
test('create a user with empty name should throw error', () => {
    expect(() => {
        new User({
            name: '',
            email: 'johndoe@mail.com',
            password: 'abc',
            companyId: 1
        });
    }).toThrow();
});
