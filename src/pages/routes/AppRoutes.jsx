import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../Login";
import Register from "../Register";
import Profile from "../Profile";
import MyGroups from "../Groups/MyGroups";
import CreateGroup from "../Groups/CreateGroup";
import GroupDetails from "../Groups/GroupDetails";
import NotFound from "../NotFound";
import ProtectedRoute from "../../components/ProtectedRoute";
import Layout from "../../components/Layout"; // Yana faollashtirildi!

const AppRoutes = () => {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Routes>
      <Route path="/" element={<Navigate to={isAuthenticated ? "/main" : "/login"} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />


      <Route
        path="/main/*"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Profile />} />
        <Route path="groups" element={<MyGroups />} />
        <Route path="groups/create" element={<CreateGroup />} />
        <Route path="groups/:id" element={<GroupDetails />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
