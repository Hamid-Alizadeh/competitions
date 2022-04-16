import React from "react";
import { Pinterest } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsIcon from "@mui/icons-material/Notifications";

import styled from "styled-components";
export default function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <Pinterest />
        </IconButton>
      </LogoWrapper>
      <HomePageButton>
        <a href="/">Home</a>
      </HomePageButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input placeholder="Search" />
            <button type="submit"></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>
      <IconsWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 4px 15px;
  background-color: white;
  color: black;
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: red;
    font-size: 32px;
    cursor: pointer;
  }
`;

const HomePageButton = styled.div`
  display: flex;
  height: 48px;
  min-width: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
  background-color: black;
  margin-right: 5px;

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
`;

const SearchBarWrapper = styled.div`
  background-color: lightgrey;
  display: flex;
  height: 48px;
  width: 100%;
  border-radius: 50px;
  border: none;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }

  input:focus {
    outline: none;
  }
`;

const IconsWrapper = styled.div``;
