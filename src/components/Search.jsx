import styled from "styled-components";
import { useState, useEffect } from "react";
import {FaSearch} from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Search = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
        navigate(`/searched/${input}`)
    }
    return ( 
        <CenterDiv>
            <FormStyle onSubmit={submitHandler}>
                <FaSearch />
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            </FormStyle>
        </CenterDiv>
     );
}
const CenterDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
`
 const FormStyle = styled.form`
    
    flex:1;
    width: 100%;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 1rem;
    padding: 1rem 1.5rem;
    input{
        border: none;
       width:95%;
        font-size: 1.5rem;
        color: white;
        padding: 0 1.5rem;
        border: none;
        background:transparent;
        outline: none;
    }
    svg{
        color:white;
    }
 `
export default Search;