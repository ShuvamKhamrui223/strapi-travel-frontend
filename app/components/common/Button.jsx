import Link from "next/link";

const Button = ({
  textContent = "button",
  filled = false,
  outlined = false,
  href = "/",
  isLarge = false,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={`text-gray-100 w-fit px-4 py-2 capitalize 
        ${filled && "bg-amber-600 hover:bg-orange-500"} 
        ${outlined && "outline-1 outline-gray-100"}
        ${isLarge && "py-4 px-6 text-lg"}
       `}
      {...props}
    >
      {textContent}
    </Link>
  );
};

export default Button;
