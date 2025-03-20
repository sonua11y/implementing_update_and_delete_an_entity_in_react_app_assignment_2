const Item = ({ item, onDelete }) => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
        <span>{item.name} - {item.status}</span>
        <button onClick={() => onDelete(item.id)} style={{ backgroundColor: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
          Delete
        </button>
      </div>
    );
  };
  
  export default Item;
  