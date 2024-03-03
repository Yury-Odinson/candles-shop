export const ScrollToTop = () => {

    const scroll = () => {
        return (
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        )
    };

    return (
        <button className="scrollToTop" onClick={scroll}/>
    )
};
