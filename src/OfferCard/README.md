# Offer Card component

## How to Use

```
import OfferCard from 'offer-card';

<OfferCard
  title="Classic"
  blackCard={false}
  enabledAmenities={[
    "Unlimited Access to Home Club",
    "Free Fitness Training",
    "NEW! PF+ Digital Workouts"
  ]}
  disabledAmenities={[
    "NEW! Full Access to the iFIT App",
    "Use of Any Planet Fitness Worldwide",
    "Bring a Guest Anytime",
    "Use of HydroMassage",
    "Use of Tanning",
    "Use of Total Body Enhancement",
    "50% Off Drinks",
    "PF Black Card® Key Tag",
    "Worldwide Travel Deals",
    "20% off at Reebok.com"
  ]}
/>

```

## Props

| name              |   type    | is required | default value |
| :---------------- | :-------: | :---------: | ------------: |
| title             | HTML node |    true     |             - |
| blackCard         |  boolean  |    false    |         false |
| enabledAmenities  | [string]  |    false    |            [] |
| disabledAmenities | [string]  |    false    |            [] |
