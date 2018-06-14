export default ({ src }) => (
    <div className="container">
        <img src={src}></img>
        <style jsx>{`
          .container{
              width:300px;
              height:auto;
              position:fixed;
              
              top:50%;
              left:50%;
              transform:translate(-50%,-50%);
              z-index:100;
          }
          img{
              width:100%;
              height:auto;
          }
        `}
        </style>
    </div>
)