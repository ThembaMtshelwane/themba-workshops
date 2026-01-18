type Props = {
  title: string;
  summary?: string;
};

const InProgress = ({ title, summary }: Props) => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className=" mx-auto max-w-187.5 text-center">
        <h1 className="text-7xl">{title}</h1>
        <p className="text-lg px-2">{summary}</p>
      </div>
    </section>
  );
};

export default InProgress;
