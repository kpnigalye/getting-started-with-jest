/**
 * Greet component should render the text hello
 * if the name is passed it should render hello followed by the name
 */

import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test('Greet renders correctly', () => {
  render(<Greet />);
  const textElement = screen.getByText('Hello');
  expect(textElement).toBeInTheDocument();
})

test('Greet renders correctly with name', () => {
  render(<Greet name="Krishna" />);
  const textElement = screen.getByText('Hello Krishna');
  expect(textElement).toBeInTheDocument();
})