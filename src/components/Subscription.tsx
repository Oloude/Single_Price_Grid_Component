 

function Subscription() {
  return (
    <div className="bg-cyan p-6 flex flex-col">
        <h3 className="text-white text-base font-medium mb-4">Monthly Subscription</h3>
        <div className="flex gap-2 items-center mb-3">
            <p className="text-white font-medium text-4xl ">$29</p>
            <p className="text-gray font-medium text-base">per month</p>
        </div>
        <p className="text-gray font-medium text-base mb-6">Full access for less than $1 a day </p>
        <button className="text-gray font-medium bg-yellow rounded-md shadow-md p-3">    Sign Up</button>
    </div>
  )
}

export default Subscription