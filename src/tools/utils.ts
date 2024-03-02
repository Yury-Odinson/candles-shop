// URL for candles data:

const dataURL = "https://63fb14da2027a45d8d5fb8bf.mockapi.io/candles";

// links iin the header
export const links = {
    "": "Главная",
    about: "О нас",
    contacts: "Контакты",
    reviews: "Отзывы"
};

export const getData = async () => {
    try {
        const response = await fetch(dataURL);
        return response.json();
    } catch (error) {
        console.error(error);
    }
};
