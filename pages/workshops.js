import Meta from "../components/Meta";
import Footer from "../components/Footer";
import { withRouter } from "next/router";
// import MediaControlCard from "../components/cards";
const Index = props => {
  return (
    <>
      <Meta />
      {/* <div className="card">
        <h2>Workshops</h2>
        <MediaControlCard
          title={"Big Data"}
          img={"/static/img/workshops/big-data.jpg"}
          content={`Big data is an evolving term that describes any voluminous amount of
            structured, semi-structured and unstructured data that has the
            potential to be mined for information.It is a term used to refer to
            the study and applications of data sets that are so big and complex
            that traditional data-processing application software are inadequate
            to deal with them. Big data challenges include capturing data, data
            storage, data analysis, search, sharing, transfer, visualization,
            querying, updating, information privacy and data source.`}
        />
      </div>
      <div className="card">
        <MediaControlCard
          title={"IOT"}
          img={"/static/img/workshops/IoT-connectivity.jpg"}
          content={`The Internet of things is an ecosystem of connected physical objects that are accessible through the
internet. Here we organise a best workshop on IOT with AWS in our college.
The Internet of Things (IoT) with AWS provides secure, bi-directional communication between
Internet-connected devices such as sensors, actuators, embedded micro-controllers, or smart
appliances and the AWS Cloud. This enables you to collect telemetry data from multiple devices,
and store and analyze the data. You can also create applications that enable your users to control
these devices from their phones or tablets. `}
        />
      </div>
      <div className="card">
        <MediaControlCard
          title={"MATLAB"}
          img={"/static/img/workshops/matlab.jpg"}
          content={`This workshop aimed at providing practical methods for incorporating Simulink in the classroom
 to enhance teaching of technical concepts.
 MATLAB (matrix laboratory) is a multi-paradigm numerical computing environment and
proprietary programming language developed by MathWorks. MATLAB allows matrix
manipulations, plotting of functions and data, implementation of algorithms, creation of user
interfaces, and interfacing with programs written in other languages, including C, C++, C#, Java,
Fortran and Python.
Although MATLAB is intended primarily for numerical computing, an optional toolbox uses the
MuPAD symbolic engine, allowing access to symbolic computing abilities. An additional package,
Simulink, adds graphical multi-domain simulation and model-based design for dynamic and
embedded systems.`}
        />
      </div>
      <div className="card">
        <MediaControlCard
          title={"Mechatronics"}
          img={"/static/img/workshops/mechatronics.jpg"}
          content={` Mechatronics is an interdisciplinary engineering field that combines principles from mechanics,
electronics, computer engineering, robotics and automatic control. It refers to the successful
combination of mechanical systems and electronics. Mechatronics systems are all around us, from
computer hard drives and robotics to washing machines, coffee makers, medical devices and
the list goes on.
Main objective of this workshop is to make the students conceptually and practically aware
about the Mechatronic Systems with a great deal of emphasis on hands-on programming.
The manufacturing industries totally depend on the integration of computer and electronics
technologies for better products and processes. Manufacturing Industries want mechanical students
who are trained to integrate electronics, controls, computers, and moving parts.`}
        />
      </div>
      <div className="card">
        <MediaControlCard
          title={"PLC Scada"}
          img={"/static/img/workshops/PLCScada.jpeg"}
          content={`PLC is a computing system used to control electromechanical processes.
SCADA stands for Supervisory Control and Data Acquisition. It is a type of industrial control
system that is used to monitor and control facilities and infrastructure in industries.PLCs Along
With Certain Other Necessary Ingredients Like Sensors, Motors, Actuators, Valves, Conveyors,
Boilers, SCADA Systems, Computers & Many More, Makes A Real Automated Manufacturing
Plant.
The main objective of PLC & Scada Workshop is to make the aspiring engineers acquainted with
the conceptual as well as practical knowledge of the Industrial Automation & latest technologies
being used to achieve industrial automation. The idea of organizing this workshop is to inculcate the
basic fundamentals of automation in the students and provide them with a platform to work on, in
the near future.`}
        />
      </div> */}
      <div className="container-new">
        <h2>Workshops</h2>
        <div className="row new-card">
          <div className="col-md-4 img-container">
            <img src="/static/img/workshops/big-data.jpg" alt="big_data" />
          </div>
          <div className="col-md-8 content">
            <h1>BigData</h1>
            <h3>
              Big data is an evolving term that describes any voluminous amount
              of structured, semi-structured and unstructured data that has the
              potential to be mined for information.It is a term used to refer
              to the study and applications of data sets that are so big and
              complex that traditional data-processing application software are
              inadequate to deal with them. Big data challenges include
              capturing data, data storage, data analysis, search, sharing,
              transfer, visualization, querying, updating, information privacy
              and data source.
            </h3>
          </div>
        </div>
        <div className="row new-card">
          <div className="col-md-4 img-container">
            <img src="/static/img/workshops/IoT-connectivity.jpg" alt="IOT" />
          </div>
          <div className="col-md-8 content">
            <h1>IOT</h1>
            <h3>
              The Internet of things is an ecosystem of connected physical
              objects that are accessible through the internet. Here we organise
              a best workshop on IOT with AWS in our college. The Internet of
              Things (IoT) with AWS provides secure, bi-directional
              communication between Internet-connected devices such as sensors,
              actuators, embedded micro-controllers, or smart appliances and the
              AWS Cloud. This enables you to collect telemetry data from
              multiple devices, and store and analyze the data. You can also
              create applications that enable your users to control these
              devices from their phones or tablets.
            </h3>
          </div>
        </div>
        <div className="row new-card">
          <div className="col-md-4 img-container">
            <img src="/static/img/workshops/matlab.png" alt="MATLAB" />
          </div>
          <div className="col-md-8 content">
            <h1>MATLAB</h1>
            <h3>
              This workshop aimed at providing practical methods for
              incorporating Simulink in the classroom to enhance teaching of
              technical concepts. MATLAB (matrix laboratory) is a multi-paradigm
              numerical computing environment and proprietary programming
              language developed by MathWorks. MATLAB allows matrix
              manipulations, plotting of functions and data, implementation of
              algorithms, creation of user interfaces, and interfacing with
              programs written in other languages, including C, C++, C#, Java,
              Fortran and Python. Although MATLAB is intended primarily for
              numerical computing, an optional toolbox uses the MuPAD symbolic
              engine, allowing access to symbolic computing abilities. An
              additional package, Simulink, adds graphical multi-domain
              simulation and model-based design for dynamic and embedded
              systems.
            </h3>
          </div>
        </div>
        <div className="row new-card">
          <div className="col-md-4 img-container">
            <img
              src="/static/img/workshops/mechatronics.jpg"
              alt="mechatronics"
            />
          </div>
          <div className="col-md-8 content">
            <h1>Mechatronics</h1>
            <h3>
              Mechatronics is an interdisciplinary engineering field that
              combines principles from mechanics, electronics, computer
              engineering, robotics and automatic control. It refers to the
              successful combination of mechanical systems and electronics.
              Mechatronics systems are all around us, from computer hard drives
              and robotics to washing machines, coffee makers, medical devices
              and the list goes on. Main objective of this workshop is to make
              the students conceptually and practically aware about the
              Mechatronic Systems with a great deal of emphasis on hands-on
              programming. The manufacturing industries totally depend on the
              integration of computer and electronics technologies for better
              products and processes. Manufacturing Industries want mechanical
              students who are trained to integrate electronics, controls,
              computers, and moving parts.
            </h3>
          </div>
        </div>
        <div className="row new-card">
          <div className="col-md-4 img-container">
            <img src="/static/img/workshops/PLCScada.jpeg" alt="PLC Scada" />
          </div>
          <div className="col-md-8 content">
            <h1>PLC Scada</h1>
            <h3>
              PLC is a computing system used to control electromechanical
              processes. SCADA stands for Supervisory Control and Data
              Acquisition. It is a type of industrial control system that is
              used to monitor and control facilities and infrastructure in
              industries.PLCs Along With Certain Other Necessary Ingredients
              Like Sensors, Motors, Actuators, Valves, Conveyors, Boilers, SCADA
              Systems, Computers & Many More, Makes A Real Automated
              Manufacturing Plant. The main objective of PLC & Scada Workshop is
              to make the aspiring engineers acquainted with the conceptual as
              well as practical knowledge of the Industrial Automation & latest
              technologies being used to achieve industrial automation. The idea
              of organizing this workshop is to inculcate the basic fundamentals
              of automation in the students and provide them with a platform to
              work on, in the near future.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>
        {`
          .card {
            margin: 30px 100px;
          }
          .img-container {
            overflow: hidden;
          }
          .img-container img {
            height: 200px;
          }
          .new-card {
            min-height: 200px;
            padding: 15px;
            margin: 30px 100px;
            box-sizing: border-box;
            border-radius: 4px;
            box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
              0px 1px 1px 0px rgba(0, 0, 0, 0.14),
              0px 2px 1px -1px rgba(0, 0, 0, 0.12);
          }
          .container-new > h2 {
            margin-left: 100px;
          }
          h1 {
            color: rgba(0, 0, 0, 0.87);
            font-size: 1.5rem;
            font-weight: 400;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            line-height: 1.35417em;
          }
          h1,
          h3 {
            margin: 0px;
          }
          .content h3 {
            margin-top: 10px;
            color: rgba(0, 0, 0, 0.54);
            font-size: 1rem;
            font-weight: 400;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            line-height: 1.5em;
            text-align: justify;
          }
          @media (max-width: 700px) {
            .card {
              margin: 30px 5px;
            }
            .new-card {
              margin: 30px 10px;
            }
            .container-new {
              margin-top: 60px;
            }
            .container-new > h2 {
              margin-left: 10px;
            }
          }
        `}
      </style>
    </>
  );
};
export default withRouter(Index);
