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

  it("displays a search button", () => {
    const { getByRole } = render(
      <SearchForm
        searchText={validProps.searchText}
        setSearchText={validProps.setSearchText}
        onSubmit={validProps.onSubmit}
      />
    );
    expect(getByRole("button")).toHaveTextContent("Search");
  });
});
