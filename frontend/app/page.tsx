import React from 'react';
import Reader from '../components/Reader';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 border-b border-[#EADCC9] pb-6">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#2C3E50]">
            NeuralDyslexia <span className="text-[#E67E22]">ReadAssist</span>
          </h1>
          <p className="mt-2 text-sm text-[#7F8C8D]">
            Enterprise portfolio pipeline optimizing visual processing and linguistic density.
          </p>
        </header>
        <Reader />
      </div>
    </main>
  );
}
