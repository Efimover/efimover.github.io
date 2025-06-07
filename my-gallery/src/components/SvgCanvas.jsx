import React, { useEffect } from "react";
import '../svgStyles.css';

const SvgCanvas = () => {
    useEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ff6600";
        ctx.fillRect(10, 10, 100, 100);

        const circle = document.getElementById("circle");
        circle.addEventListener("click", () => {
            circle.setAttribute("fill", "green");
            circle.classList.add("bounce"); // animace
        });
    }, []);

    return (
        <div className="svg-canvas">
            <canvas id="canvas" width="300" height="150"></canvas>
            <svg width="100" height="100">
                <circle cx="50" cy="50" r="40" fill="orange" id="circle" className="moving-circle"/>
            </svg>
        </div>
    );
};

export default SvgCanvas;
