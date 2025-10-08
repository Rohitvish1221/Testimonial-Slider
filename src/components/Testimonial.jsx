import React, { useState } from "react";
import Card from "./Card";
import Users from '../Users';

const Testimonial = () => {

  return (
    <div className="
  w-[90%]               /* takes 90% width on mobile */
  max-w-2xl             /* limits width on large screens */
  mb-10
  bg-white
  rounded
  shadow-2xl
  overflow-hidden
  p-4                   /* padding inside */
  sm:w-[80%]            /* tablet: 80% width */
  md:w-[60%]            /* medium screens: 60% width */
  lg:w-[45%]            /* large screens: 45% width */
  h-auto                /* let height adjust automatically */
">
  <Card user={Users} />
</div>

  );
};

export default Testimonial;
