import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { ShopPage } from './pages/shop/ShopPage'
import { CheckOutPage } from './pages/checkout/CheckOutPage'
import { CartPage } from './pages/cart/CartPage'
import { ThanksPage } from './pages/checkout/ThanksPage'
import { LoginPage } from './pages/login/LoginPage'
import { CMSPage } from './pages/cms/CMSPage'
import { CMSProductsPage } from './pages/cms/products/CMSProductsPage'
import { CMSOrdersPage } from './pages/cms/orders/CMSOrdersPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="shop" element={<ShopPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckOutPage />} />
        <Route path="thanks" element={<ThanksPage />} />

        <Route path="cms" element={<CMSPage />}>
          <Route path="products" element={<CMSProductsPage />} />
          <Route path="orders" element={<CMSOrdersPage />} />
          <Route index element={<Navigate to="products" />} />
        </Route>

        <Route path="*" element={<Navigate to="shops" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
