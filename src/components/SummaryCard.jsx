/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


export default function SummaryCard(props) {
  const {title, amount} = props
  return (
    <div className="w-full md:w-1/4 rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl">
    <a className="block rounded-xl bg-white p-4 sm:p-6  " href="">
      <div className="mt-0">
        <h3 className="text-lg font-bold text-gray-900 sm:text-xl">{title}</h3>
        <p className="mt-2 text-2xl text-gray-500">{amount}</p>
      </div>
    </a>
  </div>
  )
}
