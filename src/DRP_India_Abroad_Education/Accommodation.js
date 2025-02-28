import React, { useState } from "react";
import Header from "../components/Header";
import DrpEduNavbar from "../components/DrpEduNavbar";
import Footer from "../components/Footer";
import accommodationImage from "../images/accomadtion.avif";
import styles from "../styles/Accommodation.css";
import axios from "axios";
import { message, Spin } from "antd";

const Accommodation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "/api/v1/inquiry/submit-form-drp",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        message.success("Form submitted successfully! Email sent.");
        setFormData({ name: "", email: "", contact: "", message: "" });
      } else {
        message.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false); // Ensure loading state is reset after submission
    }
  };
  return (
    <>
      <Header />
      <DrpEduNavbar />

      <div className="accommodation-container">
        <img
          src={accommodationImage}
          alt="Accommodation"
          className="accommodation-image"
        />
        <h1>Abroad Accommodation</h1>
        <p>
          Abroad Accommodation refers to the housing or living arrangements that
          students, workers, or travelers secure when moving to another country
          for study, work, or long-term stay. Accommodation options vary
          depending on the destination, budget, lifestyle preferences, and
          duration of stay.
        </p>

        <h2>Types of Accommodation Abroad</h2>

        <h3>1. University Dormitories/Student Housing</h3>
        <p>
          <strong>On-Campus Dorms:</strong> Many universities offer on-campus
          dormitories for students. These are often the most convenient option,
          providing easy access to campus facilities. Rooms can be shared or
          private, with common areas for studying, socializing, and dining.
        </p>
        <p>
          <strong>Off-Campus Student Housing:</strong> For those who prefer more
          independence, off-campus student accommodation such as rented
          apartments, flats, or houses is an option. Many universities have
          arrangements with local landlords to provide affordable housing
          options for students.
        </p>

        <h3>2. Homestays</h3>
        <p>
          <strong>Living with a Host Family:</strong> This option is
          particularly popular among international students. It offers a chance
          to immerse yourself in the local culture and language while enjoying
          the comfort of a home environment. In a homestay, students typically
          have their own room and share meals with the host family.
        </p>
        <p>
          <strong>Benefits:</strong> Cultural exchange, language practice, and
          sometimes lower costs compared to independent housing.
        </p>

        <h3>3. Shared Apartments/Flats</h3>
        <p>
          <strong>Flatshare:</strong> Renting a flat or apartment with roommates
          is a common accommodation option. This is a cost-effective way to live
          in cities where housing can be expensive. Rooms are typically rented
          individually, and common areas like the kitchen and living room are
          shared.
        </p>
        <p>
          <strong>Student Housing Networks:</strong> Websites or university
          networks may help you find shared housing options with other students.
        </p>

        <h3>4. Private Apartments/Flats</h3>
        <p>
          <strong>Renting an Entire Apartment:</strong> Renting an entire
          apartment or flat gives you full independence. This is ideal for
          students or professionals who prefer more privacy and space. Private
          apartments usually come furnished, though you may need to arrange
          utilities like electricity and internet.
        </p>
        <p>
          <strong>Lease Terms:</strong> Leases for private apartments typically
          range from 6 months to a year, and upfront payments (such as a
          deposit) are usually required.
        </p>

        <h3>5. Hostels</h3>
        <p>
          <strong>Short-Term or Budget Accommodation:</strong> Hostels are
          typically more affordable and offer both private and shared rooms.
          They are ideal for travelers, tourists, or students who are looking
          for temporary housing while they settle into the area or look for
          longer-term accommodation.
        </p>
        <p>
          <strong>Facilities:</strong> Many hostels provide shared kitchens,
          communal lounges, and activities for guests to meet other travelers.
        </p>

        <h3>6. Serviced Apartments</h3>
        <p>
          <strong>Furnished Apartments with Services:</strong> Serviced
          apartments are fully furnished and come with additional services like
          cleaning, laundry, and sometimes meals. They are ideal for short to
          medium stays (from weeks to months) for professionals or those on
          business trips.
        </p>
        <p>
          <strong>Benefits:</strong> Flexibility, fully furnished, and the
          convenience of hotel-like services.
        </p>

        <h3>7. Airbnb</h3>
        <p>
          <strong>Short-Term Rentals:</strong> Airbnb offers private rooms or
          entire homes for rent on a short term basis. This can be a great
          option for those staying in a city for a few days or months.
        </p>
        <p>
          <strong>Variety:</strong> You can find anything from budget rooms to
          luxury apartments, and it’s available in most major cities.
        </p>

        <h3>8. Guesthouses</h3>
        <p>
          <strong>Smaller, Budget-Friendly Lodgings:</strong> Guesthouses are
          usually smaller establishments than hotels and can offer a homely
          atmosphere. Some guesthouses also provide basic kitchen facilities,
          allowing for a more cost-effective living experience.
        </p>
        <p>
          <strong>Ideal for:</strong> Those staying for a short period and
          preferring a more relaxed, home-like setting.
        </p>

        <h2>Factors to Consider When Choosing Accommodation Abroad</h2>

        <h3>1. Location</h3>
        <p>
          <strong>Proximity to Campus/Workplace:</strong> Consider how far your
          accommodation is from your university, workplace, or other key
          locations (shops, public transport, social spots).
        </p>
        <p>
          <strong>Neighborhood Safety:</strong> Research the safety of the area.
          Living in a student-friendly neighborhood or a community with good
          public transport links is generally a good idea.
        </p>
        <p>
          <strong>Accessibility:</strong> Ensure that your accommodation is near
          public transportation (e.g., buses, metros, trains), which is often
          the most cost-effective way to travel.
        </p>

        <h3>2. Cost</h3>
        <p>
          <strong>Rent:</strong> Costs will vary greatly depending on the
          country, city, and type of accommodation. Cities like London, New
          York, or Sydney tend to have higher rents, while smaller cities or
          rural areas are more affordable.
        </p>
        <p>
          <strong>Utilities:</strong> Some rental agreements include utilities
          (electricity, water, internet), while in other cases, you may need to
          pay these separately. Be clear on what’s included in the rent.
        </p>
        <p>
          <strong>Budget-Friendly Options:</strong> Hostels, shared
          accommodation, and homestays can be more affordable. Many universities
          provide lists of affordable options in the area.
        </p>

        <h3>3. Type of Accommodation</h3>
        <p>
          If you're a student, university-provided dormitories or student
          housing are often the easiest and most convenient option, but you may
          need to apply early.
        </p>
        <p>
          For professionals or those staying long-term, private apartments or
          serviced apartments may be more suitable.
        </p>
        <p>
          <strong>Flexibility:</strong> Some accommodations offer flexible lease
          terms (ideal for short-term stays), while others may require long-term
          commitments.
        </p>

        <h3>4. Furnishings and Amenities</h3>
        <p>
          <strong>Furnished vs. Unfurnished:</strong> Ensure that the
          accommodation is furnished or check what you may need to buy. Some
          countries or apartments may require you to arrange your own furniture,
          while others come fully furnished.
        </p>
        <p>
          <strong>Kitchen and Bathroom:</strong> If you want to cook your own
          meals, choose accommodation with a kitchen or kitchenette. Shared
          apartments may have a communal kitchen, while some private apartments
          might have their own.
        </p>
        <p>
          <strong>Wi-Fi:</strong> Check whether internet access is included, as
          reliable Wi-Fi is crucial for work and study purposes.
        </p>

        <h3>5. Lease Terms</h3>
        <p>
          <strong>Duration:</strong> Check the length of the lease. University
          accommodation may have set lease periods (e.g., one semester or one
          year), while rental agreements for apartments may have more flexible
          or longer terms.
        </p>
        <p>
          <strong>Security Deposit:</strong> Many landlords require a deposit to
          cover any damage to the property. This is usually refundable at the
          end of your lease, as long as there are no issues.
        </p>
        <p>
          <strong>Rules and Regulations:</strong> Understand the house rules
          (e.g., visitor policies, noise restrictions, etc.) and ensure they
          align with your lifestyle.
        </p>

        <h3>6. Cultural and Legal Considerations</h3>
        <p>
          Be aware of any cultural norms or legal restrictions regarding
          accommodation in your host country. For instance, in some countries,
          it may be difficult to rent a property without a local guarantor.
        </p>
        <p>
          In some countries, renting as a foreigner may require additional
          documentation, like a visa, proof of income, or a reference letter.
        </p>

        <h3>7. Social Life</h3>
        <p>
          <strong>Socializing Opportunities:</strong> If you're a student,
          living in a dormitory or shared apartment can provide opportunities to
          socialize with other students. Some accommodations also offer events
          or community gatherings to help people connect.
        </p>

        <h2>Accommodation Platforms for Students and Travelers</h2>
        <ul>
          <li>Uniplaces</li>
          <li>Student.com</li>
          <li>Airbnb</li>
          <li>Roomster</li>
          <li>HousingAnywhere</li>
          <li>Nestpick</li>
        </ul>

        <h2>Tips for Finding Accommodation Abroad</h2>
        <ol>
          <li>
            Start Early: Accommodation in popular study destinations can be in
            high demand, especially at the start of the academic year.
          </li>
          <li>
            Research the Area: Use maps, online reviews, and forums to
            understand the safety and amenities of the neighborhood.
          </li>
          <li>
            Visit the Property: If possible, try to visit the accommodation or
            ask for a virtual tour to make sure it meets your expectations.
          </li>
          <li>
            Check Reviews: Look for reviews from previous tenants to gauge the
            quality and reputation of the property or landlord.
          </li>
          <li>
            Consult Local Agents: If you're unsure about the process or need
            local help, consider contacting real estate agents or accommodation
            consultants who specialize in international students.
          </li>
        </ol>
        <h1>Contact Us</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact">Contact</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              placeholder="Your Contact Number"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Inquiry About</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Inquiry About"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? <Spin size="small" /> : "Submit"}
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Accommodation;
