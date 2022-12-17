import CookieNotification from "./Sections/CookieNotification/CookieNotification";
import ContactSection from "./Sections/ContactUsSection/ContactSection";
import ContactUsForm from "./Sections/ContactUsForm/ContactUsForm";
import AboutUsSection from "./Sections/AboutUsSection/AboutUsSection";
import BannerSection from "./Sections/BannerSection/BannerSection";
import "./Landing.scss";

const LandingPage = () => {
  return (
    <div className="landing-page start-top">
      <BannerSection />
      <AboutUsSection />
      <section className="contact-form">
        <ContactUsForm page="landing" />
      </section>
      <ContactSection />
      <CookieNotification />
    </div>
  );
};

export default LandingPage;