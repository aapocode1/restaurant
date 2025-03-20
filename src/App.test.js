import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router";
import App from './App';
import userEvent from '@testing-library/user-event';



test('Renders the Header heading', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByRole("button", { name: 'on Click' });
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByText("Choose Date");
    expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  
  const reserveButton = screen.getByRole("button", { name: 'on Click' });
  fireEvent.click(reserveButton);
  
  const testTime = []
  userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
  expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);
  
})