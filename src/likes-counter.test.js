import { screen, render } from "@testing-library/react";
import { LikesCounter } from "./component/likes-counter/likes-counter";

test("Checking for Home Link",()=>{
    render(<LikesCounter/>);

    const hyperlink = screen.getByText(/Home/i);
    expect(hyperlink).toBeInTheDocument();
    expect(hyperlink).toHaveAttribute("href");
});

test("Checking for Counter Value",()=>{
    render(<LikesCounter/>);

    const counter = screen.getByTestId("counter");
    expect(counter).toHaveTextContent("1");
})