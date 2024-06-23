
import { BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import Home from './Home';
import Addcar from './Addcar';
import Addpath from './Addpath';
import Started from './Started';

import { useState } from 'react';

const RouterPage = () => {
const [showHome , SetShowHome] = useState(true);
setInterval(() => {
SetShowHome(false);
},2000);

  return (
    <Router>
      <Routes>
        <Route path='/' element={showHome?<Started/>:<Home/>}/>
        <Route path='/اضافة عربة'element={<Addcar/>}/>
        <Route path='/اضافة مسار'element={<Addpath/>}/>
      </Routes>
    </Router>
  )
}

export default RouterPage;
