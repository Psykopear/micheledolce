import OptionalUrl from "./optionalUrl";

const Journal = ({ journal }) => {
  if (!journal || !journal.name) return <></>;
  const { volume, pages, url, name } = journal;
  return (
    <span>
      <OptionalUrl url={url} name={name} />
      {volume && <b> {volume}</b>}
      {pages && ` ${pages}`}.
    </span>
  );
};

export default Journal;
