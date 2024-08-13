import { gsap } from "gsap";

const animation = () => {
  const image = document.querySelector("#image img");

  const mm = gsap.matchMedia();

  mm.add("(min-width: 800px)", () => {
    const tl = gsap.timeline({ repeat: -1 });

    // Add animations to the timeline
    tl.from(image, {
      duration: 4,
      transformOrigin: "25% 40%",
      scale: 4,
    })
      .to(image, {
        duration: 4,
        scale: 4,
        x: "-80%",
      })
      .to(image, {
        duration: 4,
        scale: 1,
        x: "0%",
        transformOrigin: "50% 50%", // Adjust as needed for the original transform origin
      });
    tl.to(image, {
      duration: 4,
      transformOrigin: "25% 40%",
      scale: 4,
    });
  });
  mm.add("(max-width: 799px)", () => {
    const tl = gsap.timeline({ repeat: -1 });

    // Add animations to the timeline
    tl.from(image, {
      duration: 4,
      transformOrigin: "25% 40%",
      scale: 4,
    })
      .to(image, {
        duration: 4,
        scale: 4,
        x: "-18vw",
      })
      .to(image, {
        duration: 4,
        scale: 1,
        x: "0%",
        transformOrigin: "50% 50%", // Adjust as needed for the original transform origin
      });
    tl.to(image, {
      duration: 4,
      transformOrigin: "25% 40%",
      scale: 4,
    });
  });
  // Select the image element
  // Change the selector to match your image element

  // Create a GSAP timeline
};
export { animation };
