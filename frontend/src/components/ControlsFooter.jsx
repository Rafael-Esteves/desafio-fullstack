import { faVolumeUp, faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ControlsFooter() {
  return (
    <>
      <div className="flex justify-between">
        <div className="m-4 shrink flex">
          <div
            onClick={() => {
              document.body.requestFullscreen();
            }}
            className="p-2 border max-h-[35px] border-[#323b45] rounded cursor-pointer"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6H0V1C0 0.4 0.4 0 1 0H6V2H2V6Z" fill="#8C9099"></path>
              <path
                d="M16 6H14V2H10V0H15C15.6 0 16 0.4 16 1V6Z"
                fill="#8C9099"
              ></path>
              <path
                d="M15 16H10V14H14V10H16V15C16 15.6 15.6 16 15 16Z"
                fill="#8C9099"
              ></path>
              <path
                d="M6 16H1C0.4 16 0 15.6 0 15V10H2V14H6V16Z"
                fill="#8C9099"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-end gap-2 m-4 grow">
          <div className="cursor-pointer p-2 border border-[#323b45] rounded flex max-h-[35px]">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM9 12H7V7H9V12ZM8 6C7.4 6 7 5.6 7 5C7 4.4 7.4 4 8 4C8.6 4 9 4.4 9 5C9 5.6 8.6 6 8 6Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div className="cursor-pointer p-2 border border-[#323b45] rounded flex max-h-[35px]">
            <FontAwesomeIcon icon={faVolumeUp} />
          </div>
          <div className="cursor-pointer p-2 border border-[#323b45] rounded flex max-h-[35px]">
            <FontAwesomeIcon icon={faHistory} />
          </div>
          <div className="cursor-pointer p-2 border border-[#323b45] rounded flex max-h-[35px]">
            <svg
              id="Layer_2"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="#8c9099"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_1-2">
                <g>
                  <polygon
                    className="cls-1"
                    points="5.6 11.86 5.6 26.68 0 26.68 0 16.29 5.56 11.83 5.6 11.86"
                  ></polygon>
                  <polygon
                    className="cls-1"
                    points="14.55 15.68 14.55 26.68 8.95 26.68 8.95 14.66 12.12 17.3 14.55 15.68"
                  ></polygon>
                  <polygon
                    className="cls-1"
                    points="23.5 9.89 23.5 26.68 17.9 26.68 17.9 13.44 23.23 9.89 23.5 9.89"
                  ></polygon>
                  <polygon
                    className="cls-1"
                    points="23.5 0 23.5 6.73 15.11 12.32 12.68 13.94 9.51 11.3 6.15 8.51 6.12 8.47 .56 12.94 0 13.38 0 6.21 6.19 1.24 12.54 6.54 13.06 6.96 13.7 6.54 23.5 0"
                  ></polygon>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default ControlsFooter;
