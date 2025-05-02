function VerifyAnchors() {
  const anchors = document.querySelectorAll("a");

  anchors.forEach((anchor, index) => {
    const href = anchor.getAttribute("href");
    const target = anchor.getAttribute("target");
    const text = anchor.textContent;

    switch (true) {
      case href && target === "_blank":
        console.log(
          `Anchor ${
            index + 1
          }: Yes (Valid href - "${href}") - Opens in a new window - Anchor Text: "${text}"`
        );
        break;

      case href && !target:
        console.warn(
          `Anchor ${
            index + 1
          }: Yes (Valid href - "${href}") - Opens in the same window - Anchor  Text: "${text}"`
        );
        break;

      default:
        console.error(
          `Anchor ${
            index + 1
          }: Missing href and add target parameter if not added - ${
            anchor.outerHTML
          } - Anchor Text: "${text}"`
        );
    }
  });
}

VerifyAnchors();
