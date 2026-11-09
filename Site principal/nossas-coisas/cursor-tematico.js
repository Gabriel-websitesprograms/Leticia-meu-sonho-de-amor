(() => {
    const body = document.body;
    const isItalyPage = body.classList.contains("italia-body");
    const isTravelAgencyPage = body.classList.contains("world-travel-body");
    const supportsCustomCursor = window.matchMedia("(hover: hover) and (pointer: fine)");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if ((!isItalyPage && !isTravelAgencyPage) || !supportsCustomCursor.matches || prefersReducedMotion.matches) return;

    const cursor = document.createElement("span");
    cursor.className = `themed-cursor ${isItalyPage ? "italia-cursor" : "agency-cursor"}`;
    cursor.setAttribute("aria-hidden", "true");

    if (isItalyPage) {
        const label = document.createElement("span");
        label.className = "italia-cursor-label";
        label.textContent = "ITALIA";
        cursor.append(label);
    } else {
        const plane = document.createElement("span");
        plane.className = "agency-cursor-plane";
        plane.textContent = "✈";
        const heart = document.createElement("span");
        heart.className = "agency-cursor-heart";
        heart.textContent = "♥";
        cursor.append(plane, heart);
    }

    body.append(cursor);
    body.classList.add("themed-cursor-enabled");

    const isMouseOrPen = (event) => event.pointerType === "mouse" || event.pointerType === "pen";

    document.addEventListener("pointermove", (event) => {
        if (!isMouseOrPen(event)) return;
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
        cursor.classList.add("is-visible");

        const interactiveElement = event.target instanceof Element
            ? event.target.closest("a, button, input, textarea, select, summary, [role='button']")
            : null;
        cursor.classList.toggle("is-hovering", Boolean(interactiveElement));
    }, { passive: true });

    document.addEventListener("pointerleave", (event) => {
        if (event.relatedTarget) return;
        cursor.classList.remove("is-visible", "is-hovering");
    });

    document.addEventListener("pointerdown", (event) => {
        if (!isMouseOrPen(event)) return;
        cursor.classList.add("is-clicking");
    });

    document.addEventListener("pointerup", () => cursor.classList.remove("is-clicking"));
    window.addEventListener("blur", () => cursor.classList.remove("is-visible", "is-hovering", "is-clicking"));
})();
