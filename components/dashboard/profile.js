export default function({ name, email, phone, college }) {
  return (
    <div>
      <div className="row center-md center-xs center-lg">
        <div className="img-container">
          <img src="/static/icon/male.png" alt="Profile Image" />
        </div>
      </div>
      <div className="row center-md center-xs center-lg">
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
      </div>
      <style jsx>
        {`
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
