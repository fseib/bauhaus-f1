import { useState, useEffect } from "react";
// Importás tus dos exportaciones de Figma (guardalas en src/assets)
import megaDesktopImg from "./assets/desktop.png";
import megaMobileImg from "./assets/mobile.png";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función que chequea el ancho del viewport
    const handleResize = () => {
      // 768px es el estándar clásico para tablets/mobile
      setIsMobile(window.innerWidth < 768);
    };

    // Escuchamos el primer render y cada vez que cambie el tamaño de pantalla
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpieza del evento al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main style={{
      width: "100%",
      backgroundColor: "#f5f4ef", // Tu color crema base de fondo para que no haya bordes raros
      margin: 0,
      padding: 0,
      overflowX: "hidden"
    }}>
      <img
        src={isMobile ? megaMobileImg : megaDesktopImg}
        alt="2021 f1 season scrollytelling"
        decoding="sync"              // 🔥 Fuerza la decodificación síncrona inmediata
        fetchpriority="high"         // 🔥 Le da máxima prioridad de carga en el navegador
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          willChange: "transform",   // 🔥 Activa la aceleración por hardware de la GPU
          transform: "translateZ(0)" // 🔥 Fuerza al navegador a renderizar la imagen en 3D para evitar parpadeos
        }}
      />
    </main>
  );
}