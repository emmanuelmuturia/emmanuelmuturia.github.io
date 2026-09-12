import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Blogs from "./Blogs";

const publications = [
    {
        link: "https://medium.com/one",
        title: "Publication one",
        content: "<p>One</p>"
    },
    {
        link: "https://medium.com/two",
        title: "Publication two",
        content: "<p>Two</p>"
    },
    {
        link: "https://medium.com/three",
        title: "Publication three",
        content: "<p>Three</p>"
    },
    {
        link: "https://medium.com/four",
        title: "Publication four",
        content: "<p>Four</p>"
    }
];

test("limits Publications to three cards and links to Medium", async () => {
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ items: publications })
    });

    render(<Blogs />);

    await waitFor(() =>
        expect(screen.getByText("Publication three")).toBeInTheDocument()
    );

    expect(screen.getByText("Publication one")).toBeInTheDocument();
    expect(screen.queryByText("Publication four")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "More Publications" })).toHaveAttribute(
        "href",
        "https://medium.com/@emmanuelmuturia"
    );
});
