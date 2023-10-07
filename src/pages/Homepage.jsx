import React from "react";
import Button from "../components/Button";
import arrowRight from "../assets/arrow-right.svg";
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";
import Feature6 from "../components/TopHeader";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Default Button */}
      <Button>Default Button</Button>

      {/* Customized Button 1 */}
      <Button
        iconURL={arrowRight}
        borderColor={"border-black"}
        textColor={"text-white"}
        backgroundColor={"bg-black"}
      >
        Customized Button 1
      </Button>

      {/* Customized Button 2 */}
      <Button
        borderColor={"border-blue-500"}
        textColor={"text-blue-500"}
        backgroundColor={"bg-white"}
      >
        Customized Button 2
      </Button>

      {/* Customized Button 3 */}
      <Button
        borderColor={"border-green-500"}
        textColor={"text-green-500"}
        backgroundColor={"bg-white"}
      >
        Customized Button 3
      </Button>
      <Accordion />
      <Modal />
      <Feature6 />
      <Footer />
    </div>
  );
};

export default Homepage;
