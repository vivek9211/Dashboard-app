import SignIn from "./sign-in";

const Dashboard = (props) => {

  const { userinfo, editUser } = props;
  
  function handleLogout(event) {
    event.preventDefault();
    // console.log(userinfo);
    editUser();
    // <SignIn />
  }

  return (
    <div className="relative bg-background w-full h-[1024px] overflow-hidden text-left text-sm text-black font-lato">
      <div
        className="absolute top-[40px] left-[40px] w-[280px] h-[944px] text-lg text-white font-montserrat"
        id="sidebar"
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[30px] bg-black" />
        <a
          className="absolute top-[87.92%] left-[17.86%] text-sm text-[inherit] [text-decoration:none]"
          id="help"
          href="#"
        >
          Help
        </a>
        <a
          className="absolute top-[91.84%] left-[17.86%] text-sm text-[inherit] [text-decoration:none]"
          id="contact-us"
          href="#"
        >
          Contact Us
        </a>
        <a
          className="absolute top-[43.64%] left-[31.43%] text-[inherit] [text-decoration:none]"
          id="settings"
          href="#"
        >
          Settings
        </a>
        <a
          className="absolute top-[37.08%] left-[31.43%] text-[inherit] [text-decoration:none]"
          id="users"
          href="#"
        >
          Users
        </a>
        <a
          className="absolute top-[30.51%] left-[31.43%] text-[inherit] [text-decoration:none]"
          id="schedules"
          href="#"
        >
          Schedules
        </a>
        <a
          className="absolute top-[23.94%] left-[31.43%] text-[inherit] [text-decoration:none]"
          id="Transection"
          href="#"
        >
          Transactions
        </a>
        <a
          className="absolute top-[17.37%] left-[31.43%] font-bold text-[inherit] [text-decoration:none]"
          id="dashboard"
          href="#"
        >
          Dashboard
        </a>
        <img
          className="absolute h-[2.2%] w-[6.43%] top-[23.94%] right-[75.71%] bottom-[73.86%] left-[17.86%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/transaction-icon@2x.png"
        />
        <img
          className="absolute h-[2.07%] w-[6.96%] top-[30.64%] right-[75.45%] bottom-[67.29%] left-[17.59%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/schedule-icon@2x.png"
        />
        <img
          className="absolute h-[1.91%] w-[6.43%] top-[17.58%] right-[75.71%] bottom-[80.51%] left-[17.86%] max-w-full overflow-hidden max-h-full object-cover"
          alt="dashboard-logo"
          src="/dashboard-icon@2x.png"
        />
        <img
          className="absolute h-[1.91%] w-[6.09%] top-[43.86%] right-[76.06%] bottom-[54.24%] left-[17.86%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/setting-icon@2x.png"
        />
        <img
          className="absolute h-[1.91%] w-[6.43%] top-[37.29%] right-[75.71%] bottom-[60.81%] left-[17.86%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/user-icon@2x.png"
        />
        <h2
          className="m-0 absolute top-[6.36%] left-[17.86%] text-17xl font-bold font-inherit"
          id="brand"
        >
          Board.
        </h2>
      </div>
      <div
        className="absolute top-[129px] left-[637.89px] w-[221.05px] h-[120px]"
        id="transactions"
      >
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-oldlace" />
        </div>
        <p
          className="m-0 absolute top-[45px] left-[25.11px] inline-block w-[126px]"
          id="trans-para"
        >
          Total Transactions
        </p>
        <p
          className="m-0 absolute top-[67px] left-[25.11px] text-5xl font-bold font-open-sans inline-block w-[65.26px]"
          id="buget"
        >
          1,220
        </p>
      </div>
      <div
        className="absolute top-[129px] left-[380px] w-[221.05px] h-[120px]"
        id="revenues"
      >
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-honeydew" />
        </div>
        <p
          className="m-0 absolute top-[45px] left-[25px] inline-block w-[124px]"
          id="rev-para"
        >
          Total Revenues
        </p>
        <p
          className="m-0 absolute top-[67px] left-[25px] text-5xl font-bold font-open-sans inline-block w-[124px]"
          id="buget"
        >
          $1,300,430
        </p>
        <img
          className="absolute h-1/5 w-[11.94%] top-[16.67%] right-[11.6%] bottom-[63.33%] left-[76.45%] max-w-full overflow-hidden max-h-full object-cover"
          alt="revenue-img"
          src="/vector@2x.png"
        />
      </div>
      <div
        className="absolute top-[129px] left-[895.79px] w-[221.05px] h-[120px]"
        id="likes"
      >
        <div className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-mistyrose" />
        </div>
        <p
          className="m-0 absolute top-[45px] left-[25.21px] inline-block w-[81px]"
          id="like-para"
        >
          Total Likes
        </p>
        <p
          className="m-0 absolute top-[67px] left-[25.58px] text-5xl font-bold font-open-sans inline-block w-[65.26px]"
          id="buget"
        >
          9,721
        </p>
        <img
          className="absolute h-1/5 w-[10.54%] top-[16.67%] right-[11.56%] bottom-[63.33%] left-[77.9%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/vector1@2x.png"
        />
      </div>
      <div
        className="absolute top-[129px] left-[1158.95px] w-[221.05px] h-[120px]"
        id="users"
      >
        <div
          className="absolute top-[0px] left-[0px] w-[221.05px] h-[120px]"
          id="users"
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-lavender" />
        </div>
        <img
          className="absolute h-1/5 w-[16.65%] top-[16.67%] right-[11.39%] bottom-[63.33%] left-[71.95%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/vector2@2x.png"
        />
        <p
          className="m-0 absolute top-[45px] left-[25.58px] inline-block w-[85.26px]"
          id="users"
        >
          Total Users
        </p>
        <p
          className="m-0 absolute top-[67px] left-[25.58px] text-5xl font-bold font-open-sans inline-block w-[44.21px]"
          id="buget"
        >
          892
        </p>
      </div>
      <div
        className="absolute top-[289px] left-[380px] w-[1000px] h-[359px]"
        id="graph"
      >
        <div className="absolute top-[0px] left-[0px] w-[1000px] h-[359px]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <p
          className="m-0 absolute top-[49px] left-[808px] inline-block w-[42px]"
          id="guest-user"
        >
          Guest
        </p>
        <p
          className="m-0 absolute top-[49px] left-[906px] inline-block w-[34px]"
          id="users"
        >
          User
        </p>
        <h3
          className="m-0 absolute top-[30px] left-[40px] text-lg font-bold font-montserrat inline-block w-[93px]"
          id="activities"
        >
          Activities
        </h3>
        <select className="absolute top-[57px] left-[40px] w-[124px] h-[17px]" />
        <div
          className="absolute top-[105px] left-[40px] w-[921px] h-[212px] text-secondary-text"
          id="graph-img"
        >
          <div className="absolute top-[0px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              500
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[78px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              300
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[39px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              400
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[117px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              200
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[156px] left-[0px] w-[921px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[25.34px]">
              100
            </div>
            <div className="absolute top-[9.5px] left-[39.5px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
          <div className="absolute top-[195px] left-[17.23px] w-[903.77px] h-[17px]">
            <div className="absolute top-[0px] left-[0px] inline-block w-[9.12px]">
              0
            </div>
            <div className="absolute top-[9.5px] left-[22.27px] box-border w-[882px] h-px border-t-[1px] border-solid border-field-color-darker" />
          </div>
        </div>
        <img
          className="absolute top-[54px] left-[787.53px] w-2.5 h-2.5"
          alt=""
          src="/ellipse-3.svg"
        />
        <img
          className="absolute top-[54px] left-[885px] w-2.5 h-2.5"
          alt=""
          src="/ellipse-4.svg"
        />
      </div>
      <div
        className="absolute top-[688px] left-[380px] w-[480px] h-64 font-montserrat"
        id="top-products"
      >
        <div className="absolute top-[0px] left-[0px] w-[480px] h-64">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <div
          className="absolute top-[72px] left-[244px] w-[98px] h-9"
          id="upper-div"
        >
          <img
            className="absolute top-[3px] left-[0px] w-[11px] h-[11px]"
            alt=""
            src="/ellipse-6.svg"
          />
          <h4
            className="m-0 absolute top-[0px] left-[21px] text-[inherit] font-bold font-inherit"
            id="upper-para"
          >
            Food 
          </h4>
          <p
            className="m-0 absolute top-[22px] left-[21px] text-xs font-lato text-secondary-text"
            id="upper-data"
          >
            60%
          </p>
        </div>
        <select className="absolute top-[31px] left-[327px] w-[97px] h-[15px]">
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
          <option>2023</option>
         </select>
        
        <div
          className="absolute top-[129px] left-[244px] w-[168px] h-9"
          id="middle-div"
        >
          <img
            className="absolute top-[3px] left-[0px] w-[11px] h-[11px]"
            alt=""
            src="/ellipse-61.svg"
          />
          <h4
            className="m-0 absolute top-[0px] left-[21px] text-[inherit] font-bold font-inherit"
            id="middle-para"
          >
            Custom Short Pants
          </h4>
          <p
            className="m-0 absolute top-[22px] left-[21px] text-xs font-lato text-secondary-text"
            id="middle-data"
          >
            25%
          </p>
        </div>
        <div
          className="absolute top-[186px] left-[244px] w-32 h-9"
          id="bottom-div"
        >
          <img
            className="absolute top-[3px] left-[0px] w-[11px] h-[11px]"
            alt=""
            src="/ellipse-62.svg"
          />
          <h4
            className="m-0 absolute top-[0px] left-[21px] text-[inherit] font-bold font-inherit"
            id="bottom-para"
          >
            Warm Hoodies
          </h4>
          <br />
          <p
            className="m-0 absolute top-[22px] left-[21px] text-xs font-lato text-secondary-text"
            id="bottom-data"
          >
            15%
          </p>
        </div>
        <h3
          className="m-0 absolute top-[30px] left-[40px] text-lg font-bold font-inherit"
          id="top-products"
        >
          Top products
        </h3>
        <img
          className="absolute top-[82px] left-[60px] w-[134px] h-[134px]"
          alt=""
          src="/pie-chart.svg"
        />
      </div>
      <div
        className="absolute top-[688px] left-[900px] w-[480px] h-64 text-xs text-icon font-montserrat"
        id="schedule"
      >
        <div className="absolute top-[0px] left-[0px] w-[480px] h-64">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xl bg-white" />
        </div>
        <h3
          className="m-0 absolute top-[30px] left-[40px] text-lg font-bold font-inherit text-black"
          id="to-schedule"
        >
          Today’s schedule
        </h3>
        <div className="absolute top-[77px] left-[40px] w-[251px] h-[66px] font-lato">
          <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
            Meeting with suppliers from Kuta Bali
          </b>
          <div className="absolute top-[25px] left-[15px]">14.00-15.00</div>
          <div className="absolute top-[44px] left-[15px]">{`at Sunset Road, Kuta, Bali `}</div>
          <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-lightgreen" />
        </div>
        <div className="absolute top-[34px] left-[398px] text-secondary-text">
          See All
        </div>
        <img
          className="absolute h-[3.13%] w-[1.04%] top-[14.84%] right-[6.25%] bottom-[82.03%] left-[92.71%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector4.svg"
        />
        <div className="absolute top-[156px] left-[40px] w-[227px] h-[66px] font-lato">
          <b className="absolute top-[3px] left-[15px] text-sm text-dimgray">
            Check operation at Giga Factory 1
          </b>
          <div className="absolute top-[25px] left-[15px]">18.00-20.00</div>
          <div className="absolute top-[44px] left-[15px]">{`at Central Jakarta `}</div>
          <div className="absolute top-[-2.5px] left-[-2.5px] box-border w-[5px] h-[71px] border-r-[5px] border-solid border-cornflowerblue" />
        </div>
      </div>
      <div
        className="absolute top-[604px] left-[559px] w-[648px] h-[19px] text-secondary-text font-open-sans"
        id="horizontal-week"
      >
        <p className="m-0 absolute top-[0px] left-[0px] font-lato" id="week1">
          Week 1
        </p>
        <p className="m-0 absolute top-[0px] left-[200px]" id="week2">
          Week 2
        </p>
        <p className="m-0 absolute top-[0px] left-[400px]" id="week3">
          Week 3
        </p>
        <p className="m-0 absolute top-[0px] left-[600px]" id="week4">
          Week 4
        </p>
      </div>
      <img
        className="absolute top-[424px] left-[459px] w-[880.5px] h-[98px]"
        alt=""
        src="/line-chart-2.svg"
      />
      <img
        className="absolute top-[423.5px] left-[459px] w-[879.5px] h-[135px]"
        alt=""
        src="/line-chart-1.svg"
      />
      <img
        className="absolute h-[2.34%] w-[1.44%] top-[14.55%] right-[42.1%] bottom-[83.11%] left-[56.46%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src="/total-transactions-icon@2x.png"
      />
      <div
        className="absolute top-[60px] left-[380px] w-[1000px] h-[30px] text-5xl font-montserrat"
        id="dashboard"
      >
        <b className="absolute top-[0px] left-[0px]">Dashboard</b>
        <input
          className="[border:none] font-lato text-sm bg-[transparent] absolute top-[0px] left-[713px] w-[180px] h-[30px]"
          type="text"
          placeholder="Search..."
        />
        <img
          className="absolute top-[0px] left-[970px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/apple-touch-icon.png"
          onClick={handleLogout}
        />
        <img
          className="absolute h-[66.67%] w-[1.8%] top-[16.67%] right-[5.9%] bottom-[16.67%] left-[92.3%] max-w-full overflow-hidden max-h-full object-cover"
          alt="notification"
          src="/vector5@2x.png"
        />
      </div>
    </div>
  );
};

export default Dashboard;
