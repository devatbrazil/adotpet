import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    html, body, #root {
     max-width: 1440px;
    box-sizing: border-box;
    --webkit-font-smoothing: antialiased;
    width: 100%;
    margin-right: auto;
    margin-left: auto;

}
    *, button, input {
      border: 0;
    }

    button {
        cursor: pointer;
    }

    h1, h2, h3, h3, h4, h5, h6, p, span {
      color: var(--wihite);
    }

    a {
      text-decoration: none;
      font-style: none;

      &:hover {
        font-style: none;
      }
    }

     ::-webkit-scrollbar {
	  width: 8px;
	}
	::-moz-scrollbar {
	  width: 8px;
	}
	:-ms-input-scrollbar {
	  width: 8px;
	}

  ::-webkit-scrollbar-thumb {
	  background: #cecece;
	  border-radius: 10px;
	}

    /* :root {
      --primary: #181818;
      --secondy: #4553FE;
      --secondy-lighting: #6871e3;
      --icons: #14D2B8;
      --white: #FDFDFD;
      --black-smooth: #343434;
      --grey-smooth: #555555;
    } */

`
