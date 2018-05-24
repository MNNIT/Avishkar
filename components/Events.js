import EventCard from "./EventCard";
export default () => (
    <section>
        <div className="events">
            <h2>Events at Avishkar</h2>
            <div className="container">
                <EventCard src="static/img/cyberquest.jpg" title="cyberquest" />
                <EventCard src="static/img/aero.jpg" title="Aerodynamix" />
                <EventCard src="static/img/electromania.jpg" title="Electromania" />
                <EventCard src="static/img/genesis.jpg" title="Genesis" />
                <EventCard src="static/img/mech.jpg" title="MECHROCOSM" />
                <EventCard src="static/img/nirmaan.jpg" title="Nirmaan" />
            </div>
        </div>
        <style jsx>{`
            h2{
                text-align:center;
            }
            .container{
                display:flex;
                width:80%;
                height:auto;
                margin: 0 auto;
                flex-wrap:wrap;
                justify-content:center;
                box-sizing:border-box;
            }
            .element{
                width: 30%;
                height: auto;
                margin:10px;
                border-radius:50%;
            }
            img{
                width:100%;
                height:auto;
            }
    `}
        </style>
    </section>
)