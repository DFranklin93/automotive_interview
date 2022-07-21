import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "../components/page/Home";

const Router = () => {
    return (
        <BrowserRouter>
            <Container>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<div>Page Not Found</div>} />
                </Routes>
            </Container>
        </BrowserRouter>
    );
};

export default Router;