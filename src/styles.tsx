import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Itau Text Pro", sans-serif;
  }

  body{
    margin: 0;
    padding: 0;
    font-family: "Itau Text Pro", sans-serif;
  }

  @font-face {
    font-family: "Itau Text Pro";
    src: local("Itau Text Pro"), url(/fonts/ItauTextPro_Rg.ttf);
  }

  @font-face {
    font-family: Itau2;
    src: url(/fonts/ItauTextPro_Lt.ttf);
  }
  
	@font-face {
    font-family: Itau3;
    src: url(/fonts/ItauTextPro_Bd.ttf);
  }
  
	@font-face {
    font-family: Itau4;
    src: url(/fonts/ItauTextPro_XBd.ttf);
  }
  
	@font-face {
    font-family: Itau5;
    src: url(/fonts/ItauTextPro_Rg.ttf);
  }
  
	@font-face {
    font-family: Itau6;
    src: url(/fonts/ItauDisplayPro_Bd.ttf);
  }
	
	@font-face {
    font-family: Itau7;
    src: url(/fonts/ItauDisplayPro_Blk.ttf);
  }

	@font-face {
    font-family: Itau8;
    src: url(/fonts/ItauDisplayPro_He.ttf);
  }

	@font-face {
    font-family: Itau9;
    src: url(/fonts/ItauDisplayPro_Lt.ttf);
  }

	@font-face {
    font-family: Itau10;
    src: url(/fonts/ItauDisplayPro_Rg.ttf);
  }

	@font-face {
    font-family: Itau11;
    src: url(/fonts/ItauDisplayPro_XBd.ttf);
  }

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
 `;
