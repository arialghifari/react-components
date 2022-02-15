import React from "react";
import ReactDOM from "react-dom";
import faker from "@faker-js/faker";
import "./index.css";

const App = () => {
    console.log(faker.date.recent(30));
    return (
        <div className="comments grid grid-cols-1 place-items-center my-8 gap-7">
            <h1 className="text-4xl">Comments</h1>

            <div className="comment w-2/6 flex flex-row gap-4">
                <div
                    className="basis-1/6 bg-cover bg-center"
                    style={{ backgroundImage: `url(${faker.image.avatar()})` }}
                ></div>
                <div className="basis-5/6">
                    <a href="/" className="inline text-lg font-bold">
                        {faker.name.findName()}
                    </a>
                    <p className="inline text-gray-500 ml-4">Today at 5:00AM</p>
                    <p className="mt-1">{faker.lorem.sentences()}</p>
                </div>
            </div>

            <div className="comment w-2/6 flex flex-row gap-4">
                <div
                    className="basis-1/6 bg-cover bg-center"
                    style={{ backgroundImage: `url(${faker.image.avatar()})` }}
                ></div>
                <div className="basis-5/6">
                    <a href="/" className="inline text-lg font-bold">
                        {faker.name.findName()}
                    </a>
                    <p className="inline text-gray-500 ml-4">Today at 5:00AM</p>
                    <p className="mt-1">{faker.lorem.sentences()}</p>
                </div>
            </div>

            <div className="comment w-2/6 flex flex-row gap-4">
                <div
                    className="basis-1/6 bg-cover bg-center"
                    style={{ backgroundImage: `url(${faker.image.avatar()})` }}
                ></div>
                <div className="basis-5/6">
                    <a href="/" className="inline text-lg font-bold">
                        {faker.name.findName()}
                    </a>
                    <p className="inline text-gray-500 ml-4">Today at 5:00AM</p>
                    <p className="mt-1">{faker.lorem.sentences()}</p>
                </div>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
