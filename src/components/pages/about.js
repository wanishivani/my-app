import { Grid } from "@mui/material";
const About = () => {
  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={10}>
          <h1>About</h1>
          <hr />
          <p>
            Also known as expense manager and money manager, an expense tracker
            is a software or application that helps to keep an accurate record
            of your money inflow and outflow. Many people in India live on a
            fixed income, and they find that towards the end of the month they
            don't have sufficient money to meet their needs.{" "}
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
