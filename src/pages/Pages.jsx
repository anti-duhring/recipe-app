import Home from './Home'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom';
import NotFound from './NotFound';
import Cousine from './Cousine'
import Searched from './Searched';
import Recipe from './Recipe';

const Pages = () => {
    const location = useLocation();

    return ( 
                <Routes location={location} key={location.pathname
                }>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/cousine/:type" element={<Cousine />} />
                    <Route path="/searched/:search" element={<Searched />} />
                    <Route path="/recipe/:name" element={<Recipe />} />
                    <Route path="*" element={<NotFound />}></Route>
                   
                </Routes>
            
     );
}
 
export default Pages;