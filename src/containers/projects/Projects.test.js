import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import Projects from "./Projects";

test("ignores null GitHub pinned repositories without crashing", async () => {
  global.fetch = jest.fn().mockResolvedValue({
    ok: true,
    json: async () => ({
      data: {
        user: {
          pinnedItems: {
            edges: [
              null,
              {
                node: {
                  id: "repo-1",
                  name: "Visible repository",
                  description: "A repository",
                  url: "https://github.com/example/repository",
                  forkCount: 1,
                  stargazers: {totalCount: 2},
                  primaryLanguage: null
                }
              }
            ]
          }
        }
      }
    })
  });

  render(<Projects />);

  await waitFor(() =>
    expect(screen.getByText("Visible repository")).toBeInTheDocument()
  );

  expect(screen.getByText("Research Projects")).toBeInTheDocument();
});
