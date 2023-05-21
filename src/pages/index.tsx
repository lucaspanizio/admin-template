import React from "react";
import Layout from "../components/template/Layout";

const Home: React.FC = () => {
  console.log(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);
  return (
    <div className={`flex h-screen`}>
      <Layout title="Página Inicial" caption="Este é o template Admin!">
        <h1>Lorem Ipsum</h1>
      </Layout>
    </div>
  );
};

export default Home;
