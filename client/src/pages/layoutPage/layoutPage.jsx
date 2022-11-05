import React from "react";

import Layout from "../../components/layout/layout.component";
import "./layoutPage.styles.scss";

import { Outlet } from "react-router-dom";

const LayoutPage = () => {
  return (
    <div>
      <Layout>
          <Outlet />
      </Layout>
    </div>
  );
};

export default LayoutPage;
