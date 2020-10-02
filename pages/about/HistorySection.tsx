import React, { useCallback, useEffect } from "react";
import styled from "styled-components";

/** styles */
import { MessageContent, MessageTitle } from "../../components/Layout";
import { brandColor, md } from "../../utils/styles";

/** interface */
import { historyListType } from "../../interfaces";

const historyList: historyListType = [
  {
    year: "2017년",
    contents: [
      "O월 - 청우종합건설 법인 설립",
      "O월 - Lorem ipsum dolor sit amet.",
      "O월 - Lorem ipsum dolor sit amet.",
      "O월 - Lorem ipsum dolor sit amet.",
    ],
  },
  {
    year: "2018년",
    contents: [
      "O월 - Lorem ipsum dolor sit amet.",
      "O월 - Lorem ipsum dolor sit amet.",
      "O월 - Lorem ipsum dolor sit amet.",
      "O월 - Lorem ipsum dolor sit amet.",
    ],
  },
  {
    year: "2019년",
    contents: [
      "O월 - Lorem ipsum dolor sit amet.",
      "O월 - Lorem ipsum dolor sit amet.",
      "O월 - Lorem ipsum dolor sit amet.",
      "O월 - Lorem ipsum dolor sit amet.",
    ],
  },
  {
    year: "2020년",
    contents: [
      "O월 - Lorem ipsum dolor sit amet.",
      "O월 - Lorem ipsum dolor sit amet.",
      "O월 - Lorem ipsum dolor sit amet.",
      "O월 - Lorem ipsum dolor sit amet.",
    ],
  },
];

const HistorySection: React.FC = () => {
  /**
   * @description initialize record nav
   */
  const recordNavInit = () => {
    const recordNav: HTMLUListElement | null = document.querySelector(
      ".record-nav"
    );
    const firstRecordNav: HTMLLIElement | null = document.querySelector(
      ".record-nav li"
    );
    const recordNavContent: NodeListOf<HTMLPreElement> = document.querySelectorAll(
      ".record-nav li p"
    );
    const navBarSelected: HTMLDivElement | null = document.querySelector(
      ".record-nav-bar-selected"
    );

    if (!recordNav) return;
    if (!navBarSelected) return;
    if (!firstRecordNav) return;
    // if (!firstRecordNavContent) return;

    for (let i = 0; i < recordNav.children.length; i++) {
      recordNav.children[i].classList.remove("selected");
    }

    for (let i = 0; i < recordNavContent.length; i++) {
      recordNavContent[i].classList.remove("selected");
    }

    navBarSelected.style.width = `calc(${
      100 / (recordNav.children.length + 1)
    }% - 10px)`;

    firstRecordNav.classList.add("selected");
    recordNavContent[0].classList.add("selected");
  };

  const handleClickRecord = useCallback(
    (index: number) => () => {
      const recordNavs = document.querySelectorAll(".record-nav li");
      const recordNavContents = document.querySelectorAll(".record-nav li p");
      const navBarSelected: HTMLDivElement | null = document.querySelector(
        ".record-nav-bar-selected"
      );

      if (!navBarSelected) return;

      for (let i = 0; i < recordNavs.length; i++) {
        recordNavs[i].classList.remove("selected");
      }

      for (let i = 0; i < recordNavContents.length; i++) {
        recordNavContents[i].classList.remove("selected");
      }

      for (let i = 0; i <= index; i++) {
        recordNavs[i].classList.add("selected");
      }

      if (index === 0) {
        navBarSelected.style.width = `calc(${
          (100 / (recordNavs.length + 1)) * (index + 1)
        }% - 10px)`;
      } else if (index > 2) {
        navBarSelected.style.width = `calc(${
          (100 / (recordNavs.length + 1)) * (index + 1)
        }% + ${index}%)`;
      } else {
        navBarSelected.style.width = `calc(${
          (100 / (recordNavs.length + 1)) * (index + 1)
        }%)`;
      }

      recordNavContents[index].classList.add("selected");
    },
    []
  );

  useEffect(() => {
    return recordNavInit();
  }, []);
  return (
    <ContentWrapper id="history">
      <div className="wrapper column">
        <div className="title" data-aos="fade-up" data-aos-duration="1500">
          <MessageTitle>청우종합건설의 발자취</MessageTitle>
        </div>
        <div className="content" data-aos="fade-up" data-aos-duration="1500">
          <MessageContent>
            청우종합건설이 걸어온 길은 인류의 발전에 끊임없이 노력하며 현재도
            같은 길을 걷고 있습니다.
          </MessageContent>
        </div>
        <div
          className="container"
          data-aos="fade-right"
          data-aos-duration="2000">
          <div className="record-nav-bar"></div>
          <div className="record-nav-bar-selected"></div>
          <ul className="record-nav">
            {historyList.map((history, index) => {
              return (
                <li
                  key={`record-key-${index}`}
                  onClick={handleClickRecord(index)}>
                  <h4>{history.year}</h4>
                  <p>
                    {history.contents.map((content, idx) => {
                      if (history.contents.length - 1 === idx) {
                        return <span key={`content-${idx}`}>{content}</span>;
                      } else {
                        return (
                          <span key={`content-${idx}`}>
                            {content} <br />
                          </span>
                        );
                      }
                    })}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </ContentWrapper>
  );
};

const ContentWrapper = styled.section`
  padding: 2rem 2rem 15rem !important;

  ${md} {
    padding-bottom: 12rem !important;
  }
  .wrapper {
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;

    .title {
      margin-top: 5rem;

      ${md} {
        margin-top: 2rem;
      }
    }

    .content {
      margin-bottom: 5rem;
    }

    .container {
      width: 100%;
      .record-nav-bar {
        display: block;
        border-top: 2px solid #ccc;
      }
      .record-nav-bar-selected {
        display: block;
        width: 0;
        border-top: 2px solid ${brandColor.normal};
        margin-top: -2px;
        transition: 0.4s ease-in-out;
      }
      .record-nav {
        margin-bottom: 20px;
        display: flex;
        justify-content: space-evenly;
        padding-top: 30px;
        position: relative;

        li {
          font-size: 1.5rem;
          position: relative;
          color: #585858;
          display: inline-block;
          font-weight: 300;

          ${md} {
            position: initial;
          }

          h4 {
            font-weight: 300;
            position: relative;

            &::before {
              content: "";
              display: block;
              width: 40px;
              height: 42px;
              background: url("/static/icon-history.svg");
              position: absolute;
              top: -48px;
              left: 50%;
              transform: translateX(-50%);
            }

            ${md} {
              font-size: initial;
            }
          }

          p {
            font-size: 0.875rem;
            position: absolute;
            width: calc(100vw - 57px);
            left: 0;
            line-height: 2rem;
            max-width: 250px;
            text-align: inherit;
            margin-bottom: 5rem;

            display: none;
            animation: fadeOut 0.8s;

            ${md} {
              left: calc(20% - 37px);
              line-height: 1.5rem;
              max-width: initial;
              margin-bottom: 2.5rem;
            }
          }

          &.selected {
            h4 {
              font-weight: 500;
              margin-bottom: 30px;

              &::before {
                background-image: url("/static/selected-icon-history.svg");
              }
            }

            p {
              &.selected {
                display: block;
                animation: fadeIn 0.8s;
              }
            }
          }

          &:hover {
            cursor: pointer;

            h4 {
              font-weight: 500;
            }
          }
        }
      }
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default HistorySection;
