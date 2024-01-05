// frontend/src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import TalkToUsModal from "../modals/TalkToUsModal/TalkToUsModal";
import "./Navbar.css";
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [activeModal, setActiveModal] = useState(null);



  // handle overflow on body to prevent scrolling when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    }
  }, [showModal])


  // handle show modal
  const handleShowModal = (e, name) => {
    e.preventDefault();
    setShowModal(true);
    setActiveModal(name);
  };

  // handle close modal
  const handleCloseModal = () => {
    setShowModal(false);
    setActiveModal(null);
  };

  // Define your navigation links
  //? Using button instead since its a modal
  const navLinks = [
    { name: 'talk-to-us', label: "Talk to Us" },
    { name: 'go-agile', label: "Go Agile" },
    // Add more links as needed
  ];

  // Conditionally add special link for Navbar2
  if (location.pathname === "/special") {
    navLinks.push({ to: "/special", label: "Special Page" });
  }

  return (
    <>
      <nav>
        <div className="left">
          <img src="../../assets/images/xlogo.svg" alt="xcelsz logo" />
          <h2 className="desktop-resp">Xcelsz Agile Solutions</h2>
          <h1 className="mobile-resp">Xcelsz</h1>
        </div>
        <div className="right">
          <ul>
            {navLinks.map(({ name, label }, index) => (
              <li key={name} className={`nav-link-${index}`}>
                <button onClick={(event) => handleShowModal(event, name)}>{label}</button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Modal */}
      <AnimatePresence>
        {
          showModal && (
            activeModal === "talk-to-us" && <TalkToUsModal handleCloseModal={handleCloseModal} />
          )
        }

      </AnimatePresence>

    </>
  );
};

export default Navbar;
