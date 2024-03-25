import React, { Component } from 'react';
import 'fullcalendar';
import './Calendar.css';
interface CalendarProps {
}
interface CalendarState {
}
declare class Calendar extends Component<CalendarProps, CalendarState> {
    state: CalendarState;
    componentDidMount(): void;
    main: HTMLDivElement | null;
    render(): React.JSX.Element;
}
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map