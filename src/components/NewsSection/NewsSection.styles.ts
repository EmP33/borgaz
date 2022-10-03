import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  display: grid;
  row-gap: 3rem;
  padding: 2rem 0;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1010%26quot%3b)' fill='none'%3e%3cpath d='M665.52 661.32C749.82 660.14 728.93 566.55 987.27 560.29 1245.61 554.03 1456.5 296.82 1630.76 291.49' stroke='rgba(172%2c 6%2c 6%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M308.25 586.24C491.94 564.58 602.8 155.29 908.83 154.18 1214.86 153.07 1351.49 347.72 1509.41 350.18' stroke='rgba(172%2c 6%2c 6%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M536.75 585.48C700.04 578.46 805.77 315.55 1127.19 304.79 1448.62 294.03 1559.31 79.18 1717.64 75.19' stroke='rgba(172%2c 6%2c 6%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M492.95 625.68C585.85 619.18 550.78 449.36 815.7 439.69 1080.63 430.02 1288.53 197.43 1461.21 193.29' stroke='rgba(172%2c 6%2c 6%2c 1)' stroke-width='2'%3e%3c/path%3e%3cpath d='M573.63 668.81C743.2 639.46 823.56 223.46 1095.78 220.25 1367.99 217.04 1482.78 359.04 1617.92 360.25' stroke='rgba(172%2c 6%2c 6%2c 1)' stroke-width='2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1010'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: bottom right;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    background: none;
  }

  .news-wrapper {
    width: 65%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 auto;

    @media screen and (max-width: 1200px) {
      width: 80%;
    }

    @media screen and (max-width: 900px) {
      width: 60%;
      grid-template-columns: 1fr;
    }

    @media screen and (max-width: 600px) {
      width: 90%;
    }

    & .images {
      position: relative;
      display: grid;
      margin: 0 auto;
      grid-template-columns: repeat(4, 100px);
      grid-template-rows: repeat(5, 100px);

      @media screen and (max-width: 450px) {
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(4, 100px);
      }

      &:nth-of-type(1) .img-wrapper {
        &:nth-of-type(1) {
          grid-column: 2/5;
          grid-row: 1/6;
        }
        &:nth-of-type(2) {
          grid-column: 1/3;
          grid-row: 4/5;

          @media screen and (max-width: 450px) {
            grid-column: 1/3;
            grid-row: 3/4;
          }
        }
      }
    }

    &:nth-last-of-type(1) {
      & .images {
        position: relative;
        grid-template-columns: repeat(5, 100px);
        grid-template-rows: repeat(5, 100px);

        @media screen and (max-width: 900px) {
          grid-row: 1/2;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(5, 1fr);
        }

        & .img-wrapper {
          &:nth-of-type(1) {
            grid-column: 1/5;
            grid-row: 2/5;

            @media screen and (max-width: 900px) {
              grid-column: 1/4;
              grid-row: 2/5;
            }
          }
          &:nth-of-type(2) {
            grid-column: 4/6;
            grid-row: 1/3;

            @media screen and (max-width: 900px) {
              grid-column: 3/5;
            }
          }
        }
      }
    }

    & .content {
      display: grid;
      align-content: center;
      justify-items: start;
      row-gap: 2rem;
      width: 100%;

      & ul {
        list-style: none;
        color: #666;
      }

      & h2 {
        font-size: 2.3rem;
        font-weight: 400;
      }
      & p {
        color: #666;
      }
    }
  }
`;
