import { findByLabelText } from "@testing-library/react";
import Category from "./components/Category";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import {GiKnifeFork} from 'react-icons/gi';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}>Tasty Good</Logo>
      </Nav>
      <Category />
      <Search />
      <Pages />
      </BrowserRouter>
    </div>
  );
}
const Logo = styled(Link)`
  font-size:1.5rem;
  text-decoration:none;
  font-weight:400;
  font-family:'Lobster Two', cursive;
`
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;;
  svg{
    font-size: 2rem;
  }
`

export default App;
