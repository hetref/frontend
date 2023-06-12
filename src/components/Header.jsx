import React, { useState } from "react";
import image from "../assets/headerImage.jpg";
import { services1, services2 } from "../constants";

const Header = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name } = event.target;
    setCheckedItems((prevCheckedItems) => {
      if (prevCheckedItems.includes(name)) {
        return prevCheckedItems.filter((item) => item !== name);
      } else {
        return [...prevCheckedItems, name];
      }
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };

  const checkInputs = () => {
    if (
      formValues.name === "" ||
      formValues.email === "" ||
      formValues.phone === "" ||
      formValues.description === ""
    ) {
      return alert("All the fields are mandatory!");
    } else if (checkedItems.length === 0) {
      return alert("Please select a service!");
    } else {
      return true;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let checkedInputs = checkInputs();
    // checkedInputs && console.log(checkedInputs);

    if (checkedInputs) {
      alert("Thank you!");
      let formDataValues = {
        ...formValues,
        services: JSON.stringify(checkedItems),
      };

      // I tried checking all the possibilities for adding a post request in the API but I am unable to do it due to some error.

      console.log(JSON.stringify(formDataValues));
      fetch("https://www.formz.in/api/task", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataValues),
      })
        .then((response) => console.log(response))
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="block sm:flex mt-[70px]">
      <div className="sm:block hidden flex-1">
        <img src={image} className="h-full object-cover" alt="" />
      </div>

      <div className="flex-1">
        <div className="px-[2.4rem] sm:px-[6rem] py-[3rem]">
          <h1 className="text-3xl sm:text-4xl tracking-[0.4px] sm:tracking-[1px] mb-[1.6rem]">
            Let's level up your brand, together
          </h1>

          <p className="text-[#000000b5] tracking-wider">
            You can reach us anytime at{" "}
            <a href="mailto:shindearyan179@gmail.com" className="underline">
              shindearyan179@gmail.com
            </a>
          </p>

          <div className="mt-[1.6rem]">
            <form onSubmit={handleSubmit}>
              <label htmlFor="nameinput">
                Name <br />
                <input
                  type="text"
                  onChange={handleInputChange}
                  value={formValues.name}
                  name="name"
                  placeholder="Your name"
                  id="nameinput"
                  className="w-full input_styles"
                />
              </label>

              <label htmlFor="emailinput">
                Email <br />
                <input
                  type="email"
                  onChange={handleInputChange}
                  value={formValues.email}
                  name="email"
                  placeholder="shindearyan179@gmail.com"
                  id="emailinput"
                  className="w-full input_styles"
                />
              </label>

              <label htmlFor="phoneinput">
                Phone number <br />
                <input
                  type="number"
                  onChange={handleInputChange}
                  value={formValues.phone}
                  name="phone"
                  placeholder="+91 80972 96453"
                  id="phoneinput"
                  className="w-full input_styles"
                />
              </label>

              <label htmlFor="messageinput" className="sm:block hidden">
                How can we help? <br />
                <textarea
                  type="text"
                  onChange={handleInputChange}
                  value={formValues.description}
                  name="description"
                  placeholder="Tell us a little about the project..."
                  id="messageinput"
                  rows="5"
                  className="w-full resize-none input_styles"
                ></textarea>
              </label>

              <label htmlFor="messageinput" className="sm:hidden block">
                Message
                <br />
                <textarea
                  type="text"
                  onChange={handleInputChange}
                  value={formValues.description}
                  name="description"
                  placeholder="Tell us a little about the project..."
                  id="messageinput"
                  rows="5"
                  className="w-full resize-none input_styles"
                ></textarea>
              </label>

              <div>
                <label className="label_styles">Services</label>

                <div className="checkbox_styles flex sm:flex-row flex-col">
                  <div className="flex-1">
                    {services1.map((data, index) => {
                      return (
                        <div key={`services-${index}`}>
                          <label className="cyberpunk-checkbox-label">
                            <input
                              className="cyberpunk-checkbox"
                              name={data}
                              type="checkbox"
                              checked={checkedItems.includes(data)}
                              onChange={handleChange}
                            />
                            {data}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex-1">
                    {services2.map((data, index) => {
                      return (
                        <div key={`services-${index}`}>
                          <label className="cyberpunk-checkbox-label">
                            <input
                              className="cyberpunk-checkbox"
                              name={data}
                              type="checkbox"
                              checked={checkedItems.includes(data)}
                              onChange={handleChange}
                            />
                            {data}
                          </label>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="submit_button w-full py-[.4rem] text-[1.2rem]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
