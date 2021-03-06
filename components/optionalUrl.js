const OptionalUrl = ({ url, name }) =>
  url ? <a href={url}>{name}</a> : <span>{name}</span>;

export default OptionalUrl;
