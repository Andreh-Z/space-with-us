import React from "react";
import { Image } from "react-bootstrap";
import food from "../../Assets/food.png";

export default function Food() {
  return (
    <div>
      <h1 id="title" className="text-center mb-3">
        Sure thing! Let's talk about food!
      </h1>
      <p id="text">
        Eating in space can be a bit of a challenge, especially when you're
        trying to enjoy a delicious meal while floating around weightless in
        zero gravity.
      </p>

      <p id="text">
        First things first, you'll need to find a way to keep your food from
        floating away. No one wants to chase down a floating grape in the middle
        of a space mission. One solution is to use a special tray that has
        compartments and suction cups to keep your food in place.
      </p>
      <p id="text">
        But what about utensils? Using a fork or knife might be a bit tricky
        when everything is floating around, so astronauts often rely on food
        that can be eaten with their hands (like sandwiches or pre-packaged
        meals). If you do need to use utensils, you might have to get creative
        and use Velcro or some other type of fastener to keep everything in
        place.
      </p>
      <p id="text">
        And let's not forget about drinks. Sipping on a nice cold glass of water
        might seem like a simple task on Earth, but in space, it can be quite a
        challenge. Without gravity, liquids don't behave the same way they do on
        Earth, so astronauts often have to use special containers with straws to
        drink their beverages.
      </p>
      <p id="text">
        So there you have it, a few tips on how to eat in space. Just remember
        to bring plenty of food (and maybe some Velcro utensils) on your next
        space mission, and you'll be good to go. Bon appétit!
      </p>
      <div className="d-flex flex-row gap-4 mb-5 mt-5">
        <span className="fs-4" id="text1">
          <label className="mb-2">
            Here's a step-by-step guide on how to eat a pizza in space:
          </label>
          <ol>
            <li>
              Start by getting all of your supplies ready. You'll need a tray
              with compartments and suction cups to keep everything in place, as
              well as some utensils (like a fork or knife) to cut the pizza. If
              you don't have utensils with fasteners, you might want to bring
              some Velcro or other type of fastener to keep everything from
              floating away.
            </li>
            <br />
            <li>
              Next, open up your pizza box (or container) and carefully place
              the pizza on the tray. Use the suction cups to secure the pizza in
              place.
            </li>
            <br />
            <li>
              Time to slice the pizza! This can be a bit tricky in zero gravity,
              so be careful not to lose any slices as you cut. You might want to
              use a fork or knife with a fastener to keep everything in place as
              you slice.
            </li>
            <br />
            <li>
              Once your pizza is sliced, it's time to dig in! You can use your
              hands to pick up the slices, or use utensils if you prefer. Just
              make sure to keep everything secured on the tray so you don't lose
              any toppings (or slices) as you eat.
            </li>
            <br />
            <li>
              Finally, don't forget to enjoy your pizza! Eating in space can be
              a bit of a challenge, but it can also be a lot of fun. So sit
              back, relax, and savor every delicious bite of your cosmic pizza.
            </li>
          </ol>
        </span>

        <Image
          src={food}
          fluid
          rounded
          alt="gravity-by-a-monkey"
          style={{ height: "500px" }}
          className="shadow-lg"
        />
      </div>

      <h4 className="text-center mb-5">
        I'll see you in the next category, space ships!
      </h4>
    </div>
  );
}
