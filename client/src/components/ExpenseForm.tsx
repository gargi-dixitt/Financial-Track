import { useState, FormEvent } from "react";
import API from "../Services/api";

interface ExpenseFormProps {
  onAdd: (expense: any) => void
}

export default function ExpenseForm({ onAdd }: ExpenseFormProps) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await API.post("/expenses", {
      title,
      amount,
      category,
    });

    onAdd(res.data);

    setTitle("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="border p-2 m-1"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border p-2 m-1"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        className="border p-2 m-1"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button className="bg-black text-white p-2 m-1">
        Add
      </button>
    </form>
  );
}