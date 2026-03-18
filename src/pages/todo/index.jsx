// src/pages/home/index.jsx
import Meta from '../../components/Meta';

function Todo() {
  return (
    <>
      <Meta title="Todo App" />

      <div className="container max-w-3xl prose">
        <h1>Todo App</h1>
        <h2>Список дел</h2>
      </div>
    </>
  );
}

export default Todo;
