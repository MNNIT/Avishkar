import Meta from "../components/Meta";
import Footer from "../components/Footer";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "next/router";
const styles = {
  card: {
    minHeight: 400,
    padding: 10,
    margin: 25,
    textAlign: "justify"
  },
  media: {
    height: 480
  }
};
const Index = props => {
  const { classes } = props;
  return (
    <>
      <Meta />
      <div className="container">
        <h2>GNOSIOMANIA</h2>
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <Card className={classes.card}>
              {/* <CardMedia
                className={classes.media}
                image="/static/img/gnosis/quiz1.jpg"
                title="Gnosiomania"
              /> */}

              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Gnosiomania Quizzing
                </Typography>
                <div className="img">
                  <img src="/static/img/gnosis/gnosiomania.jpeg" alt="" />
                </div>
                <br />
                <Typography component="p">
                  Hello everyone!
                  <br />
                  <br /> Gnosis MNNIT Quiz Club, with immense pride and honour
                  is happy to announce the 15th edition of Gnosiomania- The
                  Annual Quizzing Fest of MNNIT Allahabad.
                  <br />
                  <br /> -On campus accommodation at nominal charges5 quizzes in
                  all , we will be kicking things off with the India and General
                  Quizzes on the 28th hosted by one of the most renowned
                  quizmasters of the country , Mr. Adittya Nath Mubayi . Then on
                  the 29th we have the Business , MELA and Sports Quizzes hosted
                  by another extremely popular and seasoned quizmaster , Mr.
                  Abhra Das .<br />
                  <br />
                  And of course not to forget , there's prize money worth{" "}
                  <b>Rs. 50000/-</b> at stake.
                  <ul>
                    <li>Venue: MNNIT Allahabad</li>
                    <li>
                      Online REGISTRATION &nbsp;&nbsp;
                      <b>
                        <a
                          href="https://www.thecollegefever.com/events/avishkar-2k18"
                          target="_blank"
                        >
                          CLICK HERE
                        </a>
                      </b>
                    </li>
                    <li>Teams of Maximum Three</li>
                    <li>Teams from same college</li>
                    <li>
                      Open to all students of UG and PG Courses, under 25 years
                      of age.
                    </li>
                    <li>
                      On campus registration fee ₹300 and accomodation ₹100. For
                      any queries, contact us at any of the mentioned mobile
                      numbers.
                    </li>
                  </ul>
                  <div className="img">
                    <img src="/static/img/gnosis/quiz1.jpg" alt="" />
                  </div>
                  <div className="img">
                    <img src="/static/img/gnosis/quiz2.jpg" alt="" />
                  </div>
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-6 col-xs-12">
            <Card className={classes.card}>
              {/* <CardMedia
                className={classes.media}
                image="/static/img/gnosis/gnosiomania.jpg"
                title="Gnosiomania"
              /> */}
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  GnoTalks
                </Typography>
                <Typography component="p">
                  With the stage being graced by eminent personalities each
                  year, gnoTalks has been enriching the experience that Avishkar
                  brings forth since its inception. gnoTalks presents a panel of
                  illustrious people who have paved their way to glory,
                  exemplifying the notion of inspiration. It showcases unique
                  performances and talks, making the event one of its kind. This
                  year, we are going to take forward the legacy.
                  <br />
                  <br />
                  <Typography gutterBottom variant="headline" component="h2">
                    Speakers
                  </Typography>
                  <div className="img">
                    <img src="/static/img/gnosis/speaker1.jpeg" alt="" />
                  </div>
                  <br />
                  Does magic exist? Our speaker has given newer dimensions to
                  this question. Not a magician but a psychological illusionist,
                  Karan Singh Magic is going to bowl the audience over with his
                  keen mind-reading abilities. Just with the help of a few
                  simple questions, he would be into one's brain.
                  <br />
                </Typography>
                <br />
                <div className="img">
                  <img src="/static/img/gnosis/speaker2.jpg" alt="" />
                </div>
                <br />A Ramnath Goenka awardee, our speaker is the righteous
                example to show how media is indeed a pillar of our democracy.
                J. Gopikrishnan, an investigative journalist, has uncovered the
                mystery behind the 2G, National Herald and Aircel-Maxis cases.
                There is a great chance that the songs that we hum merrily or
                melancholically are his creation. With the Guinness world record
                for writing the most number of songs, Sameer has contributed a
                lot in shaping the music industry. His efforts have been
                acknowledged with three filmfare awards
                <br />
                <br />
                <div className="img">
                  <img src="/static/img/gnosis/speaker3.jpeg" alt="" />
                </div>
                <br />
                There is a great chance that the songs that we hum merrily or
                melancholically are his creation. With the Guinness world record
                for writing the most number of songs, Sameer has contributed a
                lot in shaping the music industry. His efforts have been
                acknowledged with three filmfare awards
                <br />
                <br />
                <div className="img">
                  <img src="/static/img/gnosis/speaker4.jpg" alt="" />
                </div>
                <br />
                We always ponder over how we can do our bit for the society that
                we live in. The Robin Hood Army has turned this noble thought to
                reality. Driving away hunger from the society in a sustainable
                manner, this organization is making full use of the abilities of
                the younger force of our nation.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .container {
            padding: 10px;
          }
          a {
            text-decoration: none;
          }
          .img img {
            width: 100%;
            margin-left: 50%;
            margin-top: 20px;
            margin-right: 0;
            transform: translateX(-50%);
          }
          .container > h2 {
            text-align: center;
          }
          @media (max-width: 700px) {
            .container {
              margin-top: 50px;
            }
            .container > h2 {
              text-align: center;
            }
          }
        `}
      </style>
    </>
  );
};
Index.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(withRouter(Index));
