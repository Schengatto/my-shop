import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { CMSOrdersPage, CMSPage, CMSProductsPage, CartPage, CheckoutPage, LoginPage, ShopPage, ThanksPage } from './pages'
import { NavBar } from './shared/components/core'

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <NavBar />
        <Routes>
          <Route path="login" element={<LoginPage />} />

          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="thanks" element={<ThanksPage />} />

          <Route path="cms" element={<CMSPage />}>
            <Route path="products" element={<CMSProductsPage />} />
            <Route path="orders" element={<CMSOrdersPage />} />
            <Route index element={<Navigate to="products" />} />
          </Route>

          <Route path="*" element={<Navigate to="shops" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
