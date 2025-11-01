import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./pages/Layout";
import Service from "./pages/Service";
import Company from "./pages/Company";
import Career from "./pages/Career";
import CareerInner from "./pages/CareerInner";
import Blog from "./pages/Blog";
import BlogInner from "./pages/BlogInner";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
<Route path="/" element={<Home/>} />
<Route path="/service" element={<Service/>}/>
<Route path="/company" element={<Company/>}/>
<Route path="/career" element={<Career/>}/>
<Route path="/career/inner" element={<CareerInner/>}/>
<Route path="/blog" element={<Blog/>}/>
<Route path="/blog/inner" element={<BlogInner/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App
