import { render, screen } from "@testing-library/react";
import Hero from "../Hero";


describe("Hero Component", () => {
  it("renders the Hero image with correct attributes", () => {
    render(<Hero />);
    const image = screen.getByAltText("Nike Air Max Pulse");
    expect(image).toBeInTheDocument();
  });

  it("renders the heading and subheading correctly", () => {
    render(<Hero />);
    expect(screen.getByText("Nike Air Max Pulse")).toBeInTheDocument();
    expect(screen.getByText("First Look")).toBeInTheDocument();
  });

  it("renders the description paragraph", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Extreme comfort. Hyper durable. Max volume/i)
    ).toBeInTheDocument();
  });

  it("renders both CTA buttons", () => {
    render(<Hero />);
    expect(screen.getByText("Notify Me")).toBeInTheDocument();
    expect(screen.getByText("Shop Air Max")).toBeInTheDocument();
  });
});
