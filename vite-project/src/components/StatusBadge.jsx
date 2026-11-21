import { LuStar } from "react-icons/lu";

const StatusBadge = ({ text, variant }) => {
  return (
    <span className={`status-badge ${variant}`}>
      {variant === "featured" && <LuStar size={13} />}
      {text}
    </span>
  );
};

export default StatusBadge;