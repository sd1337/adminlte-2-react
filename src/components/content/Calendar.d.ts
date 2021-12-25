import { Component } from 'react';
import 'fullcalendar';
import 'fullcalendar/dist/fullcalendar.min.css';
import './Calendar.css';
interface CalendarProps {
}
interface CalendarState {
}
declare class Calendar extends Component<CalendarProps, CalendarState> {
    state: CalendarState;
    componentDidMount(): void;
    main: HTMLDivElement | null;
    render(): JSX.Element;
}
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map