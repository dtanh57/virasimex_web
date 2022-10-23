import React from 'react';
import {motion} from 'framer-motion';

export default function AppAnimationWhenVisible({children}) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{once: true}}
      transition={{duration: 1}}
      variants={{
        hidden: {opacity: 0, y: '100px'},
        visible: {opacity: 1, y: 0}
      }}
    >
      {children}
    </motion.div>
  );
}
