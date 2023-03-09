import classnames from "classnames";

export default function Button({
    primary,
    secondary,
    neutral,
    success,
    warning,
    danger,
    rounded,
    outline,
    noBorder,
    children,
    ...rest
  }) {

  const styling = classnames(
    "flex items-center text-lg font-bold px-5 py-2 border", // <-- default styles
    {
      "border-blue-400 bg-blue-500 text-white hover:bg-blue-600": primary,
      "border-gray-400 bg-gray-500 text-white hover:bg-gray-600": secondary,
      "border-neutral-700 bg-neutral-800 text-white hover:bg-neutral-900":
        neutral,
      "border-green-400 bg-green-500 text-white hover:bg-green-600": success,
      "border-yellow-400 bg-yellow-500 text-white hover:bg-yellow-600": warning,
      "border-red-400 bg-red-500 text-white hover:bg-red-600": danger,
      "rounded-full": rounded,
      "bg-transparent hover:bg-transparent": outline,
      "text-blue-300": outline && primary,
      "text-gray-800": outline && secondary,
      "text-gray-200": outline && neutral,
      "text-green-400": outline && success,
      "text-yellow-500": outline && warning,
      "text-red-500": outline && danger,
      "border-0": noBorder,
    },
    rest.className, // <-- additional classes
  );

  // jsx to return
  return (
    <button {...rest} className={styling}>
      {children}
    </button>
  );
}

//   Button.propTypes = {
//     checkVariationValue: ({
//       primary,
//       secondary,
//       success,
//       warning,
//       danger,
//       neutral,
//     }) => {
//       const count =
//         Number(!!primary) +
//         Number(!!secondary) +
//         Number(!!success) +
//         Number(!!warning) +
//         Number(!!danger) +
//         Number(!!neutral);

//       if (count > 1) {
//         return new Error(
//           "Only one of primary, secondary, success, warning, danger, neutral can be true. "
//         );
//       }
//     },
//   };