import React from "react";
import {render, screen} from "@testing-library/react";
import Talks from "./Talks";

test("renders every session as an event link with carousel controls", () => {
  render(<Talks />);

  const eventLinks = screen.getAllByText(/Watch the event/);

  expect(eventLinks).toHaveLength(3);
  expect(eventLinks[0].closest("a")).toHaveAttribute(
    "href",
    "https://youtu.be/ThRR8PhzczQ?si=ZvdaT4fgopNCVtOZ"
  );
  expect(eventLinks[1].closest("a")).toHaveAttribute(
    "href",
    "https://youtu.be/Y2dmWkDr35w?si=jdU30LAhhAo5xdfN"
  );
  expect(eventLinks[2].closest("a")).toHaveAttribute(
    "href",
    "https://youtu.be/pi36hPuP8EQ?si=F2C-SJ3fjb34H6f8"
  );
  expect(
    screen.getByRole("button", {name: "Show previous session"})
  ).toBeInTheDocument();
  expect(
    screen.getByRole("button", {name: "Show next session"})
  ).toBeInTheDocument();
});
