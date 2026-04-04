export function revealSection(sectionId: string) {
    const getSection = document.querySelector(`#${sectionId}`);
    if (getSection) {
        getSection.scrollIntoView({
            behavior: "smooth"
        })
    }
}