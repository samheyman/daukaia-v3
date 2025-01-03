interface ButtonProps {
  text: string;
  path: string;
  type: string;
}

export default function Button({ text, path, type }: ButtonProps) {
  let classes,
    color = "",
    backgroundColor = "",
    borderColor = "";
  if (type === "primary") {
    classes =
      "rounded-full border border-solid" +
      "  transition-colors flex items-center justify-center " +
      " text-background gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" +
      "hover:bg-clr-accent-500";
    backgroundColor = "var(--clr-accent-500)";
    borderColor = "var(--clr-accent-500)";
    color = "white";
  }
  if (type === "secondary") {
    classes =
      " rounded-full border border-solid" +
      "  transition-colors flex items-center justify-center " +
      " text-background gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" +
      "hover:bg-[#383838]";
  }
  if (type === "neutral") {
    classes =
      "rounded-full border border-solid" +
      "  transition-colors flex items-center justify-center " +
      " text-background gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" +
      "hover:bg-clr-accent-500";
    backgroundColor = "white";
    borderColor = "white";
    color = "var(--clr-accent-500)";
  }

  return (
    <a
      className={classes}
      href={path}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: color,
        textTransform: "uppercase",
        fontWeight: 600,
        maxWidth: "fit-content",
      }}
    >
      {text}
    </a>
  );
}
