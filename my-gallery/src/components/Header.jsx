import React from "react";

const Header = ({ onShowUploadForm }) => (
    <header>
        <img src="/header-photo.jpg" alt="Header galerie" />
        <h1>Online Gallery</h1>
        <nav>
            <ul>
                <li>
                    <button onClick={() => onShowUploadForm(false)}>Galerie</button>
                </li>
                <li>
                    <button onClick={() => onShowUploadForm(true)}>Přidat</button>
                </li>
                {/*<li>*/}
                {/*    <button onClick={() => alert("Video sekce ještě není propojena")}>Video</button>*/}
                {/*</li>*/}
            </ul>
        </nav>
    </header>
);

export default Header;