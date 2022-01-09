import React from "react";

const SvgTemplate = (props) => {
  switch (props.id) {
    case "pause":
      return (
        <span className="icon">
          <svg
            className="icon__pause"
            width="38"
            height="41"
            viewBox="0 0 38 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0924 8.26923V32.7193M24.0924 8.26923V32.7193"
              stroke="#EAF0FF"
              strokeWidth="3"
            />
          </svg>
        </span>
      );
    case "arrow_next-icon":
      return (
        <span className="icon">
          <svg
            className="icon__arrow-next"
            width="30"
            height="33"
            viewBox="0 0 30 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.3606 5.92942L4.28033 4.74447C3.82797 4.39336 3.21518 4.33043 2.7009 4.58227C2.18662 4.83411 1.8606 5.35678 1.8606 5.92942H3.3606ZM3.3606 27.0589H1.8606C1.8606 27.6316 2.18662 28.1542 2.7009 28.4061C3.21518 28.6579 3.82797 28.595 4.28033 28.2439L3.3606 27.0589ZM16.9718 16.4942L17.8915 17.6791C18.2576 17.395 18.4718 16.9576 18.4718 16.4942C18.4718 16.0308 18.2576 15.5934 17.8915 15.3092L16.9718 16.4942ZM1.8606 5.92942V27.0589H4.8606V5.92942H1.8606ZM4.28033 28.2439L17.8915 17.6791L16.0521 15.3092L2.44086 25.874L4.28033 28.2439ZM17.8915 15.3092L4.28033 4.74447L2.44086 7.11436L16.0521 17.6791L17.8915 15.3092ZM25.1941 4.87294V28.1154H28.1941V4.87294H25.1941Z"
              fill="#EAF0FF"
            />
          </svg>
        </span>
      );
    case "arrow_prev_icon":
      return (
        <span className="icon">
          <svg
            className="icon_arrow-prev"
            width="30"
            height="33"
            viewBox="0 0 30 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.8241 27.0589L25.9044 28.2439C26.3567 28.595 26.9695 28.6579 27.4838 28.4061C27.9981 28.1542 28.3241 27.6316 28.3241 27.0589H26.8241ZM26.8241 5.92941H28.3241C28.3241 5.35677 27.9981 4.8341 27.4838 4.58226C26.9695 4.33042 26.3567 4.39335 25.9044 4.74446L26.8241 5.92941ZM13.213 16.4942L12.2933 15.3092C11.9272 15.5934 11.713 16.0308 11.713 16.4942C11.713 16.9576 11.9272 17.395 12.2933 17.6791L13.213 16.4942ZM28.3241 27.0589V5.92941H25.3241V27.0589H28.3241ZM25.9044 4.74446L12.2933 15.3092L14.1327 17.6791L27.7438 7.11435L25.9044 4.74446ZM12.2933 17.6791L25.9044 28.2439L27.7438 25.874L14.1327 15.3092L12.2933 17.6791ZM4.99079 28.1154V4.87293H1.99079V28.1154H4.99079Z"
              fill="#EAF0FF"
            />
          </svg>
        </span>
      );
    case "menu":
      return (
        <span className="icon">
          <svg
            className="icon__menu"
            width="25"
            height="12"
            viewBox="0 0 25 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 1.55798H24.0199" stroke="#EAF0FF" strokeWidth="2" />
            <path
              d="M0 10.0503L24.0198 10.0503"
              stroke="#EAF0FF"
              strokeWidth="2"
            />
          </svg>
        </span>
      );
    case "search":
      return (
        <span className="icon">
          <svg
            className="icon__search"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 19.8041L13.8571 14.6613M8.71429 17.2327C4.4538 17.2327 1 13.7789 1 9.51842C1 5.25794 4.4538 1.80414 8.71429 1.80414C12.9748 1.80414 16.4286 5.25794 16.4286 9.51842C16.4286 13.7789 12.9748 17.2327 8.71429 17.2327Z"
              stroke=""
              strokeWidth="2"
            />
          </svg>
        </span>
      );
    case "mixer":
      return (
        <span className="icon">
          <svg
            className="icon__mixer"
            width="33"
            height="31"
            viewBox="0 0 33 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_2491)">
              <path
                d="M28.8907 5.98934L15.2907 5.98934M15.2907 5.98934C15.2907 4.22203 13.8581 2.78934 12.0907 2.78934C10.3234 2.78934 8.89075 4.22203 8.89075 5.98934M15.2907 5.98934C15.2907 7.75665 13.8581 9.18934 12.0907 9.18934C10.3234 9.18934 8.89075 7.75665 8.89075 5.98934M8.89075 5.98934L4.89075 5.98934M28.8907 18.7893L24.8907 18.7893M24.8907 18.7893C24.8907 17.022 23.4581 15.5893 21.6907 15.5893C19.9234 15.5893 18.4907 17.022 18.4907 18.7893M24.8907 18.7893C24.8907 20.5566 23.4581 21.9893 21.6907 21.9893C19.9234 21.9893 18.4907 20.5566 18.4907 18.7893M18.4907 18.7893L4.89075 18.7893"
                stroke="#EAF0FF"
                strokeWidth="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_2491"
                x="0.890747"
                y="0.389343"
                width="32"
                height="32"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_2491"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_2491"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
      );
    case "arrow-back":
      return (
        <span className="icon">
          <svg
            className="icon__arrow-back"
            width="30"
            height="29"
            viewBox="0 0 30 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_2672)">
              <path
                d="M5.99225 12.9894L12.3922 6.58939M5.99225 12.9894L12.3922 19.3894M5.99225 12.9894H25.9922"
                stroke="#EAF0FF"
                strokeWidth="2"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_2672"
                x="-0.407776"
                y="0.98938"
                width="32"
                height="32"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_2672"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_2672"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </span>
      );
    case "volume":
      return (
        <span className="icon">
          <svg
            className="icon__volume"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.4628 14.2166L5.84848 13.5734L5.67042 13.4666H5.4628V14.2166ZM5.4628 6.22185V6.97185H5.67042L5.84848 6.86508L5.4628 6.22185ZM12.1295 2.22446H12.8795C12.8795 1.95429 12.7342 1.705 12.4991 1.57186C12.264 1.43872 11.9755 1.44229 11.7438 1.58123L12.1295 2.22446ZM12.1295 18.214L11.7438 18.8573C11.9755 18.9962 12.264 18.9998 12.4991 18.8666C12.7342 18.7335 12.8795 18.4842 12.8795 18.214H12.1295ZM5.4628 13.4666H2.79613V14.9666H5.4628V13.4666ZM2.79613 13.4666C2.47339 13.4666 2.2128 13.2059 2.2128 12.8842H0.712795C0.712795 14.0362 1.64686 14.9666 2.79613 14.9666V13.4666ZM2.2128 12.8842V7.55431H0.712795V12.8842H2.2128ZM2.2128 7.55431C2.2128 7.23262 2.47339 6.97185 2.79613 6.97185V5.47185C1.64686 5.47185 0.712795 6.4023 0.712795 7.55431H2.2128ZM2.79613 6.97185H5.4628V5.47185H2.79613V6.97185ZM5.84848 6.86508L12.5151 2.86769L11.7438 1.58123L5.07711 5.57862L5.84848 6.86508ZM11.3795 2.22446V18.214H12.8795V2.22446H11.3795ZM12.5151 17.5708L5.84848 13.5734L5.07711 14.8599L11.7438 18.8573L12.5151 17.5708ZM14.0461 8.22446V12.2245H15.5461V8.22446H14.0461Z"
              fill="#8996B8"
              fillOpacity="0.6"
            />
          </svg>
        </span>
      );
    case "repeat":
      return (
        <span className="icon">
          <svg
            className="icon__repeat"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.62995 6.05779H14.9633V7.54946C14.9633 7.92446 15.4133 8.10779 15.6716 7.84112L17.9966 5.51612C18.1633 5.34946 18.1633 5.09112 17.9966 4.92446L15.6716 2.59946C15.6129 2.54187 15.5384 2.50296 15.4576 2.48764C15.3767 2.47231 15.2932 2.48125 15.2174 2.51334C15.1417 2.54542 15.0771 2.5992 15.0319 2.66792C14.9867 2.73663 14.9628 2.81719 14.9633 2.89946V4.39112H5.79662C5.33829 4.39112 4.96329 4.76612 4.96329 5.22446V8.55779C4.96329 9.01612 5.33829 9.39112 5.79662 9.39112C6.25495 9.39112 6.62995 9.01612 6.62995 8.55779V6.05779ZM14.9633 14.3911H6.62995V12.8995C6.62995 12.5245 6.17995 12.3411 5.92162 12.6078L3.59662 14.9328C3.42995 15.0995 3.42995 15.3578 3.59662 15.5245L5.92162 17.8495C5.98036 17.907 6.05484 17.9459 6.13567 17.9613C6.21649 17.9766 6.30004 17.9677 6.37579 17.9356C6.45154 17.9035 6.5161 17.8497 6.56133 17.781C6.60656 17.7123 6.63043 17.6317 6.62995 17.5495V16.0578H15.7966C16.2549 16.0578 16.6299 15.6828 16.6299 15.2245V11.8911C16.6299 11.4328 16.2549 11.0578 15.7966 11.0578C15.3383 11.0578 14.9633 11.4328 14.9633 11.8911V14.3911Z"
              fill="#8996B8"
              fillOpacity="0.6"
            />
          </svg>
        </span>
      );
    case "oder":
      return (
        <span className="icon">
          <svg
            className="icon__oder"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.1961 7.98279C15.1961 8.2038 15.2839 8.41577 15.4402 8.57205C15.5965 8.72833 15.8084 8.81612 16.0294 8.81612C16.2504 8.81612 16.4624 8.72833 16.6187 8.57205C16.775 8.41577 16.8628 8.2038 16.8628 7.98279V4.39112C16.8628 4.17011 16.775 3.95815 16.6187 3.80187C16.4624 3.64559 16.2504 3.55779 16.0294 3.55779H12.4461C12.2251 3.55779 12.0131 3.64559 11.8568 3.80187C11.7006 3.95815 11.6128 4.17011 11.6128 4.39112C11.6128 4.61214 11.7006 4.8241 11.8568 4.98038C12.0131 5.13666 12.2251 5.22446 12.4461 5.22446H14.0211L10.1961 9.04946L5.32943 4.19112C5.17001 4.0546 4.96495 3.98326 4.75522 3.99136C4.54549 3.99947 4.34654 4.08641 4.19813 4.23482C4.04971 4.38323 3.96277 4.58218 3.95467 4.79191C3.94657 5.00164 4.01791 5.20671 4.15443 5.36612L9.01276 10.2245L3.7711 15.4661C3.69299 15.5436 3.63099 15.6358 3.58869 15.7373C3.54638 15.8389 3.5246 15.9478 3.5246 16.0578C3.5246 16.1678 3.54638 16.2767 3.58869 16.3783C3.63099 16.4798 3.69299 16.572 3.7711 16.6495C3.84856 16.7276 3.94073 16.7896 4.04228 16.8319C4.14383 16.8742 4.25275 16.896 4.36276 16.896C4.47277 16.896 4.58169 16.8742 4.68324 16.8319C4.78479 16.7896 4.87696 16.7276 4.95443 16.6495L15.1961 6.40779V7.98279Z"
              fill="#8996B8"
              fillOpacity="0.6"
            />
            <path
              d="M16.0294 11.6245C15.8084 11.6245 15.5965 11.7123 15.4402 11.8685C15.2839 12.0248 15.1961 12.2368 15.1961 12.4578V14.0495L12.8794 11.7245C12.7225 11.5675 12.5097 11.4794 12.2878 11.4794C12.0658 11.4794 11.853 11.5675 11.6961 11.7245C11.5392 11.8814 11.451 12.0942 11.451 12.3161C11.451 12.538 11.5392 12.7509 11.6961 12.9078L14.0044 15.2245H12.4378C12.2167 15.2245 12.0048 15.3123 11.8485 15.4685C11.6922 15.6248 11.6044 15.8368 11.6044 16.0578C11.6044 16.2788 11.6922 16.4908 11.8485 16.647C12.0048 16.8033 12.2167 16.8911 12.4378 16.8911H16.0294C16.147 16.8918 16.2634 16.8677 16.371 16.8202C16.4786 16.7727 16.5749 16.703 16.6536 16.6156C16.7323 16.5282 16.7917 16.4252 16.8277 16.3132C16.8638 16.2013 16.8757 16.083 16.8628 15.9661V12.4578C16.8628 12.2368 16.775 12.0248 16.6187 11.8685C16.4624 11.7123 16.2504 11.6245 16.0294 11.6245Z"
              fill="#8996B8"
              fillOpacity="0.6"
            />
          </svg>
        </span>
      );
    case "like":
      return (
        <span className="icon">
          <svg
            className="icon__like"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.59226 16.4308L8.88515 17.1379C9.07269 17.3255 9.32704 17.4308 9.59226 17.4308C9.85748 17.4308 10.1118 17.3255 10.2994 17.1379L9.59226 16.4308ZM2.4349 9.27345L1.72779 9.98055L1.72779 9.98055L2.4349 9.27345ZM8.4349 3.27345L7.72779 3.98056L7.72779 3.98056L8.4349 3.27345ZM9.59226 4.43081L8.88515 5.13791C9.07269 5.32545 9.32704 5.43081 9.59226 5.43081C9.85748 5.43081 10.1118 5.32545 10.2994 5.13791L9.59226 4.43081ZM10.7496 3.27345L10.0425 2.56634L10.0425 2.56634L10.7496 3.27345ZM10.2994 15.7237L3.14201 8.56634L1.72779 9.98055L8.88515 17.1379L10.2994 15.7237ZM16.0425 8.56634L8.88515 15.7237L10.2994 17.1379L17.4567 9.98056L16.0425 8.56634ZM7.72779 3.98056L8.88515 5.13791L10.2994 3.7237L9.14201 2.56634L7.72779 3.98056ZM10.2994 5.13791L11.4567 3.98055L10.0425 2.56634L8.88515 3.7237L10.2994 5.13791ZM13.7496 1.03081C12.3592 1.03081 11.0257 1.58316 10.0425 2.56634L11.4567 3.98055C12.0648 3.37244 12.8896 3.03081 13.7496 3.03081V1.03081ZM16.9923 6.27345C16.9923 7.13345 16.6506 7.95823 16.0425 8.56634L17.4567 9.98056C18.4399 8.99737 18.9923 7.66388 18.9923 6.27345H16.9923ZM18.9923 6.27345C18.9923 3.37802 16.645 1.03081 13.7496 1.03081V3.03081C15.5405 3.03081 16.9923 4.48259 16.9923 6.27345H18.9923ZM5.4349 3.03081C6.2949 3.03081 7.11968 3.37244 7.72779 3.98056L9.14201 2.56634C8.15882 1.58316 6.82534 1.03081 5.4349 1.03081V3.03081ZM2.19226 6.27345C2.19226 4.48259 3.64404 3.03081 5.4349 3.03081V1.03081C2.53947 1.03081 0.192261 3.37802 0.192261 6.27345H2.19226ZM3.14201 8.56634C2.53389 7.95823 2.19226 7.13345 2.19226 6.27345H0.192261C0.192261 7.66388 0.744607 8.99737 1.72779 9.98055L3.14201 8.56634Z"
              fill=""
            />
          </svg>
        </span>
      );
    case "close":
      return (
        <span className="icon">
          <svg
            className="icon__close"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.01636 0.949158L18.001 17.9338"
              stroke="#EAF0FF"
              strokeWidth="2"
            />
            <path
              d="M1.01636 17.9337L18.001 0.949148"
              stroke="#EAF0FF"
              strokeWidth="2"
            />
          </svg>
        </span>
      );
    case "theme":
      return (
        <span className="icon">
          <svg
            className="icon__theme"
            width="25"
            height="26"
            viewBox="0 0 25 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.65747 19.1281C3.34898 19.2729 4.06574 19.3491 4.80028 19.3491C10.544 19.3491 15.2003 14.6928 15.2003 8.94906C15.2003 6.15675 14.0998 3.62147 12.309 1.75323C18.3518 1.91678 23.2002 6.86671 23.2002 12.9491C23.2002 19.1346 18.1858 24.1491 12.0002 24.1491C8.09844 24.1491 4.66266 22.1539 2.65747 19.1281Z"
              stroke="#8996B8"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      );
    case "language":
      return (
        <span className="icon">
          <svg
            className="icon__language"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.50863 7.68836V6.68836C5.95634 6.68836 5.50863 7.13608 5.50863 7.68836H6.50863ZM6.50863 9.0217L7.21573 9.7288L7.50863 9.43591V9.0217H6.50863ZM4.23248 9.41222L3.52538 10.1193L3.52538 10.1193L4.23248 9.41222ZM9.17529 17.6884H10.1753V17.2742L9.8824 16.9813L9.17529 17.6884ZM7.84196 16.355H6.84196V16.7692L7.13485 17.0621L7.84196 16.355ZM7.84196 14.355H8.84196V13.9408L8.54907 13.6479L7.84196 14.355ZM6.50863 13.0217H5.50863V13.4359L5.80152 13.7288L6.50863 13.0217ZM6.50863 11.6884V10.6884C5.95634 10.6884 5.50863 11.1361 5.50863 11.6884H6.50863ZM12.1753 1.0217V3.68836H14.1753V1.0217H12.1753ZM11.842 4.0217H10.5086V6.0217H11.842V4.0217ZM7.84196 6.68836H6.50863V8.68836H7.84196V6.68836ZM5.50863 7.68836V9.0217H7.50863V7.68836H5.50863ZM5.80152 8.31459L5.41099 8.70512L6.82521 10.1193L7.21573 9.7288L5.80152 8.31459ZM4.93959 8.70512L2.54907 6.31459L1.13485 7.7288L3.52538 10.1193L4.93959 8.70512ZM8.17529 6.35503C8.17529 6.53913 8.02605 6.68836 7.84196 6.68836V8.68836C9.13062 8.68836 10.1753 7.6437 10.1753 6.35503H8.17529ZM10.5086 4.0217C9.21996 4.0217 8.17529 5.06637 8.17529 6.35503H10.1753C10.1753 6.17094 10.3245 6.0217 10.5086 6.0217V4.0217ZM5.41099 8.70512C5.28082 8.83529 5.06977 8.83529 4.93959 8.70511L3.52538 10.1193C4.4366 11.0306 5.91398 11.0306 6.82521 10.1193L5.41099 8.70512ZM12.1753 3.68836C12.1753 3.87246 12.0261 4.0217 11.842 4.0217V6.0217C13.1306 6.0217 14.1753 4.97703 14.1753 3.68836H12.1753ZM10.1753 19.6884V17.6884H8.17529V19.6884H10.1753ZM9.8824 16.9813L8.54907 15.6479L7.13485 17.0621L8.46819 18.3955L9.8824 16.9813ZM8.84196 16.355V14.355H6.84196V16.355H8.84196ZM8.54907 13.6479L7.21573 12.3146L5.80152 13.7288L7.13485 15.0621L8.54907 13.6479ZM7.50863 13.0217V11.6884H5.50863V13.0217H7.50863ZM6.50863 12.6884H11.842V10.6884H6.50863V12.6884ZM12.1753 13.0217V13.9106H14.1753V13.0217H12.1753ZM14.9531 16.6884H18.5086V14.6884H14.9531V16.6884ZM13.5086 15.2439C13.5086 16.0417 14.1553 16.6884 14.9531 16.6884V14.6884C15.2599 14.6884 15.5086 14.9371 15.5086 15.2439H13.5086ZM13.6197 15.355C13.5584 15.355 13.5086 15.3053 13.5086 15.2439H15.5086C15.5086 14.2007 14.6629 13.355 13.6197 13.355V15.355ZM12.1753 13.9106C12.1753 14.7083 12.822 15.355 13.6197 15.355V13.355C13.9266 13.355 14.1753 13.6038 14.1753 13.9106H12.1753ZM11.842 12.6884C12.0261 12.6884 12.1753 12.8376 12.1753 13.0217H14.1753C14.1753 11.733 13.1306 10.6884 11.842 10.6884V12.6884ZM10.5086 18.6884C5.90625 18.6884 2.17529 14.9574 2.17529 10.355H0.175293C0.175293 16.062 4.80168 20.6884 10.5086 20.6884V18.6884ZM18.842 10.355C18.842 14.9574 15.111 18.6884 10.5086 18.6884V20.6884C16.2156 20.6884 20.842 16.062 20.842 10.355H18.842ZM10.5086 2.0217C15.111 2.0217 18.842 5.75266 18.842 10.355H20.842C20.842 4.64809 16.2156 0.021698 10.5086 0.021698V2.0217ZM10.5086 0.021698C4.80168 0.021698 0.175293 4.64809 0.175293 10.355H2.17529C2.17529 5.75266 5.90625 2.0217 10.5086 2.0217V0.021698Z"
              fill=""
              fillOpacity="0.6"
            />
          </svg>
        </span>
      );
    case "message":
      return (
        <span className="icon">
          <svg
            className="icon__message"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.17529 15.6788H6.17529V14.6788H5.17529V15.6788ZM5.17529 19.6762H4.17529C4.17529 20.0549 4.38923 20.4011 4.72794 20.5705C5.06665 20.7399 5.472 20.7035 5.77504 20.4764L5.17529 19.6762ZM10.5086 15.6788V14.6788H10.1755L9.90888 14.8786L10.5086 15.6788ZM6.50863 5.35155H5.50863V7.35155H6.50863V5.35155ZM14.5086 7.35155H15.5086V5.35155H14.5086V7.35155ZM6.50863 9.34894H5.50863V11.3489H6.50863V9.34894ZM11.842 11.3489H12.842V9.34894H11.842V11.3489ZM4.17529 15.6788V19.6762H6.17529V15.6788H4.17529ZM5.77504 20.4764L11.1084 16.479L9.90888 14.8786L4.57554 18.876L5.77504 20.4764ZM10.5086 16.6788H18.5086V14.6788H10.5086V16.6788ZM18.5086 16.6788C19.7976 16.6788 20.842 15.6361 20.842 14.3463H18.842C18.842 14.5303 18.6943 14.6788 18.5086 14.6788V16.6788ZM20.842 14.3463V2.35415H18.842V14.3463H20.842ZM20.842 2.35415C20.842 1.06437 19.7976 0.0217133 18.5086 0.0217133V2.02171C18.6943 2.02171 18.842 2.17022 18.842 2.35415H20.842ZM18.5086 0.0217133H2.50863V2.02171H18.5086V0.0217133ZM2.50863 0.0217133C1.21965 0.0217133 0.175293 1.06437 0.175293 2.35415H2.17529C2.17529 2.17022 2.32294 2.02171 2.50863 2.02171V0.0217133ZM0.175293 2.35415V14.3463H2.17529V2.35415H0.175293ZM0.175293 14.3463C0.175293 15.6361 1.21965 16.6788 2.50863 16.6788V14.6788C2.32294 14.6788 2.17529 14.5303 2.17529 14.3463H0.175293ZM2.50863 16.6788H5.17529V14.6788H2.50863V16.6788ZM6.50863 7.35155H14.5086V5.35155H6.50863V7.35155ZM6.50863 11.3489H11.842V9.34894H6.50863V11.3489Z"
              fill=""
              fillOpacity="0.6"
            />
          </svg>
        </span>
      );
    case "faqs":
      return (
        <span className="icon">
          <svg
            className="icon__faqs"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.94296 8.9815L6.93291 9.12292L6.93291 9.12292L5.94296 8.9815ZM5.92956 9.07531L4.93961 8.93389L4.93961 8.93389L5.92956 9.07531ZM15.0743 8.98151L16.0643 8.84009L16.0643 8.84009L15.0743 8.98151ZM15.0877 9.07531L14.0978 9.21673L14.0978 9.21674L15.0877 9.07531ZM13.1753 17.0217V18.0217C13.7276 18.0217 14.1753 17.574 14.1753 17.0217H13.1753ZM7.842 17.0217H6.842C6.842 17.574 7.28972 18.0217 7.842 18.0217V17.0217ZM6.84931 12.5589L7.64011 11.9468L6.84931 12.5589ZM14.168 12.5589L13.3772 11.9468L14.168 12.5589ZM8.50867 20.6884H12.5087V18.6884H8.50867V20.6884ZM4.95301 8.84008L4.93961 8.93389L6.91951 9.21673L6.93291 9.12292L4.95301 8.84008ZM10.5086 4.02171C7.71582 4.02171 5.34798 6.07531 4.95301 8.84008L6.93291 9.12292C7.18712 7.34346 8.71111 6.02171 10.5086 6.02171V4.02171ZM16.0643 8.84009C15.6693 6.07532 13.3015 4.02171 10.5086 4.02171V6.02171C12.3062 6.02171 13.8302 7.34346 14.0844 9.12293L16.0643 8.84009ZM16.0777 8.9339L16.0643 8.84009L14.0844 9.12292L14.0978 9.21673L16.0777 8.9339ZM14.9588 13.171C15.851 12.0183 16.3033 10.5132 16.0777 8.93389L14.0978 9.21674C14.2434 10.2361 13.9537 11.202 13.3772 11.9468L14.9588 13.171ZM12.1753 14.8901V17.0217H14.1753V14.8901H12.1753ZM13.1753 16.0217H7.842V18.0217H13.1753V16.0217ZM8.842 17.0217V14.8902H6.842V17.0217H8.842ZM4.93961 8.93389C4.714 10.5132 5.16634 12.0183 6.05852 13.171L7.64011 11.9468C7.06365 11.2021 6.77388 10.2361 6.91951 9.21673L4.93961 8.93389ZM8.842 14.8902C8.842 13.6752 8.19767 12.6672 7.64011 11.9468L6.05852 13.171C6.56039 13.8194 6.842 14.3742 6.842 14.8902H8.842ZM13.3772 11.9468C12.8197 12.6672 12.1753 13.6752 12.1753 14.8901H14.1753C14.1753 14.3742 14.4569 13.8194 14.9588 13.171L13.3772 11.9468ZM9.50867 0.355042V3.02171H11.5087V0.355042H9.50867ZM0.508667 11.355H3.17533V9.35504H0.508667V11.355ZM17.842 11.355H20.5087V9.35504H17.842V11.355ZM5.21577 4.98127L3.21577 2.98127L1.80156 4.39548L3.80156 6.39548L5.21577 4.98127ZM17.2158 6.39548L19.2158 4.39548L17.8016 2.98127L15.8016 4.98127L17.2158 6.39548Z"
              fill=""
              fillOpacity="0.6"
            />
          </svg>
        </span>
      );
    case "profile":
      return (
        <span className="icon">
          <svg
            className="icon__profile"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.5087 5.01909C14.5087 7.22698 12.718 9.01648 10.5087 9.01648C8.29937 9.01648 6.50871 7.22698 6.50871 5.01909C6.50871 2.8112 8.29937 1.0217 10.5087 1.0217C12.718 1.0217 14.5087 2.8112 14.5087 5.01909Z"
              stroke="#8996B8"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="square"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.1754 19.6762H3.84204C3.84204 18.7295 3.84204 17.8288 3.84204 17.0132C3.84204 14.8041 5.6329 13.0139 7.84204 13.0139H13.1754C15.3845 13.0139 17.1754 14.8041 17.1754 17.0132C17.1754 17.8288 17.1754 18.7295 17.1754 19.6762Z"
              stroke="#8996B8"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </span>
      );
    case "main-settings":
      return (
        <span className="icon">
          <svg
            className="icon__main-settings"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.43396 1.02171L8.31929 1.60398L7.88064 3.7346C7.1793 4.00242 6.54329 4.38221 5.96863 4.83258L3.82463 4.1157L3.24864 3.93715L2.94997 4.45147L1.47396 6.91917L1.17529 7.43357L1.61263 7.81598L3.2713 9.22703C3.2113 9.59612 3.13397 9.96119 3.13397 10.3489C3.13397 10.7367 3.2113 11.1018 3.2713 11.4709L1.61263 12.882L1.17529 13.2644L1.47396 13.7787L2.94997 16.2465L3.24864 16.7621L3.82463 16.5823L5.96863 15.8654C6.54329 16.3157 7.1793 16.6955 7.88064 16.9633L8.31929 19.0939L8.43396 19.6762H12.582L12.698 19.0939L13.1353 16.9633C13.8366 16.6955 14.4726 16.3157 15.0473 15.8654L17.1913 16.5823L17.7673 16.7621L18.0673 16.2465L19.542 13.7787L19.842 13.2644L19.4033 12.882L17.7446 11.4709C17.806 11.1018 17.882 10.7367 17.882 10.3489C17.882 9.96119 17.806 9.59612 17.7446 9.22703L19.4033 7.81598L19.842 7.43357L19.542 6.91917L18.0673 4.45147L17.7673 3.93715L17.1913 4.1157L15.0473 4.83258C14.4726 4.38221 13.8366 4.00242 13.1353 3.7346L12.698 1.60398L12.582 1.02171H8.43396Z"
              stroke=""
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1748 10.3489C13.1748 11.82 11.9801 13.0139 10.5081 13.0139C9.03614 13.0139 7.84147 11.82 7.84147 10.3489C7.84147 8.8779 9.03614 7.68406 10.5081 7.68406C11.9801 7.68406 13.1748 8.8779 13.1748 10.3489Z"
              stroke=""
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeLinecap="square"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      );
    default:
      return <svg className="empty"></svg>;
  }
};

export default SvgTemplate;
