import React from "react";
import { Image } from "react-bootstrap";
import gravity from "../../Assets/gravity.png";

export default function Gravity() {
  return (
    <div>
      <h1 id="title" className="text-center mb-3">
        Greetings, fellow space enthusiasts!
      </h1>
      <p id="text">
        I am here to talk to you about the concept of gravity, a force that
        seems to have a strong hold on all of us (quite literally). <br />
        You see, gravity is a mysterious force that keeps us firmly planted on
        the ground, and without it, we'd all be floating off into the great
        unknown (although that might be a fun vacation).
      </p>

      <p id="text">
        But seriously, gravity is an important force to consider when it comes
        to space travel. Without it, astronauts would have a tough time
        navigating their way through the cosmos. And let's not forget about the
        Moon, which is essentially just a giant rock floating around in space
        thanks to the Earth's gravitational pull.
      </p>
      <p id="text">
        But enough about the science, let's get to the fun stuff. Have you ever
        tried to jump really high on Earth, only to be brought back down to the
        ground by the pesky force of gravity? Well, on the Moon, you could jump
        much higher, thanks to the weaker gravitational pull. <br />
        Imagine all the fun you could have on a Moon bounce house!
      </p>
      <p id="text">
        In conclusion, gravity may seem like a drag (pun intended), but it's
        actually an essential force that keeps us grounded (literally and
        figuratively). So next time you're feeling weighed down by the stresses
        of everyday life, just remember that gravity has your back (and your
        feet).
      </p>
      <div className="d-flex flex-row gap-4 mb-5 mt-5">
        <span className="fs-4" id="text1">
          <p>
            The concept of gravity has been around for centuries, but it wasn't
            until the 17th century that it was formally studied and understood.
          </p>
          <p>
            It was Sir Isaac Newton who is credited with the discovery of
            gravity. In 1687, he published his laws of motion and universal
            gravitation, which explained how objects move and the forces that
            act upon them.
          </p>
          <p>
            Newton's work was based on the observations and experiments of other
            scientists, including Galileo Galilei and Johannes Kepler. However,
            it was Newton who was able to mathematically describe the laws of
            motion and universal gravitation, which helped to establish the
            modern understanding of gravity.
          </p>
          <p>
            Since then, our understanding of gravity has continued to evolve and
            expand, with the development of Einstein's theory of relativity and
            the discovery of black holes. Today, gravity remains an important
            and fascinating subject of study in physics and astronomy.
          </p>
        </span>

        <Image
          src={gravity}
          fluid
          rounded
          alt="gravity-by-a-monkey"
          style={{ height: "500px" }}
          className="shadow-lg"
        />
      </div>

      <h4 className="text-center mb-5">
        Until next time, stay grounded (but not too grounded)!
      </h4>
    </div>
  );
}
