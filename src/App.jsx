import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {Toaster} from 'react-hot-toast';

import GlobalStyles from "./styles/GlobalStyles";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./ui/AppLayout";
import ProtectedRoute from "./ui/ProtectedRoute";


const queryClient = new QueryClient({
  defaultOptions : {
    queries :{
      staleTime : 10 * 1000,
    }
  }
});

function App() {

  
  return (
    <QueryClientProvider client={queryClient}>
       <ReactQueryDevtools initialIsOpen={false} />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute>
          <AppLayout /> </ProtectedRoute>}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="cabins" element={<Cabins />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />

          <Route path="login" element={<Login />} />
          
        </Routes>
      </BrowserRouter>

<Toaster
  position="top-center"
  reverseOrder={false}
  gutter={12}
  containerStyle={{margin: "8px"}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    // Default options for specific types
    success: {
      duration: 3000,
    },
    error:{
      duration: 5000,
    },
    style: {
      backgroundColor: 'var(--color-grey-0)',
      color: 'var(--color-grey-700)',
      padding:"16px 24px",
      maxWidth:'500px',
      fontSize:'16px',

    },

  }}
/>
    </QueryClientProvider>
  );
}

export default App;