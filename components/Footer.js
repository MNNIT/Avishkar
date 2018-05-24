export default () => (
    <section>
        <footer>
            <div className="footer">
                <h2>I am footer</h2>
            </div>
        </footer>
        <style jsx>{`
        .footer{
            width:100%;
            padding:100px;
            height:auto;
            background-color : black;
            color:white;
            box-sizing:border-box;
        }
        h2{
            text-align:center;
        }
        `}
        </style>
    </section>
)