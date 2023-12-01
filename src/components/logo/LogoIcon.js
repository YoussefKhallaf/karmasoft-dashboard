// material-ui

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoIconDark from 'assets/images/logo-icon-dark.svg';
 * import logoIcon from 'assets/images/logo-icon.svg';
 * import { ThemeMode } from 'config';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //

const LogoIcon = () => {
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoIconDark : logoIcon} alt="Mantis" width="100" />
     *
     */
    <svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>Group</title>
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="favicon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="32x32" transform="translate(-48.000000, -46.000000)">
          <g id="Group" transform="translate(48.000000, 46.000000)">
            <path
              d="M6.83769775,20.9261287 C4.19744097,13.9855491 7.12653212,5.22776696 17.5646414,0.225056677 C2.84264345,2.47719931 -7.44170602,13.3124277 6.83769775,20.9261287"
              id="Fill-1"
              fill="#8DEAFF"
            ></path>
            <path
              d="M16.6761212,4.94825274 C23.9595649,6.15266728 29.9431414,13.0293115 28.8717752,24.457292 C34.4877239,10.7361963 30.4960464,-3.4707175 16.6761212,4.94825274"
              id="Fill-4"
              fill="#24B2D3"
            ></path>
            <path
              d="M25.168617,20.6123055 C20.7685642,26.594081 11.8216777,28.8815681 1.95853564,22.8234755 C11.8336093,33.972302 26.5137342,36.7386283 25.168617,20.6123055"
              id="Fill-6"
              fill="#58D1ED"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default LogoIcon;
