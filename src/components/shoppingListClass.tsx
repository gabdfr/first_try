import React, { Component } from 'react';

interface TitleProps {
    title: string;
    subtitle?: string;
    mainActor?: string;
}
//this is a comment to try if the correct branch is setted
class TitleClass extends Component<TitleProps> {
    render() {
        const { title, subtitle,mainActor } = this.props;
        return (
            <>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <h3>{mainActor}</h3>
            </>
        );
    }
}

export default TitleClass;