(() => {
    const supportsCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const crest = document.querySelector(".bahia-crest-image");

    if (!supportsCustomCursor.matches || prefersReducedMotion.matches || !crest) return;

    const cursor = document.createElement("span");
    const image = document.createElement("img");
    cursor.className = "bahia-cursor";
    cursor.setAttribute("aria-hidden", "true");
    image.src = crest.currentSrc || crest.src;
    image.alt = "";
    cursor.append(image);
    document.body.append(cursor);
    document.body.classList.add("bahia-cursor-enabled");

    const isMouseOrPen = (event) => event.pointerType === "mouse" || event.pointerType === "pen";

    const moveCursor = (event) => {
        if (!isMouseOrPen(event)) return;
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
        cursor.classList.add("is-visible");

        const interactiveElement = event.target instanceof Element
            ? event.target.closest("a, button, input, textarea, select, summary, [role='button']")
            : null;
        cursor.classList.toggle("is-hovering", Boolean(interactiveElement));
    };

    document.addEventListener("pointermove", moveCursor, { passive: true });
    document.addEventListener("pointerleave", () => cursor.classList.remove("is-visible", "is-hovering"));
    document.addEventListener("pointerdown", (event) => {
        if (!isMouseOrPen(event)) return;
        cursor.classList.add("is-clicking");
        window.setTimeout(() => cursor.classList.remove("is-clicking"), 130);
    });
    window.addEventListener("blur", () => cursor.classList.remove("is-visible", "is-hovering"));
})();
