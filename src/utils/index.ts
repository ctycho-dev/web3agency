
export const scrollToSection = (section: string, offset: number = 0) => {
    const faqSection = document.getElementById(section);
    if (faqSection) {
        const elementPosition = faqSection.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};