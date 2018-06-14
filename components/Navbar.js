export default () => (
    <section>
        <nav>
            <div className="navbar">
                <div className="logo-container">
                    <img src="static/logo/main.jpeg" />
                </div>
                <div className="title-container">Avishkar</div>
            </div>
        </nav>
        <style jsx>{`
         .navbar{
            width: 100%;
            height:56px;
            padding:4px 80px;
            box-sizing:border-box;
        }
        .logo-container{
            width:auto;
            height:48px;
            float:left;
        }
        .logo-container img{
            height:100%;
            width:auto;
        }
        .title-container{
            font-family: 'Merienda', cursive;
        }
        `}
        </style>

    </section>
)