import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Filters from "../components/Filters";
import SearchButton from "../components/SearchButton";
import "../style/HomePage.css";
import { Link } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  const delhislides = [
    {
      url: "https://media.istockphoto.com/id/1253875335/photo/connaught-place-with-national-flag.jpg?s=1024x1024&w=is&k=20&c=hhlMspWhlMWhPjfM__w0PJfBHF_9sBKByFjYc8wT2Nw=",
      description: "Description of Event 1",
      date: "Date: 2023-05-01",
      rating: "4.5 (205)",
      navigate: "/delhievent1",
    },
    {
      url: "https://media.istockphoto.com/id/1027005714/photo/marine-drive-mumbai.jpg?s=1024x1024&w=is&k=20&c=_RZT1I6Horj8m_X0gTs2LqWyz2BsurqsJVYyV4OMoKY=",
      description: "Description of Event 2",
      date: "Date: 2023-06-15",
      rating: "4.2 (150)",
      navigate: "/delhievent2",
    },
    {
      url: "https://media.istockphoto.com/id/1206421561/photo/sunset-traffic-in-new-delhi-tuc-tuc-cars-on-the-road-to-the-presidential-residance.jpg?s=1024x1024&w=is&k=20&c=OgA5TTVvlMvoQYNR9kPvFGG7E81fTXoc6SatpiY0nuo=",
      description: "Description of Event 3",
      date: "Date: 2023-07-20",
      rating: "4.1 (187)",
      navigate: "/delhievent3",
    },
  ];
  const mumbaislides = [
    {
      url: "https://media.istockphoto.com/id/1253875335/photo/connaught-place-with-national-flag.jpg?s=1024x1024&w=is&k=20&c=hhlMspWhlMWhPjfM__w0PJfBHF_9sBKByFjYc8wT2Nw=",
      description: "Description of Event 1",
      date: "Date: 2023-05-01",
      rating: "4.5 (205)",
      navigate: "/mumbaievent1",
    },
    {
      url: "https://media.istockphoto.com/id/1027005714/photo/marine-drive-mumbai.jpg?s=1024x1024&w=is&k=20&c=_RZT1I6Horj8m_X0gTs2LqWyz2BsurqsJVYyV4OMoKY=",
      description: "Description of Event 2",
      date: "Date: 2023-06-15",
      rating: "4.2 (150)",
      navigate: "/mumbaievent2",
    },
    {
      url: "https://media.istockphoto.com/id/1206421561/photo/sunset-traffic-in-new-delhi-tuc-tuc-cars-on-the-road-to-the-presidential-residance.jpg?s=1024x1024&w=is&k=20&c=OgA5TTVvlMvoQYNR9kPvFGG7E81fTXoc6SatpiY0nuo=",
      description: "Description of Event 3",
      date: "Date: 2023-07-20",
      rating: "4.1 (187)",
      navigate: "/mumbaievent3",
    },
  ];
  const puneslides = [
    {
      url: "https://media.istockphoto.com/id/1253875335/photo/connaught-place-with-national-flag.jpg?s=1024x1024&w=is&k=20&c=hhlMspWhlMWhPjfM__w0PJfBHF_9sBKByFjYc8wT2Nw=",
      description: "Description of Event 1",
      date: "Date: 2023-05-01",
      rating: "4.5 (205)",
      navigate: "/puneevent1",
    },
    {
      url: "https://media.istockphoto.com/id/1027005714/photo/marine-drive-mumbai.jpg?s=1024x1024&w=is&k=20&c=_RZT1I6Horj8m_X0gTs2LqWyz2BsurqsJVYyV4OMoKY=",
      description: "Description of Event 2",
      date: "Date: 2023-06-15",
      rating: "4.2 (150)",
      navigate: "/puneevent2",
    },
    {
      url: "https://media.istockphoto.com/id/1206421561/photo/sunset-traffic-in-new-delhi-tuc-tuc-cars-on-the-road-to-the-presidential-residance.jpg?s=1024x1024&w=is&k=20&c=OgA5TTVvlMvoQYNR9kPvFGG7E81fTXoc6SatpiY0nuo=",
      description: "Description of Event 3",
      date: "Date: 2023-07-20",
      rating: "4.1 (187)",
      navigate: "/puneevent3",
    },
  ];

  return (
    <div className="Home">
      <header className="Home-header">
        <Header />
      </header>

      <main>
        <h1>Browse Events</h1>
        <SearchButton />

        <section>
          <h3>Delhi</h3>
          <Slider slides={delhislides} />
        </section>
        <br />

        <section>
          <h3>Mumbai</h3>
          <Slider slides={mumbaislides} />
        </section>
        <br />

        <section>
          <h3>Pune</h3>
          <Slider slides={puneslides} />
        </section>
        <br />

        <p>
          Click <Link to="/handson">here</Link> to go to the Handson page.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default Home;