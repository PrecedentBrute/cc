import React, { useState } from "react";
import "./TeamMemberCard.css";

const TeamMemberCard = ({ name, department, src }) => {
  const [clicked, setClicked] = useState(false);
  // const content = document.getElementById("content");

  const onButtonClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="body">
        <div className="card center">
          <input type="checkbox" name="" id="" className="btn "></input>

          <div className="left_container center">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQFhT7NOIcTvTQ/profile-displayphoto-shrink_200_200/0/1605812371724?e=1633564800&v=beta&t=Thk_6fds9FYhFZQi2IKDey6D8C1Rjv5vsfGbwfOIKvA"
              alt=""></img>
          </div> 

          <div className="right_container center">
            <p className="user_name">{name || "Swapnil Shivam"}</p>
            <p className="skill">{department || "Backend"}</p>
          </div>

          <div className="slide center">
            <p>Skills:</p>
            <div className="skills">
              <div>Html</div>
              <div>CSS</div>
              <div>ReactJS</div>
              <div>Git</div>
            </div>

            <div className="icons">
              <a href="https://www.github.com/satviksinha" className=""></a>
            

<a href="https://www.instagram.com/_satvik_sinha/">
<svg
                  className="mt-2 ml-3 bg-red-700 p-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
</a>
              <a href="https://www.linkedin.com/in/satvik-sinha-b2934a204/">
              <svg
                  className="mt-2 ml-4 bg-red-700 p-0.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              
  {/*instagram*/}
  </a>
              <a href="https://www.linkedin.com/in/satvik-sinha-b2934a204/">
              <svg
                  className="mt-2 ml-4 bg-red-700 p-0.5"
                  width="24"
                  height="24"
                  viewBox="0 0 48 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1" fill="white">
                    <path d="M10.1836 0.00524902C5.12718 0.00524902 0.98877 4.5267 0.98877 10.0514V41.2264C0.98877 46.751 5.12709 51.2709 10.1836 51.2709H38.717C43.7735 51.2709 47.9103 46.751 47.9103 41.2264V10.0514C47.9103 4.5268 43.7735 0.00524902 38.717 0.00524902H10.1836ZM12.4963 8.46511C14.9208 8.46511 16.4141 10.2041 16.4602 12.4899C16.4602 14.7253 14.9207 16.5132 12.4494 16.5132H12.4039C10.0256 16.5132 8.48838 14.7254 8.48838 12.4899C8.48838 10.2041 10.0721 8.46511 12.4962 8.46511H12.4963ZM33.3893 19.1489C38.052 19.1489 41.5473 22.4787 41.5473 29.6341V42.992H34.4613V30.5297C34.4613 27.398 33.4357 25.2614 30.8713 25.2614C28.9137 25.2614 27.7468 26.7015 27.2345 28.0926C27.0473 28.5903 27.0013 29.2855 27.0013 29.9817V42.992H19.9152C19.9152 42.992 20.0082 21.8811 19.9152 19.6953H27.0028V22.9943C27.9444 21.4069 29.6288 19.1489 33.3893 19.1489V19.1489ZM8.90635 19.6969H15.9924V42.9921H8.90635V19.6969Z" />
                  </mask>
                  <path
                    d="M10.1836 0.00524902C5.12718 0.00524902 0.98877 4.5267 0.98877 10.0514V41.2264C0.98877 46.751 5.12709 51.2709 10.1836 51.2709H38.717C43.7735 51.2709 47.9103 46.751 47.9103 41.2264V10.0514C47.9103 4.5268 43.7735 0.00524902 38.717 0.00524902H10.1836ZM12.4963 8.46511C14.9208 8.46511 16.4141 10.2041 16.4602 12.4899C16.4602 14.7253 14.9207 16.5132 12.4494 16.5132H12.4039C10.0256 16.5132 8.48838 14.7254 8.48838 12.4899C8.48838 10.2041 10.0721 8.46511 12.4962 8.46511H12.4963ZM33.3893 19.1489C38.052 19.1489 41.5473 22.4787 41.5473 29.6341V42.992H34.4613V30.5297C34.4613 27.398 33.4357 25.2614 30.8713 25.2614C28.9137 25.2614 27.7468 26.7015 27.2345 28.0926C27.0473 28.5903 27.0013 29.2855 27.0013 29.9817V42.992H19.9152C19.9152 42.992 20.0082 21.8811 19.9152 19.6953H27.0028V22.9943C27.9444 21.4069 29.6288 19.1489 33.3893 19.1489V19.1489ZM8.90635 19.6969H15.9924V42.9921H8.90635V19.6969Z"
                    fill="#111111"
                  />
                  <path
                    d="M16.4602 12.4899H116.46V11.4817L116.44 10.4737L16.4602 12.4899ZM33.3893 19.1489H-66.6107V119.149H33.3893V19.1489ZM41.5473 42.992V142.992H141.547V42.992H41.5473ZM34.4613 42.992H-65.5387V142.992H34.4613V42.992ZM27.2345 28.0926L120.835 63.2908L120.955 62.9715L121.073 62.6514L27.2345 28.0926ZM27.0013 42.992V142.992H127.001V42.992H27.0013ZM19.9152 42.992L-80.0838 42.5515L-80.5262 142.992H19.9152V42.992ZM19.9152 19.6953V-80.3047H-84.4294L-79.9944 23.9456L19.9152 19.6953ZM27.0028 19.6953H127.003V-80.3047H27.0028V19.6953ZM27.0028 22.9943H-72.9973V387.566L113.008 74.0145L27.0028 22.9943ZM33.3893 19.1489H133.389V-80.8511H33.3893V19.1489ZM15.9924 19.6969H115.992V-80.3031H15.9924V19.6969ZM15.9924 42.9921V142.992H115.992V42.9921H15.9924ZM8.90635 42.9921H-91.0937V142.992H8.90635V42.9921ZM10.1836 -99.9948C-58.2508 -99.9948 -99.0112 -42.1838 -99.0112 10.0514H100.989C100.989 51.2372 68.5051 100.005 10.1836 100.005V-99.9948ZM-99.0112 10.0514V41.2264H100.989V10.0514H-99.0112ZM-99.0112 41.2264C-99.0112 93.4822 -58.2319 151.271 10.1836 151.271V-48.7291C68.4861 -48.7291 100.989 0.0197791 100.989 41.2264H-99.0112ZM10.1836 151.271H38.717V-48.7291H10.1836V151.271ZM38.717 151.271C107.152 151.271 147.91 93.4608 147.91 41.2264H-52.0897C-52.0897 0.0412372 -19.6051 -48.7291 38.717 -48.7291V151.271ZM147.91 41.2264V10.0514H-52.0897V41.2264H147.91ZM147.91 10.0514C147.91 -42.1606 107.173 -99.9948 38.717 -99.9948V100.005C-19.6257 100.005 -52.0897 51.2142 -52.0897 10.0514H147.91ZM38.717 -99.9948H10.1836V100.005H38.717V-99.9948ZM12.4963 108.465C-11.5436 108.465 -37.5689 99.155 -57.2449 78.3739C-76.0923 58.468 -83.1168 34.4744 -83.5195 14.5062L116.44 10.4737C115.991 -11.7804 108.197 -37.7864 87.9852 -59.1332C66.9449 -81.3553 38.9606 -91.5349 12.4963 -91.5349V108.465ZM-83.5398 12.4899C-83.5398 -9.41014 -75.7963 -33.9804 -56.9327 -53.7301C-37.423 -74.1561 -11.6372 -83.4868 12.4494 -83.4868V116.513C39.0072 116.513 66.7985 106.289 87.6957 84.4098C107.947 63.2073 116.46 36.6254 116.46 12.4899H-83.5398ZM12.4494 -83.4868H12.4039V116.513H12.4494V-83.4868ZM12.4039 -83.4868C37.6302 -83.4868 63.4434 -73.3714 82.477 -53.0872C100.828 -33.5306 108.488 -9.31583 108.488 12.4899H-91.5116C-91.5116 63.8644 -51.1018 116.513 12.4039 116.513V-83.4868ZM108.488 12.4899C108.488 34.7094 100.515 59.5031 81.3583 79.2504C61.7873 99.4243 36.1966 108.465 12.4962 108.465V-91.5349C-13.6283 -91.5349 -41.2229 -81.6245 -62.1918 -60.0097C-82.7468 -38.8214 -91.5116 -12.0154 -91.5116 12.4899H108.488ZM12.4962 108.465H12.4963V-91.5349H12.4962V108.465ZM33.3893 119.149C10.4896 119.149 -17.1038 110.033 -37.2201 86.1861C-55.6652 64.3199 -58.4527 41.1972 -58.4527 29.6341H141.547C141.547 10.9155 137.012 -17.4497 115.654 -42.7696C92.6241 -70.0707 60.9516 -80.8511 33.3893 -80.8511V119.149ZM-58.4527 29.6341V42.992H141.547V29.6341H-58.4527ZM41.5473 -57.008H34.4613V142.992H41.5473V-57.008ZM134.461 42.992V30.5297H-65.5387V42.992H134.461ZM134.461 30.5297C134.461 21.0137 133.42 -2.22581 118.492 -26.1757C99.0765 -57.3247 65.5698 -74.7386 30.8713 -74.7386V125.261C17.3377 125.261 0.946936 122.338 -15.3845 113.426C-31.821 104.458 -43.5442 91.9585 -51.2362 79.6181C-65.0106 57.5194 -65.5387 36.9139 -65.5387 30.5297H134.461ZM30.8713 -74.7386C-30.4792 -74.7386 -58.7736 -27.7289 -66.6042 -6.46609L121.073 62.6514C117.058 73.5525 109.389 88.0555 94.9582 100.887C79.0351 115.045 56.6742 125.261 30.8713 125.261V-74.7386ZM-66.3662 -7.10554C-73.5433 11.98 -72.9987 28.9875 -72.9987 29.9817H127.001C127.001 31.5265 126.967 35.0982 126.469 39.7031C126.03 43.7714 124.84 52.6411 120.835 63.2908L-66.3662 -7.10554ZM-72.9987 29.9817V42.992H127.001V29.9817H-72.9987ZM27.0013 -57.008H19.9152V142.992H27.0013V-57.008ZM19.9152 42.992C119.914 43.4325 119.914 43.4322 119.914 43.4318C119.914 43.4315 119.914 43.431 119.914 43.4306C119.914 43.4296 119.914 43.4283 119.914 43.4267C119.914 43.4235 119.914 43.419 119.914 43.4133C119.914 43.4019 119.914 43.3854 119.915 43.364C119.915 43.3213 119.915 43.2591 119.915 43.1787C119.916 43.0179 119.917 42.7839 119.918 42.4866C119.921 41.8923 119.924 41.0439 119.928 40.0201C119.935 37.9766 119.944 35.2156 119.95 32.3727C119.957 28.7773 119.996 19.4619 119.825 15.4449L-79.9944 23.9456C-80.0723 22.1145 -80.0339 24.4474 -80.0497 31.9539C-80.0553 34.6621 -80.0639 37.3153 -80.071 39.2984C-80.0746 40.2879 -80.0778 41.1059 -80.0801 41.6746C-80.0813 41.9588 -80.0822 42.1806 -80.0828 42.33C-80.0831 42.4047 -80.0834 42.4614 -80.0835 42.4987C-80.0836 42.5174 -80.0837 42.5312 -80.0837 42.54C-80.0837 42.5445 -80.0838 42.5476 -80.0838 42.5496C-80.0838 42.5505 -80.0838 42.5512 -80.0838 42.5515C-80.0838 42.5516 -80.0838 42.5516 -80.0838 42.5517C-80.0838 42.5517 -80.0838 42.5515 19.9152 42.992ZM19.9152 119.695H27.0028V-80.3047H19.9152V119.695ZM-72.9973 19.6953V22.9943H127.003V19.6953H-72.9973ZM113.008 74.0145C111.031 77.3483 103.761 89.4198 89.4567 100.237C73.262 112.484 53.4854 119.149 33.3893 119.149V-80.8511C9.53266 -80.8511 -12.9664 -73.0572 -31.1789 -59.2843C-47.5006 -46.9413 -56.0834 -32.9471 -59.0027 -28.0259L113.008 74.0145ZM-66.6107 19.1489V19.1489H133.389V19.1489H-66.6107ZM8.90635 119.697H15.9924V-80.3031H8.90635V119.697ZM-84.0076 19.6969V42.9921H115.992V19.6969H-84.0076ZM15.9924 -57.0079H8.90635V142.992H15.9924V-57.0079ZM108.906 42.9921V19.6969H-91.0937V42.9921H108.906Z"
                    fill="#111111"
                    mask="url(#path-1-inside-1)"
                  />
                </svg>
              </a>
            </div>

          </div>
          
          
        </div>
    </div>
  );
};

export default TeamMemberCard;

