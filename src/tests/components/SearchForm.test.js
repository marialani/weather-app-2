import React from "react";
import { getByRole, render , screen } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  const validProps = {
    searchText: "",
    setSearchText: () => {},
    onSubmit: () => {},
  };
  it("renders correctly", () => {
    const { asFragment } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
  const SubmitButton = () => {
    return <button name="search" type="submit" aria-label="search button" />;
  };

  it("displays a search button with the name search", () => {
    render(<SubmitButton />);
    const button = screen.getByRole("button");
  });
});
