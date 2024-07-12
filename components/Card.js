import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Page = () => {
  const [selectedId, setSelectedId] = useState(null);
  const items = [
    { id: 1, subtitle: "Subtitle 1", title: "Title 1" },
    { id: 2, subtitle: "Subtitle 2", title: "Title 2" },
    { id: 3, subtitle: "Subtitle 3", title: "Title 3" },
  ];

  return (
    <div>
      {items.map(item =>
        <motion.div
          key={item.id}
          layoutId={item.id.toString()}
          onClick={() => setSelectedId(item.id)}
        >
          <motion.h5>
            {item.subtitle}
          </motion.h5>
          <motion.h2>
            {item.title}
          </motion.h2>
        </motion.div>,
      )}

      <AnimatePresence>
        {selectedId &&
          <motion.div layoutId={selectedId.toString()}>
            {items.map(
              item =>
                item.id === selectedId &&
                <div key={item.id}>
                  <motion.h5>
                    {item.subtitle}
                  </motion.h5>
                  <motion.h2>
                    {item.title}
                  </motion.h2>
                  <motion.button onClick={() => setSelectedId(null)}>
                    Close
                  </motion.button>
                </div>,
            )}
          </motion.div>}
      </AnimatePresence>
    </div>
  );
};

export default Page;
