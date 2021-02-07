const Badge = ({ title, description, email, links, photo }) => {
  return (
    <div className="splash-wrapper">
      <div className="splash">
        <img className="photo" src={photo} />
        <div className="content">
          <h1 className="head">{title}</h1>
          <p className="subhead">{description}</p>
          <div className="contacts" id="_contacts">
            <div>
              <b>Email</b>
              <pre>
                <a href={`"mailto:${email}"`}>{email}</a>
              </pre>
            </div>
            {links.map((l) => (
              <div key={l.name}>
                <b>{l.name}</b>
                <pre>
                  <a href={`"${l.url}"`}>Download</a>
                </pre>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Badge;
