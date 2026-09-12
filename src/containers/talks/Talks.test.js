import React from "react";
import { render, screen } from "@testing-library/react";
import Talks from "./Talks";

test("renders both Talks & Sessions as event links", () => {
    render(<Talks />);

    const eventLinks = screen.getAllByText(/Watch the event/);

    expect(eventLinks).toHaveLength(2);
    expect(eventLinks[0].closest("a")).toHaveAttribute(
        "href",
        "https://youtu.be/ThRR8PhzczQ?si=ZvdaT4fgopNCVtOZ"
    );
    expect(eventLinks[1].closest("a")).toHaveAttribute(
        "href",
        "https://youtu.be/Y2dmWkDr35w?si=jdU30LAhhAo5xdfN"
    );
});
