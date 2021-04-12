import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCat = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenu] = useState(items);
  const [cat, setCat] = useState(allCat);

  const filterItems = (category) => {
    if (category == "all") {
      setMenu(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories cat={cat} filter={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
