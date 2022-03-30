import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Cousine = () => {
    const [cousine, setCousine] = useState([])
    let params = useParams();

    const getCousine = async(name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCousine(recipes.results)
    }
    useEffect(() => {
        getCousine(params.type)
    },[params])

    return ( 
        <Grid>
            {cousine.map((item) => (
                <Card key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Card>
            ))}
        </Grid>
     );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 3rem;
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
export default Cousine;