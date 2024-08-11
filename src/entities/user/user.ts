export interface UserProps {
    id?: number;
    name: string;
    email: string;
    password: string;
    companyId: number;
}

export class User {
    private props: UserProps;

    constructor(props: UserProps) {
        this.validateProps(props);
        this.props = props;
    }

    private validateProps(props: UserProps): void {
        if (props.password && props.password.length < 5) {
            throw new Error('Please ensure your password is longer than 5 characters for security reasons.');
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (props.email && !emailRegex.test(props.email)) {
            throw new Error('Email Invalid!');
        }
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get name(): string {
        return this.props.name;
    }

    get email(): string {
        return this.props.email;
    }

    get password(): string {
        return this.props.password;
    }

    get companyId(): number {
        return this.props.companyId;
    }
}
