import "./Checkbox.scss";

export default function Checkbox(props) {
  return (
    <div className="parentCheckboxCls">
      <div className={props.required ? "requiredCls labelCls": "labelCls"}>{props.label}</div>

      {props.items.map((item, ind) => (
        <div className="indivitalCheckItemCls">
          <input
            type="checkbox"
            id={item.id}
            name={item.name}
            value={item.value}
          />
          {item.value}
        </div>
      ))}
    </div>
  );
}
