import React, { useState } from "react";
import '../uploadForm.css'

const UploadForm = ({ addImage }) => {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (url && title) {
            addImage({ url, title });
            setUrl("");
            setTitle("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="upload-form">
            <h2>Přidat obrázek</h2>
            <input
                type="url"
                name="url"
                placeholder="URL obrázku"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
            />
            <input
                type="text"
                name="title"
                placeholder="Popis"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit">Nahrát</button>
        </form>
    );
};

export default UploadForm;