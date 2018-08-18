export default function({ name, email, phone, college }) {
  return (
    <div className="container">
      <div className="img-container">
        <img src="/static/icon/male.png" alt="" />
      </div>
      <div className="profile-container">
        <p>
          Name:
          {name}
        </p>
        <p>
          Email:
          {email}
        </p>
        <p>
          phone:
          {phone}
        </p>
        <p>
          college:
          {college}
        </p>
      </div>
      <style jsx>
        {`
          div.container {
            width: 100%;
            box-sizing: border-box;
            border-radius: 4px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
              0 3px 6px rgba(0, 0, 0, 0.23);
            padding: 20px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          div.img-container {
            width: 120px;
            height: auto;
          }
          img {
            width: 100%;
            height: auto;
          }
          div.profile-container {
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
