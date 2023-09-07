export default function Stars({ filled }: { filled: number }) {
  return (
    <div className="flex gap-1">
      {Array(5)
        .fill(0)
        .map((item, i) => (
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
