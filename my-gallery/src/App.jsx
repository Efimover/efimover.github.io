import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import UploadForm from "./components/UploadForm";
import VideoPlayer from "./components/VideoPlayer";
import SvgCanvas from "./components/SvgCanvas";
import Header from "./components/Header";
import "./models/imageModel.js";
import './styles.css';

function App() {
    const [images, setImages] = useState([]);
    const [showUploadForm, setShowUploadForm] = useState(false);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("images")) || [];
        setImages(stored);

        // Inicializace view podle URL
        if (window.location.pathname === "/add") {
            setShowUploadForm(true);
        }

        // Reakce na zpět/vpřed
        const handlePopState = () => {
            setShowUploadForm(window.location.pathname === "/add");
        };
        window.addEventListener("popstate", handlePopState);

        return () => window.removeEventListener("popstate", handlePopState);
    }, []);

    const handleShowUploadForm = (show) => {
        setShowUploadForm(show);
        const newPath = show ? "/add" : "/";
        window.history.pushState({}, "", newPath);
    };

    const addImage = (image) => {
        const ImageItem = window.MyApp?.ImageItem;
        const newImage = new ImageItem(image.url, image.title); // objekt s prototypem

        const updated = [...images, newImage];
        setImages(updated);
        localStorage.setItem("images", JSON.stringify(updated));
        handleShowUploadForm(false);
    };

    const deleteImage = (index) => {
        const updated = images.filter((_, i) => i !== index);
        setImages(updated);
        localStorage.setItem("images", JSON.stringify(updated));
    };

    return (
        <div className="app">
            <Header onShowUploadForm={handleShowUploadForm} />
            <main>
                {showUploadForm ? (
                    <section id="formular">
                        <SvgCanvas />
                        <UploadForm addImage={addImage} />
                        <VideoPlayer />
                    </section>
                ) : (
                    <>
                        <section id="svg">
                            <SvgCanvas />
                            <Gallery images={images} deleteImage={deleteImage} />
                        </section>
                        <section id="video">
                            <VideoPlayer />
                        </section>
                    </>
                )}
            </main>
        </div>
    );
}

export default App;
