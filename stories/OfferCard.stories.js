import React from "react";

import OfferCard from "../src/OfferCard";

import "./css-lib.css";

export default {
  title: "Offer/OfferCard",
  component: OfferCard,
  argTypes: {
    title: {
      controle: {
        type: "string",
      },
    },
    blackCard: {
      control: {
        type: "boolean",
      },
    },
    enabledAmenities: {
      control: {
        type: "array",
      },
    },
    disabledAmenities: {
      control: {
        type: "array",
      },
    },
  },
};

const Template = (args) => <OfferCard {...args} />;

export const BlackCard = Template.bind({});
BlackCard.args = {
  title: "PF BLACK CARD®",
  blackCard: true,
  enabledAmenities: [
    "Unlimited access to home club",
    "Free fitness training",
    "Free WiFi in the club",
    "PF+ Digital Workouts",
    "Use of Any Planet Fitness Worldwide",
    "Bring a Guest Anytime",
    "Plus much more",
  ],
  disabledAmenities: [
    "Unlimited access to home club",
    "Free fitness training",
    "Free WiFi in the club",
    "PF+ Digital Workouts",
    "Use of Any Planet Fitness Worldwide",
    "Bring a Guest Anytime",
    "Plus much more",
  ],
};

export const Classic = Template.bind({});
Classic.args = {
  title: "CLASSIC",
  blackCard: false,
};
