import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Skills from "./Skills";

const videos = [
    {
        id: "one",
        title: "First video",
        thumbnail: "/one.jpg",
        url: "https://youtu.be/one"
    },
    {
        id: "two",
        title: "Second video",
        thumbnail: "/two.jpg",
        url: "https://youtu.be/two"
    },
    {
        id: "three",
        title: "Third video",
        thumbnail: "/three.jpg",
        url: "https://youtu.be/three"
    },
    {
        id: "four",
        title: "Fourth video",
        thumbnail: "/four.jpg",
        url: "https://youtu.be/four"
    }
];

test("renders the latest three videos and the channel button", async () => {
    global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => videos
    });

    render(<Skills />);

    await waitFor(() =>
        expect(screen.getByText("Third video")).toBeInTheDocument()
    );

    expect(screen.getAllByRole("link")).toHaveLength(4);
    expect(screen.queryByText("Fourth video")).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: "More Videos" })).toHaveAttribute(
        "href",
        "https://www.youtube.com/@emmanuelmuturia"
    );
});
