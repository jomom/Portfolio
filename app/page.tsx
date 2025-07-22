'use client'
import React,{useState} from "react";
import Header from "./components/Header";

export default function Home() {
  const [activeSession, setActiveSession] = useState("home");


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <main className="container mx-auto px-6 py-8">
         <h1 className="text-4xl font-bold text-white text-center">
          Portfolio Coming Soon...
        </h1>
        <p className="text-gray-300 text-center mt-4">
          Building step by step!
        </p>
      </main>
    </div>
  );
}

