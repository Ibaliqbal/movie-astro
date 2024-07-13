import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import { motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { actions } from "astro:actions";
import { toast, Toaster } from "react-hot-toast";
const { signOut } = await import("auth-astro/client");

const PorfileModal = ({
  children,
  countries,
  user,
}: {
  children: React.ReactElement;
  countries: any[];
  user: {
    status: boolean;
    data: User;
  } | null;
}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [dataUser, setDataUser] = useState<{
    status: boolean;
    data: User;
  } | null>(user);
  return (
    <>
      <div onClick={() => setOpen(true)} className="cursor-pointer">
        {children}
      </div>
      <Modal open={open} setOpen={setOpen}>
        <motion.section
          initial={{ translateY: -635 }}
          animate={{
            translateY: 0,
            transition: {
              duration: 0.3,
            },
          }}
          exit={{
            translateY: -635,
          }}
          className="fixed bg-primary text-white h-fit max-w-[750px]  overflow-auto max-h-[700px] m-auto mt-12 inset-0 gap-4 z-[9999] p-6 rounded-xl"
        >
          <span
            className="text-2xl cursor-pointer absolute right-6"
            onClick={() => setOpen(false)}
          >
            <IoCloseSharp />
          </span>
          <h1 className="text-xl font-semibold">Profile</h1>
          <section className="w-full mt-4">
            <div className="w-full grid place-items-center">
              <img
                src={user?.data.image}
                alt="Avatar"
                loading="eager"
                width={200}
                height={200}
                className="rounded-full"
              />
            </div>
            <form
              className="w-full flex flex-col gap-8"
              method="POST"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = new FormData(e.target as HTMLFormElement);
                form.append("email", user?.data.email as string);
                try {
                  setIsLoading(true);
                  const { data } = await actions.updateUser.safe(form);

                  if (data?.success) {
                    setDataUser(() => {
                      return {
                        status: true,
                        data: data.data![0],
                      };
                    });
                  }
                } catch (error) {
                  console.error(error);
                  toast.success("Updated failed");
                } finally {
                  setIsLoading(false);
                  toast.success("Updated successfully");
                }
              }}
            >
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full py-3 bg-primary px-3 outline-none border-b-2 border-b-white"
                  defaultValue={dataUser?.data.name}
                />
              </div>
              <div className="w-full flex flex-col gap-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full py-3 bg-primary px-3 outline-none border-b-2 border-b-white disabled: cursor-not-allowed"
                  defaultValue={dataUser?.data.email ?? " "}
                  disabled
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="w-full flex flex-col gap-3">
                  <select
                    name="country"
                    id=""
                    className="text-black py-3 rounded-md"
                    defaultValue={dataUser?.data.country}
                  >
                    <option value="Selected country" disabled>
                      Select your country
                    </option>
                    {countries.map((country, i) => (
                      <option value={country.name} key={i}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="w-full grid grid-cols-2 gap-3">
                  <button
                    className="bg-white text-black rounded-lg disabled:cursor-not-allowed disabled:bg-opacity-35"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Processing..." : "Save"}
                  </button>
                  <button
                    type="button"
                    className="bg-red-600 rounded-lg"
                    onClick={() => {
                      setOpen(false);
                      signOut();
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </form>
          </section>
        </motion.section>
      </Modal>
      <Toaster position="bottom-center" reverseOrder={true} />
    </>
  );
};

export default PorfileModal;
