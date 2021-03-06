import React from 'react';
import styled from 'styled-components';
import Title from '../Components/Title.js';
import Attribute from '../Components/Attribute.js';
import Img from '../Images/photo.png';

function Presentation() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 120vh;
  `;

  const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    height: 70vh;
    width: 50vw;
  `;

  const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  `;

  const Name = styled.h2`
    font-size: 2.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #242e45;
  `;

  const Photo = styled.img`
    margin-right: 1.5rem;
    border: 3px solid #ff4446;
    height: 180px;
    width: 180px;
    border-radius: 100%;
    overflow: hidden;
  `;

  const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    max-width: 150px;
  `;

  const Att = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  `;

  const Text = styled.p`
    margin-top: 4rem;
    max-width: 450px;
    font-size: 1rem;
    line-height: 1.5rem;

    @media screen and (max-width: 900px) {
      & {
        font-size: 0.8rem;
      }
    }
  `;

  return (
    <>
      <Container>
        <Title text="Apresentação" />
        <Box>
          <Div>
            <Photo src={Img}></Photo>
            <div>
              <Name>Vitor Pablo B.</Name>
              <Icons>
                <a href="">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.4771 0H4.52291C2.025 0 0 2.025 0 4.52291V45.477C0 47.975 2.025 50 4.52291 50H45.477C47.975 50 50 47.975 50 45.477V4.52291C50 2.025 47.975 0 45.4771 0ZM15.4721 43.1733C15.4721 43.9003 14.8829 44.4895 14.1559 44.4895H8.55301C7.82605 44.4895 7.23678 43.9003 7.23678 43.1733V19.6863C7.23678 18.9593 7.82605 18.37 8.55301 18.37H14.1559C14.8829 18.37 15.4721 18.9593 15.4721 19.6863V43.1733ZM11.3545 16.156C8.41479 16.156 6.03168 13.7729 6.03168 10.8332C6.03168 7.89359 8.41479 5.51047 11.3545 5.51047C14.2941 5.51047 16.6772 7.89359 16.6772 10.8332C16.6772 13.7729 14.2942 16.156 11.3545 16.156ZM44.7526 43.2793C44.7526 43.9476 44.2107 44.4895 43.5424 44.4895H37.5301C36.8618 44.4895 36.3199 43.9476 36.3199 43.2793V32.2626C36.3199 30.6191 36.802 25.0609 32.025 25.0609C28.3196 25.0609 27.5681 28.8653 27.4171 30.5726V43.2793C27.4171 43.9476 26.8754 44.4895 26.2069 44.4895H20.392C19.7237 44.4895 19.1818 43.9476 19.1818 43.2793V19.5802C19.1818 18.9119 19.7237 18.37 20.392 18.37H26.2069C26.8753 18.37 27.4171 18.9119 27.4171 19.5802V21.6293C28.7911 19.5674 30.833 17.9759 35.1805 17.9759C44.8077 17.9759 44.7526 26.9702 44.7526 31.912V43.2793Z"
                      fill="#242E45"
                    />
                  </svg>
                </a>
                <a href="">
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M18.0343 40.2018C17.6866 40.2666 17.5348 40.4297 17.5783 40.6899C17.6217 40.9502 17.817 41.0372 18.1641 40.9502C18.5118 40.8636 18.6635 40.7114 18.6199 40.4945C18.5768 40.256 18.3815 40.1582 18.0343 40.2018Z"
                        fill="#242E45"
                      />
                      <path
                        d="M16.1785 40.4625C15.8312 40.4625 15.6577 40.5812 15.6577 40.8204C15.6577 41.1025 15.8423 41.2215 16.211 41.1782C16.5583 41.1782 16.7321 41.0588 16.7321 40.8204C16.7321 40.5386 16.5475 40.4188 16.1785 40.4625Z"
                        fill="#242E45"
                      />
                      <path
                        d="M13.6397 40.3641C13.5531 40.6029 13.6942 40.7653 14.0628 40.8525C14.3883 40.9821 14.5946 40.9173 14.6812 40.6571C14.7465 40.4187 14.6053 40.2455 14.2581 40.1363C13.9325 40.0497 13.7265 40.1246 13.6397 40.3641Z"
                        fill="#242E45"
                      />
                      <path
                        d="M47.2493 2.7504C45.4154 0.916914 43.2079 0 40.6248 0H9.37494C6.79271 0 4.58434 0.916914 2.7504 2.7504C0.916914 4.58423 0 6.7926 0 9.37494V40.6253C0 43.2077 0.916914 45.4159 2.7504 47.2493C4.58423 49.0832 6.79271 50.0001 9.37494 50.0001H16.6666C17.1436 50.0001 17.502 49.9837 17.7406 49.9517C17.9791 49.9189 18.2177 49.7778 18.4565 49.5279C18.6955 49.2786 18.8145 48.915 18.8145 48.4377C18.8145 48.373 18.8088 47.6344 18.7981 46.2239C18.7871 44.8129 18.7817 43.6955 18.7817 42.8707L18.033 43.001C17.5556 43.0877 16.9533 43.1259 16.2263 43.1149C15.4995 43.104 14.7452 43.0283 13.9641 42.8871C13.1825 42.7458 12.4558 42.4204 11.783 41.9109C11.1105 41.4005 10.6331 40.7333 10.3509 39.9089L10.0253 39.1597C9.80832 38.6611 9.46673 38.1075 9.00006 37.5003C8.53339 36.8924 8.06148 36.48 7.5841 36.263L7.35618 36.1002C7.20442 35.9918 7.06339 35.861 6.93307 35.7093C6.80298 35.557 6.70538 35.4049 6.64028 35.2535C6.57517 35.1013 6.62922 34.9765 6.80298 34.8785C6.97674 34.781 7.29108 34.7327 7.74703 34.7327L8.39783 34.8302C8.832 34.9168 9.36879 35.177 10.0093 35.6113C10.6494 36.0453 11.1756 36.6094 11.588 37.3036C12.0874 38.1936 12.689 38.8714 13.3947 39.338C14.0998 39.8051 14.8106 40.0384 15.5267 40.0384C16.2427 40.0384 16.8611 39.9842 17.3822 39.8761C17.9026 39.7673 18.391 39.6041 18.8469 39.3872C19.0422 37.9334 19.574 36.8151 20.4418 36.034C19.2049 35.9036 18.0928 35.7086 17.1051 35.4479C16.1179 35.1873 15.0978 34.7644 14.0455 34.1782C12.9927 33.5922 12.1193 32.8657 11.4248 31.9971C10.7305 31.1286 10.1606 29.9893 9.71608 28.5792C9.2713 27.1682 9.04886 25.5404 9.04886 23.696C9.04886 21.0703 9.90637 18.8347 11.6207 16.9903C10.8176 15.0155 10.8934 12.8022 11.8484 10.3498C12.4778 10.1543 13.4111 10.301 14.6479 10.7893C15.885 11.278 16.7908 11.6958 17.3661 12.0426C17.9414 12.3894 18.4024 12.6826 18.7497 12.9216C20.7683 12.3574 22.8515 12.0753 24.9998 12.0753C27.1479 12.0753 29.2315 12.3574 31.2502 12.9216L32.4872 12.1404C33.3339 11.6193 34.332 11.142 35.4823 10.7081C36.6325 10.2742 37.5112 10.1547 38.1191 10.3501C39.0953 12.8026 39.1826 15.0159 38.3789 16.9905C40.0933 18.8352 40.951 21.0707 40.951 23.6963C40.951 25.5411 40.7286 27.1744 40.2838 28.5955C39.8394 30.0169 39.2646 31.1566 38.5587 32.0138C37.8537 32.8711 36.9746 33.5921 35.9222 34.1785C34.8697 34.7642 33.8497 35.1879 32.8621 35.4477C31.8746 35.7083 30.7626 35.9042 29.5256 36.0345C30.6534 37.0107 31.2175 38.5511 31.2175 40.6565V48.4367C31.2175 48.8058 31.2713 49.1039 31.3799 49.3318C31.4891 49.5596 31.6624 49.7165 31.901 49.804C32.1407 49.8906 32.3513 49.9448 32.5362 49.9663C32.7211 49.9881 32.9865 49.9991 33.3337 49.9991H40.6254C43.2076 49.9991 45.4161 49.0821 47.2491 47.2483C49.083 45.4145 49.9999 43.206 49.9999 40.6238V9.37494C49.9997 6.7926 49.0827 4.58389 47.2493 2.7504Z"
                        fill="#242E45"
                      />
                      <path
                        d="M9.89572 36.3933C9.74397 36.5013 9.76563 36.675 9.96094 36.9137C10.1783 37.1306 10.3517 37.1633 10.482 37.0112C10.6337 36.9031 10.6121 36.7295 10.4164 36.4903C10.1996 36.2953 10.026 36.2626 9.89572 36.3933Z"
                        fill="#242E45"
                      />
                      <path
                        d="M8.82179 35.5794C8.7568 35.7316 8.83274 35.8619 9.04971 35.97C9.22313 36.0789 9.36462 36.0575 9.47282 35.9053C9.53781 35.7531 9.46188 35.6227 9.2449 35.5139C9.02793 35.4486 8.8869 35.4705 8.82179 35.5794Z"
                        fill="#242E45"
                      />
                      <path
                        d="M10.9052 37.6629C10.7097 37.771 10.7097 37.9669 10.9052 38.2486C11.1005 38.5311 11.2846 38.6069 11.4585 38.4764C11.6539 38.3243 11.6539 38.1182 11.4585 37.8577C11.2851 37.5763 11.1005 37.5104 10.9052 37.6629Z"
                        fill="#242E45"
                      />
                      <path
                        d="M12.0448 39.1272C11.8494 39.3012 11.8925 39.5066 12.175 39.7461C12.4351 40.006 12.6522 40.0387 12.8258 39.8429C12.9996 39.6697 12.9562 39.4637 12.6956 39.225C12.4356 38.965 12.2185 38.9322 12.0448 39.1272Z"
                        fill="#242E45"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="50" height="50" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="">
                  <svg
                    width="29"
                    height="29"
                    viewBox="0 0 53 53"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.7126 14.1113V23.7175L52.2713 18.6826L45.7126 14.1113Z"
                      fill="#242E45"
                    />
                    <path
                      d="M7.28745 14.1113L0.72876 18.6826L7.28745 23.7175V14.1113Z"
                      fill="#242E45"
                    />
                    <path
                      d="M43.7249 25.2413V3.97501H9.2749V25.2413L26.4999 38.4913L43.7249 25.2413ZM15.8999 10.6H21.8624C22.4112 10.6 22.8562 11.045 22.8562 11.5938C22.8562 12.1426 22.4112 12.5876 21.8624 12.5876H15.8999C15.3511 12.5876 14.9061 12.1426 14.9061 11.5938C14.9061 11.045 15.3511 10.6 15.8999 10.6ZM15.8999 16.5625H37.1C37.6488 16.5625 38.0938 17.0074 38.0938 17.5563C38.0938 18.1051 37.6488 18.55 37.1 18.55H15.8999C15.3511 18.55 14.9061 18.1051 14.9061 17.5563C14.9061 17.0074 15.3511 16.5625 15.8999 16.5625ZM14.9061 23.5187C14.9061 22.9699 15.3511 22.5249 15.8999 22.5249H37.1C37.6488 22.5249 38.0938 22.9699 38.0938 23.5187C38.0938 24.0675 37.6488 24.5125 37.1 24.5125H15.8999C15.3511 24.5125 14.9061 24.0675 14.9061 23.5187Z"
                      fill="#242E45"
                    />
                    <path
                      d="M0 20.5375V48.3626L19.2125 35.3776L0 20.5375Z"
                      fill="#242E45"
                    />
                    <path
                      d="M33.7876 35.3776L53.0001 48.3626V20.5375L33.7876 35.3776Z"
                      fill="#242E45"
                    />
                    <path
                      d="M27.0964 40.4787C26.7431 40.7438 26.2572 40.7438 25.9039 40.4787L20.9351 36.7024L2.51758 49.025H50.4826L32.1314 36.6362L27.0964 40.4787Z"
                      fill="#242E45"
                    />
                  </svg>
                </a>
              </Icons>
              <Attribute text="Telefone: 11957895802" />
            </div>
          </Div>
          <Att>
            <Attribute text="São Paulo" />
            <Attribute text="20 Anos" />
            <Attribute text="Sistemas da Informação" />
          </Att>
          <Text>
            Olá, sou Vitor. Desde de cedo sempre fui apaixonado por
            desenvolvimento, com 13 anos de idade já estudava HTML e CSS,
            buscava algumas video aulas no youtube sobre lógica de programação e
            linguagem C. Devido algumas circunstâncias desanimei, porém a paixão
            nunca apagou. Com 19 anos a empresa em que eu estava trabalhando
            tinha alguns problemas que o Excel resolvia. Trabalhando com
            diversos dados, e fazendo integração por planilha, tinha que pensar
            de forma lógica na hora de usar as fórmulas. A paixão por
            desenvolvimento começou acender novamente. Atualmente já iniciei a
            faculdade e o estudo massivo sobre desenvolvimento.
          </Text>
        </Box>
      </Container>
    </>
  );
}

export default Presentation;
