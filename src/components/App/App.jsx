import SharedLayout from 'components/SharedLayout/SharedLayout';
import {
  AboutUs,
  Brands,
  Cart,
  Catalog,
  Category,
  Contacts,
  Home,
  PageNotFound,
  PageUnderConstruction,
  Pet,
  PricesDrop,
  ProductCard,
  Registration,
  UserPage,
  CreateNewPass,
} from 'pages';

import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

import Search from 'pages/Search/Search';
import { Route, Routes } from 'react-router-dom';
import { Hidden } from './App.styled';
import { CatalogLayout } from 'components/CatalogLayout/CatalogLayout';
import { ProductType } from 'pages/Catalog/Pages/ProductType';
import { OrderSuccessful } from 'pages/Cart/OrderSuccessful/OrderSuccessful';



export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="registration" element={<PublicRoute><Registration /></PublicRoute>} />
          <Route path="user" element={<PrivateRoute ><UserPage /></PrivateRoute>} />
          <Route path="newpass" element={<CreateNewPass />}/>
          <Route path="catalog" element={<CatalogLayout />}>
            <Route index element={<Catalog />} />
            <Route path=":pet" element={<Pet />} />
            <Route path=":pet/:category" element={<Category />} />
            <Route path=":pet/:category/:productType" element={<ProductType />} />
          </Route>

          {/*  <Route path="catalog/:pet" element={<Pet />}>
          <Route path="catalog/:pet/:category" element={<Category />}>
          <Route path="catalog/:pet/:category:productType" element={<ProductType />}>
            <Route path=":pet" element={<Pet />}>
               <Route path="category" element={<Category />}>
                <Route path=":productType" element={<ProductType />}></Route>
              </Route> 
              </Route>
          </Route> */}
          {/* <Route path=":id" element={<ProductCard />} /> */}

          <Route path="brands" element={<Brands />} />
          <Route path="cart" element={<Cart />} />
          <Route path="success" element={<OrderSuccessful />} />

          <Route path="catalog/:pet/:category/:productType/:id" element={<ProductCard />}>
            {/* <Route path="description" element={<ProductDescription />} />
            <Route path="composition" element={<ProductComposition />} />
            <Route path="comments" element={<ProductComments />} /> */}
          </Route>
          <Route path=":code" element={<ProductCard />}></Route>

          <Route path="prices-drop" element={<PricesDrop />} />
          <Route path="search" element={<Search />} />

          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="/pageUnderConstruction" element={<PageUnderConstruction />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Hidden className="" id="hidden"></Hidden>
    </>
  );
};
