import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Searched = () => {
    const [searched, setSearched] = useState([]);
    let params = useParams();

    const getSearched = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json();
        setSearched(recipes.results)
    }
    useEffect(() => {
        getSearched(params.search)
    },[params])
    return ( 
        <Grid>
        {searched.map((item) => (
            <Card key={item.id}>
                <Link to={`/recipe/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                </Link>
            </Card>
        ))}
    </Grid>
     );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    grid-gap: 3rem;
    margin-top: 3rem;
`
const Card = styled.div`
    img{
        width: 100%;
        border-radius: 2rem;
    }
    h4{
        text-align: center;
        padding: 1rem;
    }
`

export default Searched;