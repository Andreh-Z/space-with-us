import React from "react";
import Suit from "../../Assets/Suit.png";
import Image from "react-bootstrap/Image";

export default function SpaceSuit() {
  return (
    <div>
      <h1 id="title" className="text-center mb-3">
        Space suits, ugly but cool!
      </h1>
      <p id="text">
        Space suits, also known as extravehicular mobility units (EMUs), are
        critical pieces of equipment for astronauts traveling in space. They are
        designed to provide a safe and comfortable environment for astronauts to
        work in while they are outside of their spacecraft.
      </p>

      <p id="text">
        Space suits have several key components that allow them to function
        effectively in the harsh environment of space. The suit itself is made
        of multiple layers of material that help to protect the astronaut from
        extreme temperatures, radiation, and micrometeoroids. The helmet
        contains a visor that allows the astronaut to see and a communications
        system that allows them to stay in contact with mission control and
        their fellow astronauts.
      </p>
      <p id="text">
        The suit also has a life support system that provides the astronaut with
        oxygen, water, and temperature control. The oxygen is necessary for the
        astronaut to breathe, and the water helps to regulate their body
        temperature. The temperature control system helps to keep the astronaut
        comfortable by regulating the temperature inside the suit.
      </p>
      <p id="text">
        Space suits also have mobility systems that allow the astronaut to move
        around and interact with their surroundings. These systems include
        gloves, boots, and joints in the suit that allow the astronaut to bend
        and reach.
      </p>

      <p id="text1">
        In summary, space suits are essential pieces of equipment that allow
        astronauts to safely and comfortably work in the harsh environment of
        space. They provide protection, life support, and mobility, and are
        critical for the success of any mission.
      </p>
      <div className="d-flex flex-row gap-4 mb-5 mt-5">
        <span className="fs-4" id="text1">
          <p>
            Space suits are an essential part of any trip to space. Without
            them, astronauts would be floating aimlessly in the vacuum of space
            (not to mention being exposed to all sorts of cosmic radiation and
            other dangers). But that doesn't mean that space suits can't be fun
            too! Here are a few tips for making the most of your space suit
            experience:
          </p>
          <li className="fs-5">
            Accessorize! Space suits may not have pockets, but that doesn't mean
            you can't add a little flair. Try attaching a few patches or
            stickers to your suit to show off your personality.
          </li>
          <br />
          <li className="fs-5">
            Make some space suit fashion choices. Sure, space suits are all
            about function, but that doesn't mean they can't be fashionable too.
            Choose a color that really speaks to you, or add a little flair with
            some funky decals.
          </li>
          <br />
          <li className="fs-5">
            Don't be afraid to get creative with your helmet. You may not be
            able to see your face, but that doesn't mean you can't express
            yourself. Try adding a little flair to your helmet with some
            stickers or paint.
          </li>
          <br />
          <li className="fs-5">
            Have fun with your space suit. It may be a critical piece of
            equipment, but that doesn't mean you can't have a little fun with
            it. Try doing a little moonwalking in your suit, or have a space
            suit dance party with your fellow astronauts.
          </li>
          <br />
          <p id="text1">
            <strong>
              So, if you follow these tips, you'll be sure to have a blast in
              your space suit (while still staying safe and professional, of
              course).
            </strong>
          </p>
        </span>

        <Image
          src={Suit}
          fluid
          rounded
          alt="gravity-by-a-monkey"
          style={{ height: "500px" }}
          className="shadow-lg"
        />
      </div>

      <h4 className="text-center mb-5">Until next time!</h4>
    </div>
  );
}
