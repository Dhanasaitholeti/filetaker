// SpinnerIcon.jsx

const SpinnerIcon = () => (
  <svg
    className="animate-spin h-5 w-5 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.003 8.003 0 014 12H0c0 4.418 3.582 8 8 8v-4zm10-9.291c.045-.312.045-.647 0-1H14v1c0 4.418 3.582 8 8 8h1v-1a8.003 8.003 0 01-4-6.709z"
    ></path>
  </svg>
);

export default SpinnerIcon;
