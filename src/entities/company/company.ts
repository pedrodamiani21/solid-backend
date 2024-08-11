export interface CompanyProps {
    id?: number;
    description?: string;
    email?: string;
    phone?: string;
}

export class Company {
    private props: CompanyProps;

    constructor(props: CompanyProps) {
        this.validateProps(props);
        this.props = props;
    }

    private validateProps(props: CompanyProps): void {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (props.email && !emailRegex.test(props.email)) {
            throw new Error('Email Invalid!');
        }
    }

    get id(): number | undefined {
        return this.props.id;
    }

    get description(): any {
        return this.props.description;
    }

    get email(): any {
        return this.props.email;
    }

    get phone(): any {
        return this.props.phone;
    }
}
