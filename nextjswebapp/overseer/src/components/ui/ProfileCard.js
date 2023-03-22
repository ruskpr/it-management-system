import { BsGithub } from "react-icons/bs";

export default function ProfileCard({ img, name, email, className, children }) {
  return (
    <div
      className={`w-fit flex justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-900 dark:border-gray-700 ${className}`}
    >
      <div className="flex flex-col items-center px-8 py-4">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={img}
          alt="profile icon"
        />
        <h5 className="flex items-center text-xl font-medium text-gray-900 dark:text-white">
          <span className="pr-2">
            <BsGithub />
          </span>
          {name}
        </h5>
        <span className="text-sm text-white">{email}</span>
        {children ? <div className="mt-4">{children}</div> : null}
      </div>
    </div>
  );
}
