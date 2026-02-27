/**
 * scrollNav.js - Manejo de navegación con barra flotante
 * Versión mejorada con verificaciones de existencia de elementos
 */

document.addEventListener("DOMContentLoaded", () => {
    // Obtener referencias a los elementos del navbar
    const floatNav = document.getElementById("navbar-float");
    const mainNav = document.getElementById("navbar-main");

    // VERIFICACIÓN IMPORTANTE: Si los elementos no existen, salimos sin error
    if (!floatNav || !mainNav) {
        console.warn("No se encontraron los elementos de navegación necesarios. El script no se ejecutará.");
        return; // Esto evita el error "Cannot read properties of null"
    }

    // Configuración de scroll
    const hideStart = 80;        // Píxeles desde el inicio donde la navbar principal comienza a ocultarse
    const deadZone = 300;        // Zona muerta antes de que aparezca la navbar flotante
    const appearPoint = hideStart + deadZone; // Punto donde aparece la navbar flotante

    // Variable para controlar el estado anterior y evitar operaciones innecesarias
    let lastY = 0;

    // Función para manejar el scroll
    function handleScroll() {
        const y = window.scrollY || window.pageYOffset;
        
        // Solo actualizar si el scroll cambió significativamente
        if (Math.abs(y - lastY) < 5) return;
        lastY = y;

        try {
            if (y >= appearPoint) {
                // Cuando el scroll pasa el punto de aparición
                floatNav.classList.add("visible");
                mainNav.classList.add("hidden");
            } else {
                // Cuando el scroll está arriba del punto de aparición
                floatNav.classList.remove("visible");
                mainNav.classList.remove("hidden");
            }
        } catch (error) {
            console.error("Error al manipular las clases del navbar:", error);
        }
    }

    // Agregar el evento de scroll con optimización (passive para mejor rendimiento)
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Ejecutar una vez al inicio para establecer el estado correcto
    handleScroll();

    console.log("✅ Script de navegación inicializado correctamente");
});