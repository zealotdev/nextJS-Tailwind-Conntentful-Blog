import Typed from 'react-typed';
import Image from 'next/image';
import React from 'react';
import FeaturedSection from './FeaturedSection';
import TodaysEditorPick from './TodaysEditorPick';

export default function Layout({ todaysPick, categories }) {
  const options = {
    strings: [
      'George 😊',
      'Creator of Zeal Blog 🤗',
      'Web developer 🤫',
      'Trader.😉',
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    cursorChar: '|',
  };

  return (
    <div className="text-white">
      <section className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-16 lg:px-8 d-flex">
        <img
          src="/profile.jpeg"
          className="mx-auto h-20 w-20 md:h-40 md:w-40 rounded-full mb-6"
        />

        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block text-white xl:inline">Hi, I'm </span>
            <span className="block text-indigo-600 xl:inline">
              <Typed
                strings={[
                  'George 😊',
                  'A Tech Savvy 🤨',
                  'A Web developer 🤫',
                  'The Creator of Zeal Blog 🤗',
                  'A Trader 📈',
                  'George, and I say welcome 😊',
                ]}
                typeSpeed={70}
                backSpeed={70}
                loop={false}
                cursorChar={'|'}
              />
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
      </section>
      <section className="mt-16 md:mx-12">
        <div className="py-12 bg-white rounded-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TodaysEditorPick todaysPick={todaysPick} categories={categories} />
            <FeaturedSection />
          </div>
        </div>
      </section>

      <footer>Footer</footer>
    </div>
  );
}
