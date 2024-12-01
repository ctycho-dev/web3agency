import { FC, useEffect } from "react";

import Header from "../components/header";
import MainSection from "../components/mainSection/mainSection";
import MainSectionBg from "../components/mainSection/MainSectionBg";
import TrustedBy from "../components/trustedBy";
import ServicesSection from "../components/servicesSection/servicesSection";
import FeaturesSection from "../components/featuresSection";
import ReviewSection from "../components/reviewSction/reviewSection";
import StatsSection from "../components/statsSection";
import FAQsSection from "../components/faqSection/faq";
import Footer from "../components/footer";


const Home: FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Header />

            <MainSection />
            <MainSectionBg />
            <TrustedBy />

            <ServicesSection />

            <FeaturesSection />
            <ReviewSection />

            <StatsSection />

            <FAQsSection />

            <Footer />
        </>
    );
};

export default Home;
