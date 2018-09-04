import React, { Component } from "react";
// import axios from "../axios";
import axios from "axios";
import baseURL from "../config";
axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

const data = [
  {
    name: "softablitz",
    displayName: "Softablitz",
    size: 3,
    category: "cyberquest",
    info:
      "Has a software ever made you go insane? Has a software ever fascinated you so much that you fall for it like your beloved? If the above questions have triggered a bulb in your neurons, then you've landed in the right place!! To all the software geeks out there, here's your chance to gear up your enthusiasm and consume your grey matter in developing some fascinating software. Let the \"blitz\" of developing software make you go wild and let IntelliJ IDEA be your life for this Avishkar. Together let's make Softablitz big."
  },
  {
    name: "insomnia",
    displayName: "Insomnia",
    size: 3,
    category: "cyberquest",
    info:
      "Are you one of those who love brainstorming and problem-solving? Are you one who feels like coding is fun? Are you the one who loves algorithms and data structures? If you find yourself in this league, then this contest is just for you.Insomnia is the flagship competitive coding event of annual technical fest Avishkar of MNNIT, Allahabad. It is an ACM-ICPC style team programming contest. Participants from all over the world can register and no registration fee is required. The team can consist up to maximum 3 members. The event consists of 2 rounds. The first round is an online qualifying round of 3 hrs. and the shortlisted teams will battle in the second round which is an onsite final round of 5 hrs. The problem set in each round promises to be interesting and of varying difficulty level.So, don’t miss the chance of being in an “insomniac” atmosphere of coders. Insomnia gives you a chance to showcase your coding skills in a rigorous and challenging contest and to win exciting prizes."
  },
  {
    name: "softathalon",
    displayName: "Softathalon",
    size: 1,
    category: "cyberquest",
    info:
      "Softathlon is the annual flagship event of MNNIT Allahabad. This is the placement oriented event to put your knowledge to test in different topics related to computer science. It tests you by hosting programming and logical round, group discussion and personal interviews. Come and get insight on how the placements sessions work.“Let the knowledge do the talking.“"
  },
  {
    name: "webster",
    displayName: "Webster",
    size: 3,
    category: "cyberquest",
    info:
      "The web is one of the greatest inventions. Whether it's watching your favorite shows, booking tickets, sharing pictures the web has covered you. Webster is a platform for aspiring web developers to showcase their skills. The registered teams will be given some problem statements on what to build. The event consists of 3 rounds, abstract submission, and onsite coding and final submission. Three winning teams will be chosen based on their performances. Come let's build the web for all."
  },
  {
    name: "droidrush",
    displayName: "Droidrush",
    size: 3,
    category: "cyberquest",
    info:
      "Android is intended to be customizable, and we welcome innovations. Starting from smartphones, tablets to TVs and wearable’s, Android is one of the most used OS worldwide. Over 1.5 billion people use it regularly. Droidrush is annual android app development event of MNNIT Allahabad. The event helps you grasp in the concepts of android development and provides you with a pool of opportunities. You can also get a chance to publish your application on Play Store itself. “Come, Show your ideas and develop the next revolutionizing app”"
  },
  {
    name: "codeoftheday",
    displayName: "Code of the Day",
    size: 1,
    category: "cyberquest",
    info:
      "“A code a day keeps boredom away” Ever felt like you can do the problem but want more time to solve, then Code of the Day (COD) is for you. COD is 7 days long programming contest intended for enthusiast programmer which will help them evolve/build their logical thinking. Every day new question will release in increasing level of difficulty, one need to submit the correct solution within 24 hours to get the full score. With each passing day, maximum score for correct submission will decrease linearly."
  },
  {
    name: "operaomnia",
    displayName: "Operaomnia",
    size: 2,
    category: "cyberquest",
    info:
      "An event where your mind will think faster than before. An event where your IQ will be challenged to yet another level, An event where your zeal for mind twisters will be raised to a new high, An event where your brain, with riddles is surely gonna fly. An event where the puzzles will puzzle your mind and heart, as never before.  Behold yourself, as Avishkar presents to you, Operomnia, an event where your mind goes on an adventurous ride with the puzzles and riddles and which will instigate an adrenaline rush in all those puzzle loving minds.Come and see what puzzles can do to you and you to puzzles. "
  },
  {
    name: "revengg",
    displayName: "Revengg",
    size: 2,
    category: "cyberquest",
    info:
      "“Basically, if reverse engineering is banned, then a lot of open source community is doomed to fail.” ...and today we literally live in the era of open-source. No wonders that with every byte of information we add to our cellphone or laptop, the complicated and never-ending mesh of computers all over the world are affected by us. It is the reverse engineering that the hackers use to pull out the sensitive information from our data and have an inevitable serious impact on us. REVENGG is the event, short for REVerse ENGineering that takes out the playful hacker from inside of the young talents. With a series of events, rounds and games, the participants are tried to be given a hand-on experience of the intricacies of a computer. There shall be “Capture the Flag” events, to expose the real-world hacking and information retrieval to the participants. The winners will be awarded with cool prizes and goodies. And who knows when the next world war will be a Cyber War, you will be on the winning side!"
  },
  {
    name: "tuxwars",
    displayName: "Tuxwars",
    size: 2,
    category: "cyberquest",
    info:
      "The Linux philosophy is ‘Laugh in the face of danger’. Oops. Wrong One. ‘Do it yourself’. Yes, that’s it.” - Linus Torvalds. Linux is the most fascinating operating system and the true-love of all the programmers. Linux is free, secure, flexible, customizable and most widely deployed operating system in the world. Many of the devices we own, let alone Android, digital storage, video recorders, cameras, smart watches and what not run the Linux kernel in their core. That makes everyone, from even a novice or an expert programmer, feel the need to learn about Linux. TUXWARS is the event for all such curious souls out there to learn, apply and play with Linux perks and delve deeper into its bits and bytes. The event focuses on the core concepts and wide variety of applications and perks that the secure Linux kernel provides us. There shall be various rounds for testing and evaluating the performance of the participants, with cool prizes waiting for the winners alongside.After all, ‘Do it yourself’ is the Linux philosophy."
  },
  {
    name: "opensource",
    displayName: "OpenSource",
    size: 1,
    category: "cyberquest",
    info:
      "An Open Source Event, which aims to get more people into the world of open source. This event gives a jumpstart to open source development skills. It also serves as a warm up for GSoC and other global open source competitions. This is a month long event, throughout the whole event participants learn different open source tools, solve various issues and compete against one another to be the winner."
  },
  {
    name: "sphinx",
    displayName: "Sphinx",
    size: 2,
    category: "cyberquest",
    info:
      '"Well, if it can be thought, it can be done, a problem can be overcome".Avishkar brings to you a mind-altering enigmatic extravaganza where quick-wit will be your guide, speed will be your weapon, math will be your language and your mind will be blown! Get ready to unleash the genius within you and let\'s see who wins this battle of logic and speed.'
  },
  {
    name: "logicalrhythm",
    displayName: "Logical Rhythm",
    size: 3,
    category: "cyberquest",
    info:
      "Logical Rhythm, the flagship #AI event of Avishkar, techno-management festival of MNNIT; where, #ML enthusiasts pitch their data skills against themselves to come up with better solutions for classic #ML problems in the industry. The event also serves to induct the fresher’s into the world of #ML and #DL, and give them a firsthand experience of AI development.It has been long hailed that Machine Learning is the electricity of 21st century, but, the reality is, Machine Learning applications are still in their infancy. To harness its full potential and have it diffuse into the masses, like electricity, more minds are needed to be put into its development, which has also been the conclusion of many tech giants in the field.Conceived with the aim to bring AI within the reach of more developers, and AI developers to industry to solve its long standing problems; the event opens its competition platform across colleges, years and streams, witnessing participations from all over India*."
  },
  {
    name: "inception",
    displayName: "Inception",
    size: 1,
    category: "cyberquest",
    info:
      "An event for budding coders/developers (fresher’s) which will introduce them to the world of programming. We intend to induce reasoning and problem solving skills in them with a blend of technical know-how which will help them in taking the first step in the journey of development."
  },
  {
    name: "codewarriors",
    displayName: "Code Warriors",
    size: 2,
    category: "cyberquest",
    info:
      "CodeWarrior is CyberQuest flagship Artificial Intelligence Challenge. It's one of a kind challenge that will run for 21 days (Tentative). There is only one problem statement in the challenge - the game for which you have to write a bot.You will be given a two-player game and you have to write a bot that will play that game against other bots. Your bot has to adhere to the rules of the game given in the problem statement, and play against the other bot.While the challenge is live, you will have one system generated bot against which you can test your bot. The default bot will be a very basic bot, if you win against that bot it doesn't mean you will win against other players also.Also you can challenge other people who have submitted their bots to play against you. Once the challenge is over, all the bots that have been submitted will be played against other bots in a onsite tournament. The bot that wins the tournament will be declared the winner."
  },
  {
    name: "quintathloncore",
    displayName: "Quintathlon (core)",
    size: 1,
    category: "electromania",
    info:
      "An event to accustom an electronics engineer with the company recruitment process and to relinquish the pressure before going through the recruitment process.This will make your mental ability,technical as well as software skills in execution at its best.Commencing with the online test round (technical aptitude and software)followed by interview rounds comprising of software,technical,hr and finally the group discussions.GDs will give you a platform to open up and will test your current affairs knowledge.The online test round will have a cut off and the selected ones move to next round.After this there is no elimination round as such .All candidates get to sit in interviews and GD.The scorecard will be prepared by summing up the marks achieved in every round.And the witty one to get maximum marks will be announced as the winner."
  },
  {
    name: "circuitoftheday",
    displayName: "Circuit of the day",
    size: 2,
    category: "electromania",
    info:
      "It is 1 week event, in which 1 circuit solving problem is provided daily and 24 hours time limit is given for solving each circuit.Circuit will be solved using Proteus simulation software.Different question set will be generated for 2nd and 3rd year.Marking will depend on time of submission and on complexity of the circuit."
  },
  {
    name: "quintathlonsoftware",
    displayName: "Quintathlon (software)",
    size: 1,
    category: "electromania",
    info: "No description provided"
  },
  {
    name: "codotron",
    displayName: "Codotron",
    size: 3,
    category: "electromania",
    info:
      '"Truth can only be found in one place: the code."- Robert C. Martin. Electromania brings you a platform to show off your coding skills. The ACM-ICPC style coding competition will test your coordination, resilience  and on-the-go-jugaad skills. So gear up, put on your thinking caps, form the best team you can, and code to win.'
  },
  {
    name: "embeddeddesign",
    displayName: "Embedded Design",
    size: 3,
    category: "electromania",
    info:
      "First the problem and design specifications are given to the participants. Problem statement is based on designing real device using 8 bit micro-controller platform.Microcontroller is programmed using IDE and appropriate hardware circuit is interfaced with it.This event is unique as it challenges participants to work in both domain software as well as in hardware circuit design and it's optimization to reduce the overall project cost."
  },
  {
    name: "impromptu",
    displayName: "Impromptu",
    size: 2,
    category: "electromania",
    info:
      "Impromptu, an on-the-spot circuit designing event, tests the fundamentals of Electronics Engineer, their presence of mind, and ability to come out with innovative designs in limited time with limited resources. This event provides a healthy platform for all electronics enthusiasts to exhibit their skills against the best of the best in this specialization. "
  },
  {
    name: "innodev",
    displayName: "Innodev",
    size: 4,
    category: "electromania",
    info:
      "Software Development is quintessential part for engineering students' skillset, especially those belonging to the circuit branches. The diverse problems that entail from all the circuit branches, often require a combination of technology paradignss to develop the desired h-stic solutions. Innodev aims to provide a platform where developers could develop holistic solutions to the present day problems, using the full spectrum of development tools available to them."
  },
  {
    name: "combomagic",
    displayName: "Combo Magic",
    size: 3,
    category: "electromania",
    info:
      "It is a circuit designing event in which the one who come with a better circuit with less complexity will be winner.This event will enhance the knowledge of reducing circuit complexity and will improve there skills of making circuits.For first year this event will make them familiar with different basic but important components and their uses and they will also learn how to make a combination of different component to make magic and from this comes the name. Giving you one of the event with maximum no of participation....... Combo Magic. P.S.-programmable components are not allowed"
  },
  {
    name: "fpga",
    displayName: "FPGA",
    size: 3,
    category: "electromania",
    info:
      "FPGA (Design), one of the major hardware events in Electromania, is targeted to the designing of FPGA synthesis solutions with industrial applications in the fields like computer architecture, digital signal processing, cryptography, etc. Verilog HDL (Hardware Description Language) is the hardware description language used for synthesis solutions followed by their behavioral simulation and implementation on FPGA kits available for the academic purpose- ranging from the Spartan 3 family to Artix 7 family."
  },
  {
    name: "palladin",
    displayName: "Palladin",
    size: 1,
    category: "genesis",
    info:
      '"Find out what you like doing best and get someone to pay you for doing it." This event will evaluate your Aptitude,communication skills, and confidence needed to fully participate and succeed in the corporate world. Take charge of your career trajectory and unlock your potential to create winning strategies. Finally, this event will include all the processes which are followed during placements.'
  },
  {
    name: "centraldogma",
    displayName: "Central Dogma",
    size: 3,
    category: "genesis",
    info:
      '"Biotechnology is the third wave in biological science and represents such an interface of basic and applied sciences, where gradual and subtle transformation of science into technology can be witnessed.”“It is beyond expectation on what the biotechnology has accomplished and reached in just a matter of time. Humanity has just start to comprehend and recognized the endless opportunities it has open. As technology assures to provide solution to every frightening problem we face every now and then, so is mankind is expecting a more develop biotechnology in the future. A technology that is more reliable and firm”.“Biotechnology can be a great solution to mankind struggles”.Do you know that in Norway there is a vault for storing seeds in case of Third World War like destruction?Do you know that DNA can be used as data-storage devices?Do you know that there are super-muscled pigs, fast-growing salmon,featherless chicken and see-through frogs?Currently, there is so much going on in the field of biotechnology!We bring you “Central Dogma”, the core event of Genesis, which is highly revered for those inquisitive scientists who wish to achieve breakthrough in biotechnology research.Participate in one of the most challenging event designed for the research-oriented community."Research is what I’m doing when I don’t know what I’m doing." -Wernher von Braun'
  },
  {
    name: "cluequest",
    displayName: "Cluequest",
    size: 5,
    category: "genesis",
    info:
      '"Extraordinary things are always hiding in places people never think to look".Do you have what it takes to uncover the hidden truth and to solve mind boggling puzzles? This event will test your determination and your wits as you will have to dig deeper to win. So, freshen up your wits, tie your shoelaces and get ready for the most exhilarating and thrilling part of Genesis and Avishkar.'
  },
  {
    name: "SURVIVOR SERIES",
    displayName: "SURVIVOR SERIES",
    size: 2,
    category: "mechrocosm",
    info:
      '"Don\'t limit your challenges but challenge your limits." \nAt every point in this competition we will challenge you to beat your extremes. So, get ready to enter into the world of puzzles, riddles, mysteries and brain teasers.\nWe present you the most challenging and exciting event of Avishkar:  Survivor Series'
  },
  {
    name: "VENI VIDI VICI",
    displayName: "VENI VIDI VICI",
    size: 3,
    category: "mechrocosm",
    info:
      '"I came, I saw, I conquered"\nNow, it’s your time to conquer the world by showcasing your entrepreneurial skills. It is an event where you will come across the challenges in setting up your own venture. In this event you have to setup your own industry and provide all the necessary details required to setup and run the plant.\nSo, let\'s see who can be the future job creators.'
  },
  {
    name: "BLUEPRINT",
    displayName: "BLUEPRINT",
    size: 2,
    category: "mechrocosm",
    info:
      '"If you can imagine it you can create it" -William Arthur ward\nEvery big project you see today has formed from some abstract idea. Framing and modelling ideas is the most vital step to get clear picture of the project before implementation.\nThis event gives you the platform to bring your imagination to life using various CAD softwares and compete against other designers across the country.\nIn this challenge participants use designing softwares like Solidworks, Catia, etc. to conceptualize, model and Improves its functionality using your imagination.'
  },
  {
    name: "THEMATICA",
    displayName: "THEMATICA",
    size: 5,
    category: "mechrocosm",
    info:
      "''If the challenge exists, so must the solution''\nThematica is an event in which participants have to find a feasible and cost effective solution for general daily life problem faced by society and present it before a panel of judges. Their ideas will be judged on the basis of Innovation, feasibility and cost effectiveness."
  },
  {
    name: "SCRAPHEAP",
    displayName: "SCRAPHEAP",
    size: 3,
    category: "mechrocosm",
    info:
      "''For some people, its junk, for us, it’s Inventory''\nEver thought what could be made out of junks. Go back to your childhood, revisit memories and create something interesting with scrapheap by putting life into scraps for something bigger and better. "
  },
  {
    name: "PUMP IT UP",
    displayName: "PUMP IT UP",
    size: 3,
    category: "mechrocosm",
    info:
      "Pump it up, as the name suggest would require you to use your strength both mental and physical to pump the rocket made out of a cold Drink bottle to a distance of more than 75m. A rocket fight which would require you to shoot rocket using projectile in the competitors’ den and you need to protect yourself with a shield (a thin steel plate).\nEvent would consist of few amazing rounds and the best team shall win and awarded."
  },
  {
    name: "AUTOMAX",
    displayName: "AUTOMAX",
    size: 6,
    category: "mechrocosm",
    info:
      "\"The way I drive, the way I handle a car, is an expression of my inner feelings’’. Now it’s time to express your inner feelings.\nIt is an event where you learn how a masterpiece of engineering, Formula cars works and showcase your technical prowess, skills and hone your knowledge pertaining to real life engineering. It's a never ending battle of making your cars better and also trying to be better yourself.\nFinal stage of the event provides you the chance to race your car among your competitors and conquer it. "
  },
  {
    name: "CONTRAPTION",
    displayName: "CONTRAPTION",
    size: 5,
    category: "mechrocosm",
    info:
      "Contraption is one of the most interesting, innovative and unique events of Mechrocosm. It consists of a chain of different ‘energy conversion’ steps, in which one step triggers the next one leading to completion of final task. In this event participants are asked to make a Contraption system which will perform various energy transformations till final task."
  },
  {
    name: "TRIATHLON",
    displayName: "TRIATHLON",
    size: 1,
    category: "mechrocosm",
    info:
      "\"Don't only practice your art, but force your way into its secrets; art deserves that, for it and knowledge can raise man to the Divine.\"   Ludwig van Beethovenn.\nAptitude test-Interviews alone may not provide the in-depth look at the candidate that is required, so the addition of an aptitude test offers greater insight into the candidate's potential for success.\nGroup discussion: opportunities to test your ideas and opinions against the ideas and opinions of your peers.\nInterview- To get you accustomed to the motive behind job interview and help you tailor better responses"
  },
  {
    name: "chanakyaneeti",
    displayName: "Chanakya Neeti",
    size: 2,
    category: "monopoly",
    info:
      "We cannot solve a problem with the same level of thinking that created them. Explore the ratiocinative skills in you. Every situation has numerous solutions; the most efficacious one is required. We learn theory, time to apply some of the skills into reality. Chanakya Neeti will put you into the shoes of a world class manager that will help you to take strategic decisions at a spur of the moment. Like Chanakya this event will give you the chance of making the definitive strategies for business scenarios. GRAB THE OPPORTUNITY!"
  },
  {
    name: "netritva",
    displayName: "Netritva (Monopoly)",
    size: 1,
    category: "monopoly",
    info:
      "Too often, we believe our basic skills and credentials suffice, however, personal presence, self- assurance, and grace under pressure—charisma—differentiate the best leaders from others with similar talents and backgrounds. These qualities improve the ability to make a positive first impression as well as a lasting one, connect quickly and authentically with important people and develop an inner sense of confidence. Netritva is one such event which looks out for such charisma in the participants to bring out the true leaders in this leadership event of Avishkar, through multiple exciting and challenging rounds."
  },
  {
    name: "stallmart",
    displayName: "Stallmart",
    size: 4,
    category: "monopoly",
    info:
      "Hello ENTERPRENUERS!! Ever thought of some innovation? Do u got the urge to make money through your ideas. Then this the best chance you have got! Grab it and earn it. If you ever thought of a start up, then have a demo experience of market from here. Stall mart brings you ‘stall your ideas’. Come up with an innovative business, implement the strategies and reap the benefits. Experience the thrill, stress and excitement of owning a business. Use your ethical ways to earn maximum profits and you may win. It is the time to innovate and implement. It’s an “ALL YOU EARN” event. Show the real entrepreneur inside you."
  },
  {
    name: "navachar",
    displayName: "Navachar",
    size: 3,
    category: "monopoly",
    info:
      "Having an innovative business idea is great but put it to test is the real deal. Come up with your best business ideas and present it like a real manager, convince the audience and grab your deal. Navachar brings you the best platform to present your business idea out in the world and test its feasibility, functionality, and relevance in the real business atmosphere."
  },
  {
    name: "ziggurare",
    displayName: "Ziggurare",
    size: 4,
    category: "nirmaan",
    info:
      "Being updated with software skills is very essential professional requirement for a civil engineer. It is just another feather in your cap and gives you an edge over your fellow competitors. In this event imagination capabilities and designing skills of the participants will be tested.Be a part of future development that is awaiting the field of civil engineering in the design area. So come in large numbers and bring out the designer in you."
  },
  {
    name: "shutterup",
    displayName: "Shutter Up",
    size: 1,
    category: "nirmaan",
    info:
      "Do  you  love  to  capture  the  interesting  and  beautiful  scenes  around  you?  Do  you  stay  up  at nights  worrying  about  “composition”?  If  yes,  then  look  no  further.   The  NIRMAAN's  Online  Photography  Contest  'SHUTTER UP'  beckons  you!   Take  out  your  cameras  and  smartphones  and  click  away!  There is something more for you all. “You  don’t  take  a  photograph,  you  make  it.”  ―  Ansel  A"
  },
  {
    name: "linkidge",
    displayName: "Linkidge",
    size: 6,
    category: "nirmaan",
    info:
      "They say architecture is music in space, frozen at the spot, an art that calls for intricate design and imagery. Sometimes the best ideas are born out of the simplest of things. So we present to you the very dais to bring out yours.Unlimited ice cream sticks. Five creative minds. One structure. Strive for perfection in everything you do. Take the best that exists and make it better. When it does not exist, design it.—Sir Henry Royce, English engineer One of the biggest engineering problems is to connect people, to overcome physical obstructions and topographical boundaries for proper development of our society. Bridges provide the structural solution to all these problems, guaranteeing safest and easiest link between two parts through most adverse conditions like rivers, canopies, oceans, trenches and much more. Bridges are essential to our nation's infrastructural development Here at LINKIDGE event of Avishkar we provide you a platform to showcase your innovation, creativity, knowledge, and ability to tackle practical problems related to connecting to places with a model bridge."
  },
  {
    name: "concube",
    displayName: "Concube",
    size: 5,
    category: "nirmaan",
    info:
      "Civil Engineering is incomplete without knowledge of concrete. All constructions, whether a minor or a major one, require use of concrete. So, here we arrive with Concube 2018 ,the best opportunity to test your knowledge and understanding about concrete and to use theoretical concepts to solve actual field problem. So make a team, cast your concrete cubes and get them tested as per standard criterias. Prove your worth by solving compulsive industrial problems using your skilled knowledge in simulation and modelling."
  },
  {
    name: "terraquiz",
    displayName: "Terraquiz",
    size: 3,
    category: "nirmaan",
    info:
      "Having an extra knowledge is never bad. Be the jack of all trades and figure out your knowledge and luck in the tri-round event 'terraquiz' . Find your mates and check your aptitude potential, answer general knowledge questions, solve trivias and puzzles with a pinch of civil engineering experience."
  },
  {
    name: "cognizance",
    displayName: "Cognizance",
    size: 1,
    category: "nirmaan",
    info:
      "'Change is the very law of nature . ' Abiding by this statement and keeping pace with the modern day requires technical and soft skills in abundance . So buckle up to test and improve the same and discover hidden aspects of your personality via Cognizance 2k18 . The event involves technical , aptitude , GD and PI rounds resembling both campus placements and the selection process in gate/ese."
  },
  {
    name: "infinitycrusade",
    displayName: "Infinity Crusade",
    category: "robomania",
    info:
      "This event is specially for 1st year to, introduce them about the fundamental of autonomous robotics. In this event they have to design a robot that can difference between white and black and follow the white line along some standard paths.",
    size: 4
  },
  {
    name: "fractalhunt",
    displayName: "Fractal Hunt",
    category: "robomania",
    info:
      "This event is for 2nd and 3rd year students. The teams here will design a bot which will collect all infinity stones in arena and place it in infinity gauntlet of Thanos.",
    size: 4
  },
  {
    name: "theterraintrekofgliese",
    displayName: "The Terrain Trek of Gliese 667C b",
    category: "robomania",
    info:
      "This event is open to all, this is manual robotics event, to check your skill in field of robotics hardware designing and application of mechanics in robotics. in this event you have to design manual control robot that can perform several task given on arena.",
    size: 4
  },
  {
    name: "warofcurrents",
    displayName: "War of Currents",
    size: 1,
    category: "powersurge",
    info: "No description provided"
  },
  {
    name: "preddefined",
    displayName: "Predefined Hardware",
    size: 5,
    category: "powersurge",
    info:
      "“You have to learn the rules of the game and then you have to play better than anyone else.” This event is a fun filled and pragmatic approach to real life problems, making use of the concepts of Embedded Systems. It provides a platform to learn and enhance a student's perspicuous perspective towards automation, which is the near future. Merge the concepts of microcontrollers, Power Electronics, Software and Hardware based design, Simulations and control; implement in real time and upgrade yourself to higher levels of day to day technical solutions. "
  },
  {
    name: "codesparks",
    displayName: "Codesparks",
    size: 1,
    category: "powersurge",
    info:
      "It's going to help the students of electrical to get to know about the procedure of software company placement rounds. It's going to follow the same pattern as of any placement rounds. All those students gonna benifit who are pursuing for software companies and all those other, who are thinking of giving coding a chance."
  },
  {
    name: "pentathlon",
    displayName: "Pentathlon",
    size: 1,
    category: "powersurge",
    info:
      '"Contest entailing 5 distinct types of Competition".With this introduction, we bring forward the Flagship event of Electrical Branch PENTATHLON.This event will put your core knowledge , aptitude as well as communication skills to test.As the name suggests this event will consist of 5 events where your various skillsets will be tested.In short , this is the best opportunity to have experience of placements without actually feeling the stress of it. So guys PARTICIPATE , LEARN and WIN.P'
  },
  {
    name: "circuitbizz",
    displayName: "Circuit Bizz",
    size: 1,
    category: "powersurge",
    info:
      "This event will take you through the rollercoaster of core electrical.If you want to put your core  knowledge to test,then this is the place.This event has three rounds which will test your theoretical knowledge as well as your tuning with circuits It will be a wonderful learning experience.So PARTICIPATE , LEARN and WIN."
  },
  {
    name: "aquarochetta",
    displayName: "Aqua Rocchetta",
    size: 4,
    category: "rasayans",
    info:
      "Ever dreamt of having a mini-rocket of your own? If yes, Rasayans’18 brings to you a thrilling opportunity to make your own water rockets and see them fly high! It’s a high time to design and construct your water propelled rocket pressurized with air and compete with surging excitement in AQUA-ROCCHETTA, the water rocket event of Avishkar.                Let’s keep the momentum high and give thrust to our innovation to take a lead in this event!"
  },
  {
    name: "chem-e-dexterous",
    displayName: "Chem E Dexterous",
    size: 1,
    category: "rasayans",
    info:
      "Sell me this pen. Jordan Belfort famously asked this question to some salesmen in order to know how dexterous they are in selling something as simple as a pen.So come and show us how dexterous you are..how different you are than the rest.   Get to know your own strengths,switch your thinking,say you are good without actually saying you are good. Chemical department presents 'Chem-e-Dextrous'- an event where we will see how you can represent yourselves in Campus Interview.So come and explore the sea of knowledge within yourselves."
  },
  {
    name: "chemcraft",
    displayName: "ChemCraft",
    size: 2,
    category: "rasayans",
    info:
      "The collaborative relationship between industrial design,academically and professionally, is a pivotal relationship in the development of new ideas.The main objective of this event is to develop a better understanding of the processes in relevance  to the designing of chemical industry."
  },
  {
    name: "quiziosity",
    displayName: "Quiziosity",
    size: 2,
    category: "rasayans",
    info:
      "Diddle, diddle, diddle! Time for a riddle. All you need to do is keep your eyes on the prize that you can get with the strategies you device. Questions are ready and so are we, and we know we would get the most curious of thee."
  },
  {
    name: "simulazione",
    displayName: "Simulazione",
    size: 3,
    category: "rasayans",
    info:
      "Knowledge without application is like a book that is never read!Prove your worth by solving compulsive industrial problems using your skilled knowledge in simulation and modelling."
  },
  {
    name: "vision",
    displayName: "Vision",
    size: 3,
    category: "rasayans",
    info:
      "From designing processes to calibrating equipments, chemical engineer form the backbone of every industrial setup.It is a pretty standard task to start afresh on a blank sheet, but here comes the twist ! How well can you detect a flaw in an already established and designed industry? The latest addition to Rasayans ,Vision brings you the exciting opportunity to study a given industry,diagnose its deficiencies and come up with an apt solution,all with a clock hanging around your neck! Every Chemical Engineer worth his or her salt is invited to take up this challenge, which is a test of sheer common sense, temperament and analytical ability."
  },
  {
    name: "netritvaoligopoly",
    displayName: "Netritva (Oligopoly)",
    size: 1,
    category: "oligopoly",
    info:
      "“A leader is one who knows the way, goes the way and shows the way.” This event is for leadership hunt."
  },
  {
    name: "tradingstrategist",
    displayName: "Trading Strategist",
    size: 1,
    category: "oligopoly",
    info: "Marketing bonanza event"
  },
  {
    name: "adhole",
    displayName: "Adhole",
    size: 3,
    category: "oligopoly",
    info: "Advertising event. Do you have it in you to become the next ad guru."
  },
  {
    name: "pitchers",
    displayName: "Pitchers",
    size: 3,
    category: "oligopoly",
    info:
      "Platform to pitch your best startup idea. Everyone has ideas. They may be too busy or lack the confidence or technical knowledge to carry them out. But we want to carry them out. Its a matter of getting up and doing it."
  },
  {
    name: "nfs",
    displayName: "NFS Most Wanted",
    size: 1,
    category: "kreedomania",
    info:
      "Can you become the Most Wanted? Need for Speed Most wanted combines the tuner customization of Need for Speed Underground with an expanded take on the police chases of the Need for Speed."
  },
  {
    name: "rubix",
    displayName: "Rubix Cube",
    size: 1,
    category: "kreedomania",
    info: "How fast can you solve it, double digit or single digit ?"
  },
  {
    name: "fifa",
    displayName: "FIFA 2018",
    size: 1,
    category: "kreedomania",
    info: "Lets replay FIFA 2018 with our mindset and find out the results."
  },
  {
    name: "csgo",
    displayName: "Counter Strike",
    size: 5,
    category: "kreedomania",
    info:
      "Counter-Strike: Global Offensive is a multiplayer first-person shooter video game;  The game pits two teams against each other: the Terrorists and the Counter-Terrorists. Both sides are tasked with eliminating the other while also completing separate objectives, the Terrorists, depending on the game mode, must either plant the bomb or defend the hostages, while the Counter-Terrorists must either prevent the bomb from being planted, defuse the bomb, or rescue the hostages."
  },
  {
    name: "dota",
    displayName: "Dota 2",
    size: 5,
    category: "kreedomania",
    info:
      'Dota 2 is a multiplayer online battle arena (MOBA) video game in which two teams of five players compete to collectively destroy a large structure defended by the opposing team known as the "Ancient", whilst defending their own.'
  },
  {
    name: "pubgmobile",
    displayName: "PUBG Mobile",
    size: 4,
    category: "kreedomania",
    info:
      "PUBG is a multiplayer game where teams rival against each other to be crowned as the ultimate champions. Winner Winner Chicken Dinner."
  },
  {
    name: "aerodynamix",
    displayName: "Aerodynamix",
    size: 1,
    category: "aerodynamix",
    info: ""
  }
];
export default class extends Component {
  componentDidMount() {
    axios
      .post("/api/store", { data })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return <p>Hello</p>;
  }
}
