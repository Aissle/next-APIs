"use client";

import { useEffect, useState } from "react";
import User, { UserProps } from "./components/user";
const API = "https://api.mockrest.com";

export default function Home() {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [selectedUser, setSelectedUser] = useState<UserProps[]>([]);
  const [data, setData] = useState([]);
  console.log(data);

  const getUsers = async () => {
    try {
      const response = await fetch(`${API}/users`);
      const users = await response.json();
      setUsers(users);
      localStorage.setItem("users", JSON.stringify(users));
    } catch (e) {
      alert("an error occured fetching all users");
      console.error(e);
    }
  };

  const getUser = async (id: string) => {
    try {
      const res = await fetch(`${API}/users/${id}`);
      const user = await res.json();
      setSelectedUser([user]);
    } catch (e) {
      alert("An error occured fetching all users");
    }
  };
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(`${API}/products`);
        const data = await response.json();
        setData(data);
        localStorage.setItem("users", JSON.stringify(data));
      } catch (e) {
        console.error("Error fetching data:", e);
      }
    }
    getProducts();
  }, []);

  const createUser = async ()

  async function postToApi() {
    try {
      const response = await fetch(`${API}/products`, {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          id: "7c8d9e0f-1a2b-4c3d-8e9f-0a1b2c3d4e5f",
          name: "Sleek Wireless Headphones",
          description:
            "High-fidelity wireless headphones with noise cancellation and 20-hour battery life for an immersive audio experience.",
          price: 249.99,
          brand: "TechTrend Innovations",
          category: "Electronics",
          rating: 4.5,
          reviewsCount: 150,
          stock: 500,
          sku: "9876543210123",
          dimensions: "18 x 10 x 5 cm",
          weight: 0.25,
          createdAt: "2025-10-03T22:38:00.000000+01:00",
          updatedAt: "2025-10-03T22:38:00.000000+01:00",
          comments: [
            {
              id: "9f0e1d2c-3b4a-5c6d-7e8f-9a0b1c2d3e4f",
              text: "Amazing sound quality and comfortable fit!",
              rating: 5,
              createdAt: "2025-10-03T22:38:00.000000+01:00",
              productId: "7c8d9e0f-1a2b-4c3d-8e9f-0a1b2c3d4e5f",
              userId: "1a2b3c4d-5e6f-7a8b-9c0d-1e2f3a4b5c6d",
            },
          ],
        }),
      });
      const result = await response.json();
      console.log("Posted successfully:", result);
    } catch (e) {
      throw new Error("yeah, messed up!");
    }
  }
  return (
    <div className="w-full h-screen">
      {data.slice(0, 6).map((product) => (
        //<p>hi</p>
        <div key={product.id}>{product.name}</div>
      ))}
      <button onClick={postToApi}>post</button>
         
    </div>

    // <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
  );
}
