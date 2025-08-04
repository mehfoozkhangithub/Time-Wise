export const navbar = () => {
  return `
        <nav class="navbar-container">
            <div class="logo">
            <img src="./css/utils/Logos/Time_Wise_Logo(Dark Mode).svg" alt="Logo">
        </div>
            <div class="nav-list">
                <ul>
                    <li><a href="./home.html">Home</a></li>
                    <li><a href="./dashboard.html">Dashboard</a></li>
                    <li><a href="./totd.html">TOTD</a></li>
                    <li><a href="./about.html">About</a></li>
                    <li><a href="./contact.html">Contact</a></li>
                </ul>
            </div>
            <div class="profile">
                <p>Profile</p>
            </div>
        </nav>
        
    `;
};

export const footer = () => {
  return `
      <div class="footer-container">
            <h1>TIME WISE</h1>
            <p>“At TimeWise, we blend productivity with peace. Helping you manage time, share thoughts, and stay in
                tune—every day."</p>
            <div class="footer-icons">
    
                <ul>
                    <li>
                        <a href="#"><i class="fab fa-facebook-f icon"></i> </a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-twitter icon"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-linkedin-in icon"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="fab fa-google-plus-g icon"></i></a>
                    </li>
                </ul>
    
            </div>
            <p>Copyright &copy;2025 Time Wise</p>
        </div>
  `;
};

export const style = () => {
  return `
        @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Mona+Sans:ital,wght@0,200..900;1,200..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        
        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          font-family: "Poppins", sans-serif;
        }
        body {
          width: 100%;
          height: 100vh;
          
        }
        header {
          width: 100%;
          height: 110px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          transition: all 0.4s ease;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        }
        .fixed-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          height: 70px;
        }
        .navbar-container {
          width: 85%;
          height: 60px;
          padding: 0 40px;
          display: flex;
          align-items: center;
          color: #ffffff;
          border-radius: 30px;
          background-color: #1f2937;
          box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
          transition: all 0.4s ease;
        }
        .navbar-container.fixed {
          position: fixed;
          width: 100%;
          z-index: 999;
          border-radius: 0;
        }
        .navbar-container .logo {
          width: 30%;
          height: fit-content;
          margin: 0 auto;
          mix-blend-mode: color-dodge;
        }
        .navbar-container .logo img {
          width: 60%;
          height: 50px;
          margin-top: 7px;
        }
        .nav-list {
          width: 55%;
        }
        .nav-list ul {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
        }
        .nav-list ul li {
          list-style-type: none;
          text-transform: uppercase;
          font-weight: 480;
          
        }
        .nav-list ul li a {
        position: relative;
          list-style-type: none;
          text-decoration: none;
          color: #ffffff;
        }
        .nav-list ul li a::before{
          content: "";     
          position: absolute;
          left: 50%;
          bottom: -5px;                 
          height: 3px;
          width: 0%;
          transform: translateX(-50%);
          background-color: #53C1F0;
          transition: width 0.4s ease;
        }
        .nav-list ul li a:hover::before{
              width: 100%;
        }
        .profile {
          width: 25%;
          text-align: right;
          text-transform: uppercase;
          font-weight: 480;
        }

        /* scroll button start */
        .fa-angle-up{
            position: fixed;
            top: 80%;
            left: 96%;
            padding: 6px 7px;
            font-size: 32px;
            background-color: #a24388;
            color: white;
            border-radius: 50%;
            cursor: pointer;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.5s ease;
        }
        .showScrollBtn{
            opacity: 1;
            pointer-events: auto;
            transition: background-color 0.4s ease;
        }
        .showScrollBtn:hover{
            background-color: #ffcc25;
        }

        /* scroll button end */

        /* main part start */

        main{
          height: 1000px;
        }
        /* main part end */

        /* footer part start */

        .footer-container{
          width: 100%;
          height: 300px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
          background-color: #1F242D;
          color: white;
        }
        .footer-container p{
          width: 400px;
          text-align: center;
        }
        .footer-container ul {
          display: flex;
        }

        .footer-container ul li {
          list-style: none;
        }
          
        .footer-container ul li a {
          width: 50px;
          height: 50px;
          color: black;
          background-color: #fff;
          text-align: center;
          line-height: 80px;
          font-size: 22px;
          margin: 0 10px;
          display: block;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
          border: 3px solid #fff;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration:none;
        }
        
        .footer-container ul li a .icon {
          position: relative;
          color: #262626;
          transition: .5s;
          z-index: 3;
        }
        
        .footer-container ul li a:hover .icon {
          color: #fff;
          transform: rotateY(360deg);
        }
        
        .footer-container ul li a:before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: #f00;
          transition: .5s;
          z-index: 2;
        }
        
        .footer-container ul li a:hover:before {
          top: 0;
        }
        
        .footer-container ul li:nth-child(1) a:before{
          background: #3b5999;
        }
        
        .footer-container ul li:nth-child(2) a:before{
          background: #55acee;
        }
        
        .footer-container ul li:nth-child(3) a:before {
          background: #0077b5;
        }
        
        .footer-container ul li:nth-child(4) a:before {
          background: #dd4b39;
        }

        /* footer part end */
    `;
};
