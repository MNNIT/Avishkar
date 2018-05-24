export default ({ src, title }) => (
    <div className="element">
        <div className="img-container">
            <img src={src} />
        </div>
        <div className="event-title"><p>{title}</p></div>
        <style jsx>{`
        .element{
            width: 30%;
            height: auto;
            margin:10px;
            border-radius:50%;
        }
        .img-container{
            width:100%;
            height:auto;
        }
        img{
            width:100%;
            height:auto;
        }
        .event-title{
            text-align:center;
        }
        `}

        </style>
    </div>
)