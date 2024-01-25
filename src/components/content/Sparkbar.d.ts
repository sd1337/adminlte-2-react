import React, { Component } from 'react';
interface SparkbarProps {
    color: string;
    height?: string | number;
    data: number[];
    padding?: boolean;
}
interface SparkbarState {
}
declare class Sparkbar extends Component<SparkbarProps, SparkbarState> {
    static defaultProps: {
        height: number;
        padding: boolean;
    };
    componentDidMount(): void;
    main: HTMLDivElement | null;
    render(): React.JSX.Element;
}
export default Sparkbar;
//# sourceMappingURL=Sparkbar.d.ts.map