const heroCard = document.getElementById("heroCard");

if (heroCard) {
    heroCard.addEventListener("mousemove", (event) => {
        const rect = heroCard.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 14;
        const rotateX = (0.5 - (y / rect.height)) * 14;

        heroCard.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });

    heroCard.addEventListener("mouseleave", () => {
        heroCard.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
}
