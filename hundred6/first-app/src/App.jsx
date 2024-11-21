import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Card from "./components/Card";;
import "./App.css";


function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="cards">
          <Card title="Card 1" description="This is Card 1" />
          <Card title="Card 2" description="This is Card 2" />
          <Card title="Card 3" description="This is Card 3" />

        </div>

      </main>
      <Footer />
    </>
  )
}

export default App
