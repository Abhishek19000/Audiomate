import { Route, Routes } from "react-router-dom";
import AuthCallbackPage from "./pages/auth-callback/AuthCallbackPage";
import HomePage from "./pages/home/HomePage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback 
      signInForceRedirectUrl={"/auth-callback"}
      />}></Route>
      <Route path="/auth-callback" element={<AuthCallbackPage/>} />
    </Routes>
    </>
  );
}

