import { useEffect } from "react";

const AboutAlfarooq = () => {
  useEffect(() => {
    // Set the background image when the component is mounted
    document.body.style.backgroundImage =
      "url('assets/images/green-background.jpg')";
    document.body.style.backgroundSize = "cover"; // Make sure the background covers the entire viewport
    document.body.style.backgroundRepeat = "no-repeat"; // Prevent the image from repeating

    // Cleanup: Reset background styles when the component is unmounted
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundRepeat = "";
    };
  }, []);

  return <p>About Alfarooq</p>;
};

export default AboutAlfarooq;
