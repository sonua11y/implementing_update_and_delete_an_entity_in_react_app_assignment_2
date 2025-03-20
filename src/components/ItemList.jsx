import Item from "./Item";

const ItemList = ({ items, setItems }) => {
    const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

  // Handle delete
  const handleDelete = (id) => {
    fetch(`${API_URI}/${id}`, { method: "DELETE" })
      .then(response => {
        if (response.ok) {
          setItems(prevItems => prevItems.filter(item => item.id !== id));
        } else {
          console.error("Failed to delete item");
        }
      })
      .catch(error => console.error("Error deleting item:", error));
  };

  return (
    <div>
      <h2>Door List</h2>
      {items.length > 0 ? (
        items.map((item) => (
          <Item key={item.id} item={item} onDelete={handleDelete} />
        ))
      ) : (
        <p>No doors available</p>
      )}
    </div>
  );
};

export default ItemList;
