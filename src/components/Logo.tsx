import Link from "next/link";
import React, { Component } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const MotionLink = motion(Link);

class Logo extends Component {
  render() {
    return (
      <header>
        <div className="flex items-center justify-center mt-2">
          <MotionLink href="/" className="logo-style">
            <Typewriter
              options={{
                strings: ["AM"],
                autoStart: true,
                loop: true,
              }}
            />
          </MotionLink>
        </div>
      </header>
    );
  }
}

export default Logo;
