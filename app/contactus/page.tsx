import React, { useState } from "react";

export default function Contactus() {
  return (
    <div className="pt-32 py-12 mx-auto max-w-[1440px] mb-10 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className=" pb-5 text-4xl font-extrabold text-gray-900 text-center">
          Bize Ulaşın
        </h2>
        <p className="mt-2 text-xl text-gray-600 text-center ">
          Sizden haber almayı çok isteriz. Bize ulaşmaktan çekinmeyin.
        </p>
      </div>
      <div className="mt-10 max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              İsim
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold">
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-indigo-400"
              required></textarea>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-blue-300 hover:text-black focus:ring focus:ring-indigo-400">
              Gönder
            </button>
          </div>
        </form>
      </div>
      <div className=" absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
    </div>
  );
}
