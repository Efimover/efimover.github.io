import React from "react";
import '../gallery.css'

const Gallery = ({ images, deleteImage }) => (
    <div className="gallery">
        {images.length === 0 ? (
            <h2>Přidejte obrázky klíknutím na "Přidat" v horním menu</h2>
        ) : (
            images.map((img, index) => (
                <figure key={index} className="gallery-item">
                    <img src={img.url} alt={img.title} />
                    {img.title && img.title !== img.url && (
                        <figcaption>{img.title}</figcaption>
                    )}
                    <button onClick={() => deleteImage(index)}>Smazat</button>
                </figure>
            ))
        )}

    </div>
);

export default Gallery;