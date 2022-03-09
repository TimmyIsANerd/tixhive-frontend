import vector from "svgs/Vector-4.svg";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import React, { useState } from "react";
//import EventFactory from "contract-abis/EventFactory.json";
import { StepZero, StepOne, StepTwo } from "components/create-event-steps";
import moment from "moment";

function CreateEvent() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputValue, setInputValue] = useState({
    name: "Get Cavvy 2.0",
    host: "Cavemen",
    category: "Live perfomance",
    venue_type: "physical",
    venue: "O2 Arena, London, UK",
    start_time: "09:00:00",
    start_date: "2022-03-13",
    end_time: "",
    end_date: "",
  });
  const event = inputValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(inputValue);
  };
  const steps = [
    {
      title: "Create Your Event",
      subtitle:
        "Teresa will insert some cool text here, ipsum dolor sit amet lorem.",
      content: (
        <StepZero
          setStep={setCurrentStep}
          handleChange={handleChange}
          event={event}
        />
      ),
    },
    {
      title: "Event Info",
      subtitle:
        "Teresa will insert some cool text here, ipsum dolor sit amet lorem.",
      content: (
        <StepOne
          setStep={setCurrentStep}
          handleChange={handleChange}
          event={event}
        />
      ),
    },
    {
      title: "Details",
      content: (
        <StepTwo
          setStep={setCurrentStep}
          handleChange={handleChange}
          event={event}
        />
      ),
    },
    {
      title: "Tickets",
      content: <div></div>,
    },
    {
      title: "Publish",
      content: <div></div>,
    },
  ];

  const titleList = steps.map((step, index) => {
    if (index < 1) {
      return "";
    }
    return (
      <h3
        className={`cursor-pointer flex items-center ${
          currentStep === index
            ? "active-title"
            : index < steps.length - 1
            ? "py-3"
            : currentStep === steps.length - 2 && index === steps.length - 1
            ? "py-3"
            : ""
        }`}
        onClick={() => setCurrentStep(index)}
        key={index}
      >
        <span
          className={`rounded-full mr-[15.5px] h-[32.22px] flex items-center justify-center w-[32.22px] text-[16px] ${
            index < currentStep ? "bg-brand-red" : "bg-[#393F4A]"
          }`}
        >
          {index}
        </span>
        <span className="text-[25.43px] leading-[38.15px]">{step.title}</span>
      </h3>
    );
  });

  return (
    <div className="relative h-screen z-0">
      <div
        className={`grid grid-cols-1  ${
          currentStep > 1 ? "lg:grid-cols-6" : "lg:grid-cols-5"
        }`}
      >
        <div className={`px-5 sm:px-6 lg:px-8 lg:col-span-2`}>
          <div className="lg:pl-10 mt-[60px] text-white">
            {currentStep < 2 ? (
              <div>
                <h3 className="font-[600] text-[70px] leading-[105px]">
                  {steps[currentStep].title}
                </h3>
                <div className="mt-[10px] font-[400] lg:max-w-[520px] lg:text-[25px] lg:leading-[37.5px] text-white">
                  {steps[currentStep].subtitle}
                </div>
              </div>
            ) : (
              <div>
                <h3 className="lg:text-[40px] font-[500] lg:leading-[60px]">
                  {event.name}
                </h3>
                <h3 className="lg:text-[20px] lg:leading-[30px] font-[500]">
                  {moment(event.start_date + " " + event.start_time).format(
                    "ddd, MMM D YYYY, h:mm A"
                  )}
                </h3>
                <div className="mt-[18.86px]">{titleList}</div>
              </div>
            )}
          </div>
        </div>
        <div
          className={`mt-[60px] lg:mx-[70px] h-full ${
            currentStep > 1 ? "lg:col-span-4" : "lg:col-span-3"
          }`}
        >
          <img
            src={vector}
            alt="vector"
            className="fixed bottom-0 h-full top-0 z-[-1] right-0"
          />
          <div className="create-event-section z-50 lg:px-[40px] lg:pt-[56px] lg:pb-[40px]">
            {steps[currentStep].content}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CreateEvent;
