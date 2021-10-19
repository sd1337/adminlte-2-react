import { ChangeEventHandler, Component, MouseEventHandler } from 'react';
interface SearchbarProps {
    includeButton: boolean;
    onButtonClick: MouseEventHandler<HTMLButtonElement>;
    onChange: ChangeEventHandler<HTMLInputElement>;
    placeholder: string;
    value: string | number;
    defaultValue: string | number;
}
declare class Searchbar extends Component<SearchbarProps, {}> {
    static defaultProps: {
        includeButton: boolean;
        onButtonClick: undefined;
        onChange: undefined;
        placeholder: undefined;
        value: undefined;
        defaultValue: undefined;
    };
    state: {};
    render(): JSX.Element;
}
export default Searchbar;
//# sourceMappingURL=Searchbar.d.ts.map