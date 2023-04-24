import { render, screen } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom";
import App from "./App";
import Header from "./Header";
import EmojiResults from "./EmojiResults";
import EmojiResultsRow from "./EmojiResultRow";
import userEvent from "@testing-library/user-event";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

//Header Unit Test
it("Header Checking", () => {
  render(<Header />);
  expect(screen.getByText("Emoji Search")).toBeInTheDocument();
});

// Emoji List Checking
it("Emoji List isChecked ? ", () => {
  render(<App />);
  expect(screen.getByText("Smile")).toBeInTheDocument();
});

it("isFiltered ? ", () => {
  render(<App />);
  const emoji = "100";
  const input = screen.getByRole("textbox");
  //Get emoji and input. After getting 2 variables
  userEvent.type(input, emoji);
  //Just type'it to input element "emoji"
  expect(screen.getByText(emoji)).toBeInTheDocument;
  //Then expected to see that emoji in screen. That is easy
});

test("clicked emoji is copied", () => {
  render(<App />);
  //Find to smile emoji with text and hold in a variable.
  const Smile = screen.getByText("Smile");
  userEvent.click(Smile);

  //After getting emoji isItEqual with data clipboard text ? and try match if it's true test will be pass
  expect(Smile.parentElement.getAttribute("data-clipboard-text")).toMatch("😄");
});
