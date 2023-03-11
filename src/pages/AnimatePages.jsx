import {
Routes, Route, useLocation
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from './Home'
import Model from './Model'

export default function AnimatePages() {
    const location = useLocation()
    const imageDetails = {
    width: 350,
    height: 450,
    };

    return (
    <AnimatePresence initial={false} mode='wait'>
        <Routes key={location.pathname} location={location}>
        {/* To check change url /model and /home */}
        <Route path="/" element={<Home imageDetails={imageDetails} />} /> 
        <Route path="/home" element={<Home imageDetails={imageDetails}/>} />
        <Route path="model" element={<Model imageDetails={imageDetails}/>} />
        </Routes>
    </AnimatePresence>
    )
}
