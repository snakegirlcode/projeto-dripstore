const Section = ({
  title,
  titleAlign = "left",
  link,
  children,
  className = "",
}) => {
  return (
    <section className={className}>
      <div
        className={`flex items-center justify-between mb-4 ${
          titleAlign === "center" ? "justify-center" : ""
        }`}
      >
        <h2
          className="font-bold"
          style={{
            color: "#4A4A4A",
            fontSize: 24,
            textAlign: titleAlign,
            flex: titleAlign === "center" ? 1 : "unset",
          }}
        >
          {title}
        </h2>

        {link && titleAlign !== "center" && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{
              color: "#C92071",
              fontSize: 18,
            }}
          >
            {link.text}
          </a>
        )}
      </div>

      <div>{children}</div>
    </section>
  );
};

export default Section;
