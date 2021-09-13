import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import { Head, HeaderWraper, Heading, Para } from "./Header.style";

const Header = () => {
  return (
    <HeaderWraper>
      <Heading>
        <Head>Weather Forecast</Head>
        <Para>Monday</Para>
      </Heading>
      <SearchForm />
    </HeaderWraper>
  );
};

export default Header;
