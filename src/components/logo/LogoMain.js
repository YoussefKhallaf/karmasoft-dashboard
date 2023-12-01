import PropTypes from 'prop-types';

// material-ui

// project-import

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const LogoMain = () => {
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoDark : logo} alt="Mantis" width="100" />
     *
     */
    <>
      <svg width="182" height="64" viewBox="0 0 182 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.4338 35.2156C5.74826 30.7847 7.61819 25.1937 14.2819 22C4.88336 23.4378 -1.68217 30.355 7.4338 35.2156Z"
          fill="#8DEAFF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.7146 25.0152C18.3643 25.7841 22.1843 30.1742 21.5003 37.4698C25.0855 28.7103 22.5372 19.6406 13.7146 25.0152Z"
          fill="#24B2D3"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.1362 35.0152C16.3272 38.834 10.6155 40.2943 4.31885 36.4268C10.6231 43.5442 19.9949 45.3102 19.1362 35.0152Z"
          fill="#58D1ED"
        />
        <path
          d="M34.8853 25.0922V37.889H32.2485V25.0922H34.8853ZM42.5493 25.0922L37.478 31.4115L34.5513 34.558L34.0767 32.0619L36.0542 29.3549L39.3149 25.0922H42.5493ZM39.5522 37.889L35.7817 31.974L37.7329 30.3392L42.6724 37.889H39.5522ZM48.6665 35.7445V31.5082C48.6665 31.2035 48.6167 30.9427 48.5171 30.726C48.4175 30.5033 48.2622 30.3304 48.0513 30.2074C47.8462 30.0844 47.5796 30.0228 47.2515 30.0228C46.9702 30.0228 46.7271 30.0726 46.522 30.1722C46.3169 30.266 46.1587 30.4037 46.0474 30.5853C45.936 30.7611 45.8804 30.9691 45.8804 31.2094H43.3491C43.3491 30.8051 43.4429 30.4213 43.6304 30.058C43.8179 29.6947 44.0903 29.3754 44.4478 29.1C44.8052 28.8187 45.23 28.599 45.7222 28.4408C46.2202 28.2826 46.7769 28.2035 47.3921 28.2035C48.1304 28.2035 48.7866 28.3265 49.3608 28.5726C49.9351 28.8187 50.3862 29.1879 50.7144 29.6801C51.0483 30.1722 51.2153 30.7875 51.2153 31.5258V35.5951C51.2153 36.1166 51.2476 36.5443 51.312 36.8783C51.3765 37.2064 51.4702 37.4935 51.5933 37.7396V37.889H49.0356C48.9126 37.6312 48.8188 37.309 48.7544 36.9222C48.6958 36.5297 48.6665 36.1371 48.6665 35.7445ZM49.0005 32.097L49.0181 33.5297H47.603C47.269 33.5297 46.979 33.5677 46.7329 33.6439C46.4868 33.7201 46.2847 33.8285 46.1265 33.9691C45.9683 34.1039 45.8511 34.2621 45.7749 34.4437C45.7046 34.6254 45.6694 34.8246 45.6694 35.0414C45.6694 35.2582 45.7192 35.4545 45.8188 35.6302C45.9185 35.8002 46.062 35.9349 46.2495 36.0345C46.437 36.1283 46.6567 36.1752 46.9087 36.1752C47.2896 36.1752 47.6206 36.099 47.9019 35.9467C48.1831 35.7943 48.3999 35.6068 48.5522 35.3842C48.7104 35.1615 48.7925 34.9506 48.7983 34.7513L49.4663 35.8236C49.3726 36.0638 49.2437 36.3129 49.0796 36.5707C48.9214 36.8285 48.7192 37.0717 48.4731 37.3002C48.2271 37.5228 47.9312 37.7074 47.5854 37.8539C47.2397 37.9945 46.8296 38.0648 46.355 38.0648C45.7515 38.0648 45.2036 37.9447 44.7114 37.7045C44.2251 37.4584 43.8384 37.1215 43.5513 36.6937C43.27 36.2601 43.1294 35.7679 43.1294 35.2172C43.1294 34.7191 43.2231 34.2767 43.4106 33.89C43.5981 33.5033 43.8735 33.1781 44.2368 32.9144C44.606 32.6449 45.0659 32.4427 45.6167 32.308C46.1675 32.1674 46.8062 32.097 47.5327 32.097H49.0005ZM55.6978 30.4535V37.889H53.1665V28.3793H55.5483L55.6978 30.4535ZM58.563 28.3177L58.519 30.6644C58.396 30.6469 58.2466 30.6322 58.0708 30.6205C57.9009 30.6029 57.7456 30.5941 57.605 30.5941C57.2476 30.5941 56.937 30.641 56.6733 30.7347C56.4155 30.8226 56.1987 30.9545 56.0229 31.1302C55.853 31.306 55.7241 31.5199 55.6362 31.7719C55.5542 32.0238 55.5073 32.3109 55.4956 32.6332L54.9858 32.475C54.9858 31.8597 55.0474 31.2943 55.1704 30.7787C55.2935 30.2572 55.4722 29.8031 55.7065 29.4164C55.9468 29.0297 56.2397 28.7308 56.5854 28.5199C56.9312 28.309 57.3267 28.2035 57.772 28.2035C57.9126 28.2035 58.0562 28.2152 58.2026 28.2386C58.3491 28.2562 58.4692 28.2826 58.563 28.3177ZM62.2896 30.348V37.889H59.7495V28.3793H62.1313L62.2896 30.348ZM61.938 32.8002H61.2349C61.2349 32.1381 61.314 31.5287 61.4722 30.972C61.6362 30.4095 61.8735 29.9232 62.1841 29.5131C62.5005 29.097 62.8901 28.7748 63.353 28.5463C63.8159 28.3177 64.3521 28.2035 64.9614 28.2035C65.3833 28.2035 65.77 28.2679 66.1216 28.3969C66.4731 28.5199 66.7749 28.7162 67.0269 28.9857C67.2847 29.2494 67.4839 29.5951 67.6245 30.0228C67.7651 30.4447 67.8354 30.9515 67.8354 31.5433V37.889H65.3042V31.8246C65.3042 31.391 65.2456 31.057 65.1284 30.8226C65.0112 30.5883 64.8442 30.4242 64.6274 30.3304C64.4165 30.2367 64.1616 30.1898 63.8628 30.1898C63.5347 30.1898 63.2476 30.2572 63.0015 30.392C62.7612 30.5267 62.562 30.7142 62.4038 30.9545C62.2456 31.1888 62.1284 31.4642 62.0522 31.7806C61.9761 32.097 61.938 32.4369 61.938 32.8002ZM67.5981 32.5101L66.6929 32.6244C66.6929 32.0033 66.769 31.4261 66.9214 30.8929C67.0796 30.3597 67.311 29.891 67.6157 29.4867C67.9263 29.0824 68.3101 28.7689 68.7671 28.5463C69.2241 28.3177 69.7515 28.2035 70.3491 28.2035C70.8062 28.2035 71.2222 28.2709 71.5972 28.4056C71.9722 28.5345 72.2915 28.7426 72.5552 29.0297C72.8247 29.3109 73.0298 29.6801 73.1704 30.1371C73.3169 30.5941 73.3901 31.1537 73.3901 31.8158V37.889H70.8501V31.8158C70.8501 31.3763 70.7915 31.0424 70.6743 30.8138C70.563 30.5795 70.3989 30.4183 70.1821 30.3304C69.9712 30.2367 69.7192 30.1898 69.4263 30.1898C69.1216 30.1898 68.855 30.2513 68.6265 30.3744C68.3979 30.4916 68.2075 30.6556 68.0552 30.8666C67.9028 31.0775 67.7886 31.3236 67.7124 31.6049C67.6362 31.8802 67.5981 32.182 67.5981 32.5101ZM80.4829 35.7445V31.5082C80.4829 31.2035 80.4331 30.9427 80.3335 30.726C80.2339 30.5033 80.0786 30.3304 79.8677 30.2074C79.6626 30.0844 79.396 30.0228 79.0679 30.0228C78.7866 30.0228 78.5435 30.0726 78.3384 30.1722C78.1333 30.266 77.9751 30.4037 77.8638 30.5853C77.7524 30.7611 77.6968 30.9691 77.6968 31.2094H75.1655C75.1655 30.8051 75.2593 30.4213 75.4468 30.058C75.6343 29.6947 75.9067 29.3754 76.2642 29.1C76.6216 28.8187 77.0464 28.599 77.5386 28.4408C78.0366 28.2826 78.5933 28.2035 79.2085 28.2035C79.9468 28.2035 80.603 28.3265 81.1772 28.5726C81.7515 28.8187 82.2026 29.1879 82.5308 29.6801C82.8647 30.1722 83.0317 30.7875 83.0317 31.5258V35.5951C83.0317 36.1166 83.064 36.5443 83.1284 36.8783C83.1929 37.2064 83.2866 37.4935 83.4097 37.7396V37.889H80.8521C80.729 37.6312 80.6353 37.309 80.5708 36.9222C80.5122 36.5297 80.4829 36.1371 80.4829 35.7445ZM80.8169 32.097L80.8345 33.5297H79.4194C79.0854 33.5297 78.7954 33.5677 78.5493 33.6439C78.3032 33.7201 78.1011 33.8285 77.9429 33.9691C77.7847 34.1039 77.6675 34.2621 77.5913 34.4437C77.521 34.6254 77.4858 34.8246 77.4858 35.0414C77.4858 35.2582 77.5356 35.4545 77.6353 35.6302C77.7349 35.8002 77.8784 35.9349 78.0659 36.0345C78.2534 36.1283 78.4731 36.1752 78.7251 36.1752C79.106 36.1752 79.437 36.099 79.7183 35.9467C79.9995 35.7943 80.2163 35.6068 80.3687 35.3842C80.5269 35.1615 80.6089 34.9506 80.6147 34.7513L81.2827 35.8236C81.189 36.0638 81.0601 36.3129 80.896 36.5707C80.7378 36.8285 80.5356 37.0717 80.2896 37.3002C80.0435 37.5228 79.7476 37.7074 79.4019 37.8539C79.0562 37.9945 78.646 38.0648 78.1714 38.0648C77.5679 38.0648 77.02 37.9447 76.5278 37.7045C76.0415 37.4584 75.6548 37.1215 75.3677 36.6937C75.0864 36.2601 74.9458 35.7679 74.9458 35.2172C74.9458 34.7191 75.0396 34.2767 75.2271 33.89C75.4146 33.5033 75.6899 33.1781 76.0532 32.9144C76.4224 32.6449 76.8823 32.4427 77.4331 32.308C77.9839 32.1674 78.6226 32.097 79.3491 32.097H80.8169ZM92.4272 25.0922V37.889H89.7993V25.0922H92.4272ZM101.849 35.9906L105.312 38.7328L103.651 40.1742L100.241 37.432L101.849 35.9906ZM105.4 31.1918V31.7982C105.4 32.7709 105.268 33.6439 105.004 34.4174C104.747 35.1908 104.375 35.85 103.888 36.3949C103.402 36.934 102.828 37.347 102.166 37.6342C101.503 37.9213 100.768 38.0648 99.9595 38.0648C99.1567 38.0648 98.4214 37.9213 97.7534 37.6342C97.0854 37.347 96.5083 36.934 96.022 36.3949C95.5356 35.85 95.1577 35.1908 94.8882 34.4174C94.6245 33.6439 94.4927 32.7709 94.4927 31.7982V31.1918C94.4927 30.2133 94.6245 29.3402 94.8882 28.5726C95.1577 27.7992 95.5327 27.14 96.0132 26.5951C96.4937 26.0502 97.0679 25.6342 97.7358 25.347C98.4038 25.0599 99.1392 24.9164 99.9419 24.9164C100.75 24.9164 101.486 25.0599 102.148 25.347C102.816 25.6342 103.393 26.0502 103.879 26.5951C104.366 27.14 104.741 27.7992 105.004 28.5726C105.268 29.3402 105.4 30.2133 105.4 31.1918ZM102.737 31.7982V31.1742C102.737 30.4945 102.672 29.8969 102.543 29.3812C102.42 28.8656 102.239 28.432 101.999 28.0804C101.764 27.7289 101.474 27.4652 101.128 27.2894C100.783 27.1078 100.387 27.017 99.9419 27.017C99.4966 27.017 99.1011 27.1078 98.7554 27.2894C98.4097 27.4652 98.1196 27.7289 97.8853 28.0804C97.6509 28.432 97.4722 28.8656 97.3491 29.3812C97.2261 29.8969 97.1646 30.4945 97.1646 31.1742V31.7982C97.1646 32.472 97.2261 33.0697 97.3491 33.5912C97.4722 34.1068 97.6509 34.5433 97.8853 34.9008C98.1255 35.2523 98.4185 35.5189 98.7642 35.7006C99.1157 35.8822 99.5142 35.973 99.9595 35.973C100.405 35.973 100.797 35.8822 101.137 35.7006C101.483 35.5189 101.773 35.2523 102.007 34.9008C102.248 34.5433 102.429 34.1068 102.552 33.5912C102.675 33.0697 102.737 32.472 102.737 31.7982Z"
          fill="black"
          fillOpacity="0.85"
        />
      </svg>
    </>
  );
};

LogoMain.propTypes = {
  reverse: PropTypes.bool
};

export default LogoMain;