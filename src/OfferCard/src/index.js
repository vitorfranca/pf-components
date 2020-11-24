import React from "react";
import PropTypes from "prop-types";

const OfferCard = ({
  title,
  blackCard,
  enabledAmenities,
  disabledAmenities,
}) => {
  return (
    <div class={`pf-offercard${blackCard ? "-bc" : ""}`}>
      <h2
        id="card-title-pfx:offers:7c145dbd-7077-11ea-990c-6a14b25803f1"
        class="pf-offercard-title pf-heading-md"
      >
        <span>{title}</span>
      </h2>
      <div class="pf-offercard-price-section">
        <div class="pf-offercard-subtitle pf-body-sm">No Commitment!</div>
        <div class="pf-offercard-description pf-body-sm">
          All the Perks, Now with PF+
        </div>
        <div class="pf-offercard-price-container">
          <div class="pf-price">
            <span class="pf-sup">$</span>
            <span class="pf-amount" aria-label="24.99 per month">
              24.99
            </span>
            <span aria-hidden="true" class="pf-sub">
              /mo
            </span>
          </div>
          <div class="pf-body-xxs">plus taxes and fees</div>
        </div>
        <div class="pf-offercard-btn-container">
          <button class="pf-btn">Select</button>
        </div>
        <div class="pf-body-xxs">Offer Expires December 16th, 2021</div>
      </div>
      <div class="pf-offercard-amenities-section">
        <div class="pf-offercard-details">
          <div>
            <div class="pf-subheading-lg">What you get</div>
          </div>
          <ul aria-label="Amenities list" class="pf-offercard-list">
            {enabledAmenities.map((amenity) => (
              <li>
                <div class="pf-offercard-list-item">
                  <div>
                    <svg class="pf-icon-sm pf-icon-check">
                      <use xlinkHref="#pf-icon-check"></use>
                    </svg>
                  </div>
                  <span aria-hidden="false">{amenity}</span>
                </div>
              </li>
            ))}
            {disabledAmenities.map((amenity) => (
              <li>
                <div class="pf-offercard-list-item">
                  <span
                    class="pf-offercard-list-item-disabled"
                    aria-hidden="false"
                  >
                    {amenity}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="pf-offercard-fees-section">
        <div class="pf-offercard-details">
          <div class="pf-subheading-lg">How you get it</div>
          <div class="pf-offercard-fee-container">
            <div class="pf-offercard-fee">
              <span class="pf-offercard-fee-description">Startup Fee</span>
              <span class="pf-price">$1</span>
            </div>
            <div class="pf-offercard-fee">
              <span class="pf-offercard-fee-description">Monthly Dues</span>
              <span class="pf-price">$24.99</span>
            </div>
            <div class="pf-offercard-fee">
              <span class="pf-offercard-fee-description">Annual Fee</span>
              <span class="pf-price">$39</span>
            </div>
            <div class="pf-offercard-fee">
              <span class="pf-offercard-fee-description">Commitment</span>
              <span class="pf-price">no</span>
            </div>
          </div>
        </div>
      </div>
      <p class="pf-offercard-fineprint pf-body-xxs">
        Plus applicable taxes. Billed monthly to a checking account. Rate
        Guarantee Fee of $39.00 plus applicable taxes will be billed on or
        shortly after January 1st. State and local restrictions on tanning
        frequency apply. This offer has no commitment.
      </p>
    </div>
  );
};

export default OfferCard;

OfferCard.PropTypes = {
  title: PropTypes.node.isRequired,
  blackCard: PropTypes.bool,
  enabledAmenities: PropTypes.arrayOf(PropTypes.string),
  disabledAmenities: PropTypes.arrayOf(PropTypes.string),
};

OfferCard.defaultProps = {
  blackCard: false,
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
