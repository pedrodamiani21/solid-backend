export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
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