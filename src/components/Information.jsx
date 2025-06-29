const Information = ({ title, informations }) => {
  return (
    <div className="flex flex-column gap-2">
      <h3 className="font-bold text-base">{title}</h3>
      <ul className="list-none p-0 m-0">
        {informations.map((info, idx) => (
          <li key={idx}>
            <a
              href={info.link}
              className="no-underline text-sm hover:underline"
              style={{ color: "#F5F5F5" }}
            >
              {info.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Information;
