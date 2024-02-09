import { createContext, useEffect, useState } from "react";

export const bookContext = createContext([]) ; 

const BookProvider = ({ children }) => {
    const [blogs, setBlogs] = useState([]);
    const [time, setTime] = useState(0);
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then((res) => res.json())
            .then((res) => setBlogs(res))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    const addBookmark = (id, time) => {
        const currentBook = blogs.find(item => item.id === id);
        setBookmark([...bookmark, currentBook]); 
        setTime(prevTime => prevTime + time);
    };

    const removeBookmark = (id) => {
        setBookmark(bookmark.filter(item => item.id !== id));
    };

    const obj = {
        blogs,
        bookmark,
        addBookmark,
        removeBookmark,
        time
    };

    console.log(bookmark)
    console.log(time)


    return (
        <bookContext.Provider value={obj}>
            {children}
        </bookContext.Provider>
    );
};

export default BookProvider
