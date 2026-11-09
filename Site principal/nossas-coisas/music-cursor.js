(() => {
    const supportsCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!supportsCustomCursor.matches || prefersReducedMotion.matches) return;

    const cursor = document.createElement("span");
    cursor.className = "music-cursor";
    cursor.setAttribute("aria-hidden", "true");
    cursor.textContent = "♫";
    document.body.append(cursor);
    document.body.classList.add("music-cursor-enabled");

    const isMouseOrPen = (event) => event.pointerType === "mouse" || event.pointerType === "pen";

    document.addEventListener("pointermove", (event) => {
        if (!isMouseOrPen(event)) return;
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
        cursor.classList.add("is-visible");

        const interactiveElement = event.target instanceof Element
            ? event.target.closest("a, button, input, textarea, select, summary, [role='button'], audio")
            : null;
        cursor.classList.toggle("is-hovering", Boolean(interactiveElement));
    }, { passive: true });

    document.addEventListener("pointerleave", (event) => {
        if (event.relatedTarget) return;
        cursor.classList.remove("is-visible", "is-hovering");
    });

    document.addEventListener("pointerdown", (event) => {
        if (!isMouseOrPen(event)) return;
        cursor.classList.remove("is-clicking");
        void cursor.offsetWidth;
        cursor.classList.add("is-clicking");
    });

    cursor.addEventListener("animationend", () => cursor.classList.remove("is-clicking"));
    window.addEventListener("blur", () => cursor.classList.remove("is-visible", "is-hovering", "is-clicking"));
})();
