const useIntersectionObserver = (callback, options) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
};

const TextInputWithButton = () => (
  <div className="input-container animated fadeIn">
    <input type="text" className="text-input" style={{ width: "220px" }} />
    <a
      className="demo-button"
      href="https://calendly.com/johnarts/chat?month=2023-06"
      target="_blank"
    >
      Book a Demo
    </a>
  </div>
);

const Header = () => (
  <div className="navbar__container__fluid animate__animated animate__bounce">
    <nav className="navbar__container">
      <div className="header__left">
        <a href="#">
          <img
            src="assets/logo_final.png"
            alt="Logo"
            className="d-inline-block align-top"
          />
        </a>
      </div>
      <a
        className="btn btn-primary btn-book-demo"
        href="https://calendly.com/johnarts/chat?month=2023-06"
        target="_blank"
      >
        Book a Demo
      </a>
    </nav>
  </div>
);

const Banner = () => (
  <div className="banner__container__fluid">
    <div className="banner__container">
      <div className="banner__left">
        <h3 className="header__three animate__animated animate__fadeInDown">
          Unlike any data you have seen before.
        </h3>
        <p className="text animate__animated animate__fadeInDown">
          We enable digitally native brands with data to track competitor
          strategies, boost conversion rates, and act faster on market changes.
          In an ethical <br />
          and privacy-first way.
        </p>
        <TextInputWithButton />
        <span className="text_span animate__animated animate__fadeInDown">
          *We may contact you to help you get set up.{" "}
          <a href="" className="text_span">
            Privacy Policy
          </a>
        </span>
      </div>
      <div className="banner__right">
        <video
          src="assets/animationfile.mp4"
          width="100%"
          autoPlay
          muted
          loop
          controls={false}
        />
      </div>
    </div>
  </div>
);

const HeaderSection = ({ title, subtitle, logo, gradient__one }) => (
  <section
    id="section1"
    className={`section__container animate__animated animate__fadeIn ${gradient__one}`}
  >
    <p className="section__one__section__text">{title}</p>
    <span className="section__text section__one__section__text">
      {subtitle}
    </span>
    {logo}
  </section>
);

const SectionTwo = () => {
  const sectionRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInDown"
          );
        } else {
          entry.target.classList.remove(
            "animate__animated",
            "animate__fadeInDown"
          );
        }
      });
    },
    { rootMargin: "0px", threshold: 0.5 }
  );

  return (
    <section className="section__container section__two">
      <h4 ref={sectionRef} className="header__four gradient__two">
        Find out which Competitors you are losing customers to and why.
      </h4>
      <div className="section__container__image">
        <img src="assets/section_one.svg" alt="Logo" width="100%" />
      </div>
      <p className="section__text">
        Understand customer behaviour outside of your website or app.
      </p>
    </section>
  );
};

const SectionThree = () => {
  const sectionRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInDown"
          );
        } else {
          entry.target.classList.remove(
            "animate__animated",
            "animate__fadeInDown"
          );
        }
      });
    },
    { rootMargin: "0px", threshold: 0.5 }
  );

  return (
    <section className="section__container section__three">
      <h4 ref={sectionRef} className="header__four gradient__four">
        Which Competitor Strategies are Most <br />
        Successful.
      </h4>
      <div className="section__container__image">
        <img src="assets/section_two.svg" alt="Logo" width="100%" />
      </div>
      <p className="section__text">
        Benchmark and outshine competitors by tracking their successful
        strategies
      </p>
    </section>
  );
};

const SectionFour = () => (
  <section className="section__container section__text__gradient">
    <h4 className="header__four"> Don't get stuck in a limited view.</h4>
    <p className="section__text__secondary">
      You have mastered the art of understanding customer behaviour on your own
      website and app, but what <br />
      about beyond? Drive into the world outside and break free from your vacuum
      of data with Rita.
    </p>
    <img src="assets/section_four_image.svg" alt="Logo" width="30%" />
  </section>
);

const SectionFive = () => {
  const sectionRef = useIntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInDown"
          );
        } else {
          entry.target.classList.remove(
            "animate__animated",
            "animate__fadeInDown"
          );
        }
      });
    },
    { rootMargin: "0px", threshold: 0.5 }
  );

  return (
    <section className="section__container section__five">
      <h4 ref={sectionRef} className="header__four">
        Tap into zero-party data.
      </h4>
      <div className="section__container__image">
        <img src="assets/section_four.svg" alt="Logo" width="100%" />
      </div>
      <p className="section__five__section__text">
        Tap into Europe's largest pool of ethically sourced data. Rita platform
        rewards
        <br />
        users for their data in a GDPR compliant manner.
      </p>
    </section>
  );
};

