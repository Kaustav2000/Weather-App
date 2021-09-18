import React, { useState } from "react";
import { Form, Icon, SearchInput } from "./SearchForm.style";
import { City } from "../../API";
import { useFetchData } from "../../Hooks/useFetchData";

const SearchForm = () => {
  const [search, setSearch] = useState("Kolkata");
  let { fetchData } = useFetchData();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData(await City(search));
    setSearch("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Icon />
      <SearchInput
        placeholder="Search"
        value={search}
        onChange={handleSearch}
      />
    </Form>
  );
};

export default SearchForm;
