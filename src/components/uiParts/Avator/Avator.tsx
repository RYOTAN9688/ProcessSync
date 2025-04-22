import "./Avator.css";

export interface AvatorProps {
  src: string;
  alt: string;
  size?: "small" | "medium" | "large";
}

/** Primary UI component for user interaction */
export const Avator = ({
  src,
  alt,
  size = "medium",
  ...props
}: AvatorProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={["storybook-avator", `storybook-avator--${size}`].join(" ")}
      {...props}
    ></img>
  );
};
