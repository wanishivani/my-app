// import './form.css';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

const Contact = () => {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "orange",
          color: "white",
          borderRedious: "2px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        GET IN TOUCH Contact Us
      </h1>
      <p style={{ fontFamily: "ariel" }}>
        Presenting you with excellent customer service and awesome travel hacks
        has always been our goal at Dummyticket.com. You can contact the dummy
        ticket team regarding the status of your dummy ticket, airline tickets
        or for complaints, feedback and queries via telephone or email. In order
        to serve customers located all over the world, the dummy ticket team has
        locations in multiple locations worldwide. Feel free to contact any of
        our global locations by email, phone or on Apps such as WhatsApp
        SnapChat or WeChat.
      </p>

      <h1
        style={{
          backgroundColor: "orange",
          color: "white",
          borderRedious: "2px",
          display: "flex",
          justifyContent: "center",
        }}
      ></h1>

      <div
        style={{
          backgroundColor: "orange",
          fontFamily: "sans-serif",
          border: "1px",
          padding: "2%",
          justifyContent: "space-between",
          width: "250px",
          margin: "10px",
        }} 
      >
        USA +1-308-888-6496<PhoneInTalkIcon/>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "powderblue",
          fontFamily: "sans-serif",
          padding: "2%",
          justifyContent: "space-between",width: "250px",
          margin: "10px",
        }}
      >
        {" "}
        India :+91-8884777300<PhoneInTalkIcon/>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "orange",
          fontFamily: "sans-serif",
          padding: "2%",
          justifyContent: "space-between",width: "250px",
          margin: "10px",textSize:'bolder'
        }}
      >
        {" "}
        UAE +971-54-776-1925 UK<PhoneInTalkIcon/>
      </div>
      
    </div>
  );
};

export default Contact;