const SectionSix = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [shouldAnimate, setShouldAnimate] = React.useState(false);
  const items = [
    "assets/cardone.svg",
    "assets/cardtwo.svg",
    "assets/cardthree.svg",
    "assets/cardfour.svg",
    "assets/cardfive.svg",
    "assets/cardsix.svg",
  ];

  const handleNextClick = () => {
    setShouldAnimate("animate__slideInRight");
    setActiveIndex((prevIndex) => {
      if (prevIndex + 3 >= items.length) {
        return 0;
      }
      return prevIndex + 1;
    });
  };

  const handlePreviousClick = () => {
    setShouldAnimate("animate__slideInLeft");
    setActiveIndex((prevIndex) => {
      if (prevIndex === 0) {
        return items.length - 3;
      }
      return prevIndex - 1;
    });
  };

  const handleIndicatorClick = (index) => {
    setShouldAnimate("");
    setActiveIndex(index);
  };

  const renderCarouselItems = () => {
    const endIndex = activeIndex + 3;
    return (
      <div className="carousel__card">
        {items.slice(activeIndex, endIndex).map((item, index) => (
          <img
            key={index}
            src={item}
            alt={`Card ${index + 1}`}
            width="32%"
            className={`animate__animated ${shouldAnimate}`}
          />
        ))}
      </div>
    );
  };

  const renderCarouselIndicators = () => {
    return (
      <ol className="carousel-indicators">
        {items.map((_, index) => (
          <li
            key={index}
            className={`indicator ${index === activeIndex ? "active" : ""}`}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </ol>
    );
  };

  React.useEffect(() => {
    const handleAnimationEnd = () => {
      setShouldAnimate(false);
    };

    const carouselItems = document.querySelectorAll(".carousel__card img");
    carouselItems.forEach((item) => {
      item.addEventListener("animationend", handleAnimationEnd);
    });

    return () => {
      carouselItems.forEach((item) => {
        item.removeEventListener("animationend", handleAnimationEnd);
      });
    };
  }, []);

  return (
    <section className="carousel__container__fluid section__six">
      <div className="carousel__container">
        <h4 className="carousel__header">
          Study your market to make informed decisions
        </h4>
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel__indicator"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">{renderCarouselItems()}</div>

          {renderCarouselIndicators()}

          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="prev"
            onClick={handlePreviousClick}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-bs-slide="next"
            onClick={handleNextClick}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const GetStarted = () => {
  return (
    <div className="get__started__container">
      <div className="get__started__banner__left">
        <h3 className="get__started__header__three animate__animated animate__fadeInDown">
          Get started with Rita Today
        </h3>
        <p className="text animate__animated animate__fadeInDown">
          Explore how the next generation of customers and competitor analytics
          will drive your growth
        </p>
      </div>
      <div className="get__started__banner__right">
        <a
          className="btn btn-primary btn-book-demo"
          href="https://calendly.com/johnarts/chat?month=2023-06"
          target="_blank"
        >
          Book a Demo
        </a>
      </div>
    </div>
  );
};

const SectionSeven = () => (
  <section
    id=""
    className="section__seven__container animate__animated animate__fadeIn"
  >
    <p className="section__seven__text">
      "Holistic view of our customer journey has brought to light behaviours and
      patterns that even our customers are unaware of"
    </p>
  </section>
);

const FooterSection = () => {
  return (
    <div className="footer__container">
      <div className="footer__content">
        <div className="header__left">
          <a href="#">
            <img
              src="assets/logo_final.png"
              alt="Logo"
              className="d-inline-block align-top"
            />
          </a>
          <p className="footer__section__text">Your data in your pocket</p>
          <div className="socials__container">
            <img src="assets/insta.svg" alt="socials" />
            <img src="assets/twitter.svg" alt="socials" />
            <img src="assets/linkedin.svg" alt="socials" />
          </div>
        </div>
        {/* <button className="btn btn-primary btn-access-platform"> */}
        <a
          href="https://pz4vmmqvaka.typeform.com/to/f572NX4A"
          className="btn-access-platform"
          id="request-demo"
          target="_blank"
        >
          Access Platform
        </a>
        {/* </button> */}
      </div>
      <div className="separator"></div>
      <div className="copyright__container">
        <p className="footer__section__text">&copy; Rita Data BV 2022</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="">
      <Header />
      <Banner />
      <HeaderSection
        title={`"${`We've gained remarkable insights since working with Rita.`}"`}
        subtitle="Stefan Platteau, Head of Analytics at Hellofresh"
        logo={<img src="assets/hello_fresh.svg" alt="Logo" width="10%" />}
        gradient__one="gradient__one"
      />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <HeaderSection
        title={`"${`We've gained remarkable insights since working with Rita.`}"`}
        subtitle="Nyssa Packard, Research and Data Lead at Skyscanner"
        logo=""
      />
      <GetStarted />
      <SectionSeven />
      <FooterSection />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
