import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCat) => setCategories(newCat));
  }, []);

  return (
    <div className="dark:bg-neutral-900 dark:shadow-neutral-800 bg-white shadow-xl rounded-xl p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>

      {categories.map((cat, i) => (
        <Link key={i} href={`/category/${cat.slug}`}>
          <span className="cursor-pointer transition duration-300 hover:text-blue-400 hover:-translate-y-1 block pb-3 mb-3">
            {cat.name}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
