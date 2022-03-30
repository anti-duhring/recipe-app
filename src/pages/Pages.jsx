import Home from './Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NotFound from './NotFound';
import Cousine from './Cousine'

const Pages = () => {
    return ( 
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/cousine/:type" element={<Cousine />} />
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            
     );
}
 
export default Pages;