import React from "react";
import GridSection from "./GridSection";

const Testimonials = () => {
  return (
    <div className="testimonials flex flex-col items-center gap-10">
      <h1 className="text-4xl font-bold text-black">What our customers say</h1>
      <p className="text-center text-lg w-2/3">
        "Thank you for your trust in Crypt Land! We are grateful for your
        feedback and are committed to providing the best [products/services
        offered]. Read what our clients have to say about their experience with
        us.
      </p>
      <GridSection />
    </div>
  );
};

export default Testimonials;
