import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";

test("reveals the email link only after an intentional click", async () => {
  const user = userEvent.setup();

  render(<Contact />);

  expect(
    screen.getByRole("button", {name: "Reveal Email Address"})
  ).toBeInTheDocument();
  expect(screen.queryByRole("link", {name: /@/})).not.toBeInTheDocument();

  await user.click(screen.getByRole("button", {name: "Reveal Email Address"}));

  expect(screen.getByRole("link", {name: /@/})).toHaveAttribute(
    "href",
    expect.stringMatching(/^mailto:/)
  );
});
