import { Navigate, Route, Routes } from "react-router-dom";
import { LoginLayout } from "../Login/layouts/LoginLayout";
import { Items } from "../Pages/Items/components/Items";
import { Item } from "../Pages/Item/components/Item";
import { Cart } from "../Cart/components/Cart";
import { Form } from "../Pages/Form/components/Form";

export const Router = () =>

    <LoginLayout>
        <Routes>
            <Route path="/" element={ <Items /> } />
            <Route path="/productos" element={ <Items /> } />
            <Route path="/productos/:id" element={ <Item /> } />
            <Route path="/contacto" element={ <Form /> } />
            <Route path="/carrito" element={ <Cart /> } />
            <Route path="*" element={ <Navigate to='/' /> } />
        </Routes>
    </LoginLayout>
