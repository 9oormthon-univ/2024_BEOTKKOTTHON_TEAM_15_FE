import React from 'react'
import styled from 'styled-components'
import { LuSearch } from "react-icons/lu";

const SearchBar = () => {
  return (
    <Search>
        <LuSearch size='1.5rem' color='#C9BCA2' style={{strokeWidth : 3}}/>
    </Search>
  )
}

export default SearchBar

const Search = styled.div`
    height: 50%;
    width: 60%;
    background-color: #FFF5E0;
    border-radius: 15px;
    border : 1.5px solid #C9BCA2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding : 0px 1rem;
`