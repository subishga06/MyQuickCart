"use client";

import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon } from "@/assets/assets";
import Link from "next/link";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { useClerk, useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { isSeller } = useAppContext();
  const router = useRouter();

  const { openSignIn, signOut } = useClerk();
  const { isSignedIn } = useUser();

  const handleAccountClick = () => {
    if (isSignedIn) signOut();
    else openSignIn();
  };

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push("/")}
        src={assets.logo}
        alt="logo"
      />

      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/">Home</Link>
        <Link href="/all-products">Shop</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Contact</Link>

        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
      </div>

      <ul className="hidden md:flex items-center gap-4">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />

        {isSignedIn ? (
<UserButton>
  <UserButton.MenuItems>
    <UserButton.Action
      label="Cart"
      onClick={() => router.push('/cart')}
      labelIcon={<CartIcon />}
    />
  </UserButton.MenuItems>
  <UserButton.MenuItems>
    <UserButton.Action
      label="My orders"
      onClick={() => router.push('/My orders')}
      labelIcon={<BagIcon />}
    />
  </UserButton.MenuItems>
</UserButton>

) : (
  <button
    onClick={handleAccountClick}
    className="flex items-center gap-2 hover:text-gray-900 transition"
  >
    <Image src={assets.user_icon} alt="user icon" />
    Account
  </button>
)}


      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button
            onClick={() => router.push("/seller")}
            className="text-xs border px-4 py-1.5 rounded-full"
          >
            Seller Dashboard
          </button>
        )}
        {isSignedIn ? (
<UserButton><UserButton.MenuItems>
    <UserButton.Action
      label="Home"
      onClick={() => router.push('/Home')}
      labelIcon={<HomeIcon />}
    />
  </UserButton.MenuItems>
   <UserButton.MenuItems>
    <UserButton.Action
      label="Products"
      onClick={() => router.push('/all-products')}
      labelIcon={<BoxIcon />}
    />
  </UserButton.MenuItems>
  <UserButton.MenuItems>
    <UserButton.Action
      label="Cart"
      onClick={() => router.push('/cart')}
      labelIcon={<CartIcon />}
    />
  </UserButton.MenuItems>
  <UserButton.MenuItems>
    <UserButton.Action
      label="My orders"
      onClick={() => router.push('/My orders')}
      labelIcon={<BagIcon />}
    />
  </UserButton.MenuItems>
</UserButton>

) : (
  <button
    onClick={handleAccountClick}
    className="flex items-center gap-2 hover:text-gray-900 transition"
  >
    <Image src={assets.user_icon} alt="user icon" />
    Account
  </button>
)}

      </div>
    </nav>
  );
};

export default Navbar;





