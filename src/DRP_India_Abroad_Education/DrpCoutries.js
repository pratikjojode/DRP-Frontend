import React from "react";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import styles from "../styles/DrpCountries.module.css";

// Import images properly
import usaImg from "../images/australia.png";
import ukImg from "../images/brazil.png";
import canadaImg from "../images/california.jpg";
import australiaImg from "../images/canada.png";
import germanyImg from "../images/chicogo.jpg";
import Footer from "../components/Footer";

const countries = [
  {
    name: "USA",
    img: usaImg,
    description: "Top universities and research opportunities.",
  },
  {
    name: "UK",
    img: ukImg,
    description: "Home to prestigious institutions like Oxford and Cambridge.",
  },
  {
    name: "Canada",
    img: canadaImg,
    description: "Affordable education with high-quality institutions.",
  },
  {
    name: "Australia",
    img: australiaImg,
    description: "Great education system and high standard of living.",
  },
  {
    name: "Germany",
    img: germanyImg,
    description:
      "No tuition fees in public universities for international students.",
  },
];

const DrpCountries = () => {
  return (
    <>
      <Header />
      <DrpEduNavbar />

      <div className={styles.container}>
        {/* Content Section */}
        <div className={styles.content}>
          <h1>Study Abroad</h1>
        </div>

        {/* Countries Grid */}
        <div className={styles.grid}>
          {countries.map((country, index) => (
            <div key={index} className={styles.card}>
              <img
                src={country.img}
                alt={country.name}
                className={styles.image}
              />
              <h2>{country.name}</h2>
              <p>{country.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DrpCountries;
