export default function Stars({ filled }: { filled: number }) {
  const arr = [0, 0, 0, 0, 0];
  return (
    <div className="flex gap-1">
      {arr.map((item, i) => (
        <span
          className={`relative text-2xl ${
            i < filled ? "text-black" : "text-[rgb(229,229,229)]"
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
}
