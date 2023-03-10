export default function Panel(props) {
  return (
    <div className={`bg-neutral-100 p-4 rounded border ${props.className}`}>
      {props.children}
    </div>
  );
}
