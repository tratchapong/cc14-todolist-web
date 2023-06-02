// resource : https://tailwind-elements.com/docs/standard/components/spinners/s

export default function Spinner() {
  return (
    <div className="absolute inset-0 bg-gray-300 opacity-50 grid place-items-center z-10">
      <div
        className="bg-gray-300 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] "
        role="status"
      ></div>
    </div>
  );
}
