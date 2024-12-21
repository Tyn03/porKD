"use client";
import React, { useEffect } from "react";

const WordCloud = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/tagcanvas.js"; // Đảm bảo tệp này nằm trong thư mục public
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.TagCanvas) {
        try {
          // Cấu hình và khởi chạy TagCanvas
          window.TagCanvas.Start("myCanvas", "tags", {
            textColour: "#FF4500", // Màu mặc định
            outlineColour: "transparent", // Không viền
            reverse: true,
            depth: 1,
            maxSpeed: 0.03, // Tốc độ quay khi có chuột
            freezeActive: false,
            initial: [0.1, -0.1], // Hướng xoay mặc định
            wheelZoom: false,
            shuffleTags: true,
            zoom: 1,
            pinchZoom: true,
            fadeIn: 1000,
            clickToFront: 600,
            shape: "sphere",
            weight: true,
            weightMode: "both",
            weightSize: 1.5, // Tăng kích thước chữ (giá trị lớn hơn)
            weightFrom: "data-weight",
            interval: 20, // Điều chỉnh tốc độ quay khi không có chuột
            txtSelected: "#32CD32", // Màu xanh lá cây khi hover
            activeColour: "#32CD32", // Màu xanh lá cây khi di chuột qua
          });

          // Thêm sự kiện để dừng hoặc kích hoạt xoay khi có chuột
          const canvas = document.getElementById("myCanvas");

          canvas.addEventListener("mouseenter", () => {
            window.TagCanvas.SetSpeed("myCanvas", [0.1, -0.1]); // Tốc độ khi có chuột
          });

          canvas.addEventListener("mouseleave", () => {
            window.TagCanvas.SetSpeed("myCanvas", [0.05, 0.05]); // Tốc độ quay mặc định
          });
        } catch (e) {
          console.error("TagCanvas error", e);
        }
      } else {
        console.error("TagCanvas is not defined.");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-[600px] w-[600px] mx-auto relative">
      <canvas id="myCanvas" className="w-[700px] h-[500px]">
        <ul id="tags" className="hidden">
          <li>
            <a href="#" data-weight="9">
              React
            </a>
          </li>
          <li>
            <a href="#" data-weight="8">
              Next.js
            </a>
          </li>
          <li>
            <a href="#" data-weight="10">
              JavaScript
            </a>
          </li>
          <li>
            <a href="#" data-weight="7">
              CSS
            </a>
          </li>
          <li>
            <a href="#" data-weight="12">
              Java
            </a>
          </li>
          <li>
            <a href="#" data-weight="6">
              C
            </a>
          </li>
          <li>
            <a href="#" data-weight="11">
              Express.js
            </a>
          </li>
          <li>
            <a href="#" data-weight="8">
              Tailwind
            </a>
          </li>
          <li>
            <a href="#" data-weight="10">
              Node.js
            </a>
          </li>
          <li>
            <a href="#" data-weight="10">
              Python
            </a>
          </li>
          <li>
            <a href="#" data-weight="9">
              MongoDB
            </a>
          </li>
          <li>
            <a href="#" data-weight="10">
              Postgre SQL
            </a>
          </li>
          <li>
            <a href="#" data-weight="7">
              Git
            </a>
          </li>
          <li>
            <a href="#" data-weight="9">
              Linux
            </a>
          </li>
          <li>
            <a href="#" data-weight="9">
              Github
            </a>
          </li>
        </ul>
      </canvas>
    </div>
  );
};

export default WordCloud;
