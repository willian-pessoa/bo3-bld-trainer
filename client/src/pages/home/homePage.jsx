import React from "react";

import Layout from "../../components/layout/layout.component";

import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <div>
        <h1>Welcome to the Bo3 BLD Trainer</h1>
        <Outlet />
      </div>
    </Layout>
  );
};

export default HomePage;
