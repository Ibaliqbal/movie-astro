import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const menu = {
  open: {
    width: "105px",
    height: "105px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "105px",
    height: "40px",
    transition: {
      duration: 0.75,
      delay: 0.25,
      type: "tween",
      ease: [0.76, 0.34, 0.24, 1],
    },
  },
};

const childrenAnimte = {
  open: {
    opacity: 0,
    scale: 0,
    y: -20,
  },
  enter: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transformOrigin: "top",
    transition: {
      duration: 0.65,
      delay: 0.5 + i * 0.1,
      ease: [0.215, 0.61, 0.355, 1],
      opacity: { duration: 0.35 },
    },
  }),
  closed: (i: number) => ({
    opacity: 0,
    scale: 0,
    y: -20,
    transformOrigin: "top",
    transition: {
      duration: 0.5,
      delay: 0.5 * i * 0.1,
      type: "linear",
      ease: [0.76, 0, 0.24, 1],
    },
  }),
};

const FilterTime = ({
  time,
  filter,
  page,
}: {
  time: string;
  page: number;
  filter: string;
}) => {
  const [open, setOpen] = React.useState(false);

  const lists = [
    {
      name: "Day",
      href: `/trending?page=${page}&type=${filter}&time=day`,
    },
    {
      name: "Week",
      href: `/trending?page=${page}&type=${filter}&time=week`,
    },
  ];
  return (
    <motion.div
      variants={menu}
      initial="closed"
      animate={open ? "open" : "closed"}
      className="bg-white text-black absolute right-0 -top-2 z-20 font-semibold rounded-md"
    >
      <p
        className="text-center mt-2 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >{`${time.charAt(0).toUpperCase()}${time.slice(1)}`}</p>
      <AnimatePresence>
        {open && (
          <ul className="w-full mt-2 text-center flex flex-col gap-2">
            {lists.map((list, i) => (
              <motion.li
                variants={childrenAnimte}
                initial="open"
                animate="enter"
                exit="closed"
                custom={i}
                key={i}
                onClick={() => setOpen(false)}
              >
                <a href={list.href}>{list.name}</a>
              </motion.li>
            ))}
          </ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FilterTime;
