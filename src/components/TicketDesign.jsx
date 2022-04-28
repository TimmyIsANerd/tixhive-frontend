import React from "react";

export default function TicketDesign({
  eventName,
  eventHost,
  eventTime,
  eventDate,
  qrCode,
  ticketInfo,
  eventCategory,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="835"
      height="359"
      fill="none"
      viewBox="0 0 835 359"
    >
      <rect width="624" height="359" fill="#262626" rx="26"></rect>
      <rect width="215" height="359" x="620" fill="#FE5252" rx="26"></rect>
      <text
        fill="#fff"
        fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontSize="40"
        letterSpacing="0em"
        transform="translate(47 81)"
        style={{ whiteSpace: "pre" }}
        fontWeight="500"
      >
        <tspan x="0" y="44">
          {eventName}
        </tspan>
      </text>
      <text
        fill="#fff"
        fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontSize="27.546"
        letterSpacing="0em"
        transform="rotate(90 377.822 425.823)"
        style={{ whiteSpace: "pre" }}
        fontWeight="500"
      >
        <tspan x="0" y="30.141">
          {eventName}
        </tspan>
      </text>
      <text
        fill="#fff"
        fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontSize="25"
        letterSpacing="0em"
        transform="rotate(90 343.66 391.66)"
        style={{ whiteSpace: "pre" }}
        fontWeight="500"
      >
        <tspan x="0" y="27.75">
          {eventDate}
        </tspan>
      </text>
      <text
        fill="#fff"
        fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontSize="24"
        letterSpacing="0em"
        transform="translate(45 256)"
        style={{ whiteSpace: "pre" }}
        fontWeight="500"
      >
        <tspan x="0" y="44">
          {ticketInfo.text}
        </tspan>
      </text>
      <text
        fill="#fff"
        fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontSize="20"
        letterSpacing=".08em"
        transform="translate(47 58)"
        style={{ whiteSpace: "pre" }}
        fontWeight="500"
      >
        <tspan x="0" y="22">
          {eventHost} PRESENTS
        </tspan>
      </text>
      <text
        fill="#fff"
        fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontSize="20"
        letterSpacing=".08em"
        transform="translate(47 140)"
        style={{ whiteSpace: "pre" }}
        fontWeight="500"
      >
        <tspan x="0" y="22">
          {eventCategory}
        </tspan>
      </text>
      <text
        fill="#fff"
        fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontSize="13.773"
        letterSpacing=".08em"
        transform="rotate(90 357.507 405.508)"
        style={{ whiteSpace: "pre" }}
        fontWeight="500"
      >
        <tspan x="0" y="15.321">
          {eventCategory}
        </tspan>
      </text>
      <text
        fill="#fff"
        fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontSize="13.773"
        letterSpacing=".08em"
        transform="rotate(90 324.33 372.33)"
        style={{ whiteSpace: "pre" }}
        fontWeight="500"
      >
        <tspan x="0" y="15.321">
          {eventTime}
        </tspan>
      </text>
      <text
        fill="#fff"
        fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
        fontSize="20"
        letterSpacing=".08em"
        transform="translate(45 232)"
        style={{ whiteSpace: "pre" }}
        fontWeight="500"
      >
        <tspan x="0" y="22">
          {ticketInfo.title}
        </tspan>
      </text>
      <g clipPath="url(#clip0_17_24)">
        <path
          stroke="#FE5252"
          strokeWidth="2.892"
          d="M490.133-14.027C646.319-12.87 207.839 373.837 582.688 399M452.743-57c156.187 1.157-282.293 387.864 92.555 413.027"
        ></path>
        <path fill="url(#pattern0)" d="M490.5 229H581.5V320H490.5z"></path>
      </g>
      <defs>
        <pattern
          id="pattern0"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.00444)" xlinkHref="#image0_17_24"></use>
        </pattern>
        <clipPath id="clip0_17_24">
          <path
            fill="#fff"
            d="M0 0H332V359H0z"
            transform="translate(325)"
          ></path>
        </clipPath>
        <image
          id="image0_17_24"
          width="225"
          height="225"
          xlinkHref={qrCode}
        ></image>
      </defs>
    </svg>
  );
}
