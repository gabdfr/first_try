import React, { Component } from 'react';

interface TitleProps {
    title: string;
    subtitle?: string;
}

class TitleClass extends Component<TitleProps> {
    render() {
        const { title, subtitle } = this.props;
        return (
            <>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </>
        );
    }
}

export default TitleClass;