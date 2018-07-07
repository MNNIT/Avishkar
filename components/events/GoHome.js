import Link from "next/link";
export default () => {
  return (
    <div>
      <Link href="/">
        <a>
          <span>Home</span>
        </a>
      </Link>

      <style jsx>{`
        div {
          position: absolute;
          left: 15px;
          top: 15px;
          background-color: #eeeeee;
          color: #212121;
          padding: 5px 10px;
          border-radius: 5px;
          font-size: 13px;
        }
        a{
            text-decoration:none;
            color:  #212121;
        }
        ]
      `}</style>
    </div>
  );
};
