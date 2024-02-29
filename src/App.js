import React from "react";

import './assets/i18n/i18n';
import { AuthProvider } from './contexts/authContext';
import { AxiosProvider } from './contexts/axiosContext';
import { DataProvider }from './contexts/dataApiContext'
import Router from "./router";
import './App.scss';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'
import { ProSidebarProvider } from "react-pro-sidebar";
import 'react-loading-skeleton/dist/skeleton.css';


const App = () => {
  return (
    <AuthProvider>
      <AxiosProvider>
        <DataProvider>

        <ProSidebarProvider>
          <Router />
          <ToastContainer
            position={toast.POSITION.TOP_CENTER}
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            limit={1}
            closeOnClick
            rtl={false}
            draggable={false}
            pauseOnFocusLoss
            pauseOnHover
            theme='colored' />
        </ProSidebarProvider>

        </DataProvider>
      </AxiosProvider>
    </AuthProvider>
  );
};

export default App; 