import { useState, type ChangeEvent } from "react";

export default function SendMessage() {
  const [messageInfo, setMessageInfo] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  function submitMessage(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(messageInfo);
  }
  return (
    <div className="w-full md:w-[70%] p-4 shadow-lg rounded-2xl">
      <h3 className="gradient elegant text-center  capitalize">
        send your message & get response as quickly
      </h3>
      <form action="" className="w-full" onSubmit={submitMessage}>
        <div className="flex my-4">
          <input
            onChange={(e) =>
              setMessageInfo({ ...messageInfo, name: e.target.value })
            }
            type="text"
            placeholder="Your Name"
            className="w-full rounded-2xl p-8 "
          />
          <input
            onChange={(e) =>
              setMessageInfo({ ...messageInfo, email: e.target.value })
            }
            type="email"
            required
            placeholder="Email Address"
            className="w-full ml-8 rounded-2xl p-8 "
          />
        </div>
        <input
          onChange={(e) =>
            setMessageInfo({ ...messageInfo, project: e.target.value })
          }
          type="text"
          placeholder="Your Project "
          className="w-full rounded-2xl p-8 "
        />
        <textarea
          onChange={(e) =>
            setMessageInfo({ ...messageInfo, email: e.target.value })
          }
          name="message"
          className="w-full h-50 shadow-lg border border-gray-300 my-8 rounded-2xl p-8 "
          id="message"

          placeholder="Your Message"
        ></textarea>
        <button className="bg-primary text-white rounded-2xl font-bold w-full shadow p-5">
          Send Message{" "}
        </button>
      </form>
    </div>
  );
}
