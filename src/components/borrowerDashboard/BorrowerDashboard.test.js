import React from "react";
import ReactDom from "react-dom";
import BorrowerDashboard from './BorrowerDashboard';

it ('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BorrowerDashboard />, div);
    ReactDOM.unmountComponentAtNode(div);
});