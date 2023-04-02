import React from "react";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-8 space-y-2">
      <h1 className="text-center text-4xl font-bold py-4 underline">Blog</h1>

      <div className="border border-[#c9c9c9] rounded-lg p-2 bg-gray-100">
        <h3 className="my-2 text-xl font-medium">
          Q:{" "}
          <span className="underline">Difference Between Props vs State.</span>
        </h3>
        <p>
          <span className="underline font-bold">Ans:</span> Props is a special
          react keyword for proprietary purposes, used for data transmission
          from component to component. <br />
          The state is an updated structure that is used to contain and can
          modify data or information about the component over time. The state
          change may occur as a user activity or device event response. <br />
          Props data cannot be changed by child component. <br />
          State data can be modified by the component. <br />
          Props are used to pass data from a parent component to child
          component, while state is used to manage data within a component
          itself.
        </p>
      </div>
      <div className="border border-[#c9c9c9] rounded-lg p-2 bg-gray-100">
        <h3 className="my-2 text-xl font-medium">
          Q: <span className="underline">How does useState work?</span>
        </h3>
        <p>
          <span className="underline font-bold">Ans:</span> useState is React
          Hook that allows us to add state to a functional component. It returns
          an array with two values: the current state and a function to update.
          The Hook takes an initial state value as argument and return an
          updated state value whenever the set function is called.
        </p>
      </div>
      <div className="border border-[#c9c9c9] rounded-lg p-2 bg-gray-100">
        <h3 className="my-2 text-xl font-medium">
          Q:{" "}
          <span className="underline">
            Purpose of useEffect other than fetching data.
          </span>
        </h3>
        <p>
          <span className="underline font-bold">Ans:</span> Updating the
          value/data of document. <br /> <br />
          UseEffect can use onchange mousemove and resize etc. <br /> <br />
        </p>
      </div>
      <div className="border border-[#c9c9c9] rounded-lg p-2 bg-gray-100">
        <h3 className="my-2 text-xl font-medium">
          Q: <span className="underline">How does react works?</span>
        </h3>
        <p>
          <span className="underline font-bold">Ans:</span> React is javascript
          library for building user interfaces.It allows developers to create
          reusable UI components and manage the state of those components.React
          works with virtual dom.
          <ul>
            <li>Component Rendering.</li>
            <li>State management.</li>
            <li>Reconciliation.</li>
            <li>Event handling.</li>
            <li>Server side rendering.</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Blog;
