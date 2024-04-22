import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/data/myContext";
function Order() {
  const context = useContext(myContext);
  const { state, color } = context;
  return (
    <Layout>
      Order
      <h1>Name:{state.name}</h1>
      <h1>class:{state.class}</h1>
      <h1>Mycolor:{color}</h1>
    </Layout>
  );
}
export default Order;