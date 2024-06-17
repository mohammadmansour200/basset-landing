interface ICardProps {
  title: string;
  description: string;
}
function Card({ title, description }: ICardProps) {
  return (
    <div
      dir="auto"
      className="border border-border flex flex-col max-h-80 w-full rounded-xl p-6"
    >
      <span className="text-xl font-semibold">{title}</span>
      <span className="text-sm opacity-85">{description}</span>
    </div>
  );
}

export default Card;
