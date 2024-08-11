export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidPassword(password: string): boolean {
    return password.length > 5 ;
}

export function isValidRequiredFields(fields: { [key: string]: any }, data: string[]): any {
    let status = true;
    const errors: string[] = [];
    data.forEach(field => {
        if (!fields[field]) {
            status = false
            errors.push(field)
        }
    });
    return { status, errors }
}