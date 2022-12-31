import React from "react";
import ship from "../../Assets/ship.png";
import Image from "react-bootstrap/Image";

export default function SpaceShip() {
  return (
    <div>
      <h1 id="title" className="text-center mb-3">
        Space ships, oh how we love them!
      </h1>
      <p id="text">
        Whether you're a seasoned astronaut or just a space enthusiast, there's
        something about these amazing vessels that captures the imagination and
        inspires a sense of wonder.
      </p>

      <p id="text">
        But let's be real, space ships aren't always the most practical mode of
        transportation. I mean, have you ever tried to parallel park a space
        shuttle? Talk about a nightmare! And don't even get me started on the
        line at the space station gas station.
      </p>
      <p id="text">
        And let's not forget about the food. Have you ever tried to eat
        freeze-dried ice cream in zero gravity? It's a mess, let me tell you.
        But hey, at least you don't have to worry about getting a cavity from
        all that space sugar.
      </p>
      <p id="text">
        But despite their quirks, space ships are still pretty amazing. From the
        sleek design of the Apollo capsules to the futuristic look of the
        International Space Station, these vessels have taken us to places we
        never could have imagined.
      </p>

      <p id="text1">
        So let's give a round of applause for space ships, the coolest (and most
        impractical) mode of transportation in the universe!
      </p>
      <div className="d-flex flex-row gap-4 mb-5 mt-5">
        <span className="fs-4" id="text1">
          <p>
            Did you know that the space shuttle's main engines were so powerful
            that they could lift the weight of about 70 elephants? That's right,
            each of the space shuttle's three main engines produced over 1.5
            million pounds of thrust, making it one of the most powerful rockets
            ever built.
          </p>
          <p>
            The space shuttle was used for 135 missions between 1981 and 2011,
            and played a crucial role in building and servicing the
            International Space Station. It was also the first reusable
            spacecraft, meaning it could be used for multiple missions rather
            than being discarded after a single use.
          </p>
          <p>
            Despite its impressive capabilities, the space shuttle was retired
            in 2011, and has since been replaced by the SpaceX Dragon and the
            Boeing CST-100 Starliner. These new spacecraft are designed to be
            even more efficient and cost-effective, and will help pave the way
            for future space exploration and tourism.
          </p>
          <p id="text1">
            <strong>
              I hope you found this fun fact about space ships interesting!
            </strong>
          </p>
        </span>

        <Image
          src={ship}
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
