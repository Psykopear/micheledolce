import OptionalUrl from "./optionalUrl";

const Journal = ({ journal }) => {
  if (!journal || !journal.name) return <></>;
  const { volume, pages } = journal;
  return (
    <span>
      , <OptionalUrl data={journal} />
      {volume && `, ${volume}`}
      {pages && `, ${pages}`}.
    </span>
  );
};

export default Journal;
