import { expect, test } from 'vitest';
import { Company } from './company';

test('create a company', () => {
    const company = new Company({
        description: 'john',
        email: 'johndoe@mail.com',
        phone: '5554090000'
    });

    expect(company).toBeInstanceOf(Company);
    expect(company.email).toEqual('johndoe@mail.com');
});

test('create a company with empty email', () => {
    expect(() => {
        new Company({
            description: 'john',
            email: '',
            phone: '5554090000'
        });
    })
});

test('create a company with empty phone', () => {
    expect(() => {
        new Company({
            description: 'john',
            email: 'johndoe@mail.com',
            phone: ''
        });
    })
});