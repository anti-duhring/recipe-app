import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
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

    return ( <AnimatePresence exitBeforeEnter>
 <Grid>
            {cousine.map((item) => (
                <Card
                animate={{opacity:1}}
                initial={{opacity:0}}
                exit={{opacity:0}}
                transition={{duration:0.5}}
                id={item.id}>
                     <Link to={`/recipe/${item.id}`}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            ))}
            </Grid>
        
        </AnimatePresence>
     );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 3rem;
    margin-top: 3rem;
`
const Card = styled(motion.div)`
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