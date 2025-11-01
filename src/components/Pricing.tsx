import { Check, Star } from "lucide-react"
import { plans } from "../data/CodeExamples"


export const Pricing = () => {
    return (
        <section
            id="pricings"
            className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                        <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
                            Simple, Transparent
                        </span>

                        <br />
                        <span className="bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            Pricing Plans.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto ">
                        Choose the perfect plan for your needs. All plans include a 14-day
                        free trial.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6 mt-4 sm:mt-6 lg:mt-8">
                        {plans.map((plan, key)=>(

                            <div key={key} 
                            className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visiable group flex flex-col h-full
                                ${plan.mostPopular ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105" : "border-slate-800 hover:border-slate-700"}`}
                            >
                                {plan.mostPopular && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2  -top-2 sm:-top-3 z-10">
                                        <div className="flex items-center justify-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-linear-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm shadow-lg font-semibold">
                                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white"/>
                                            <span>Most Popular</span>
                                        </div>
                                    </div>
                                )}

                                <div className="text-center mb-6 sm:mb-8">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                                        {plan.name}
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                                        {plan.description}
                                    </p>

                                <div className="flex items-baseline justify-center">
                                        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                            ${plan.price}
                                        </span>
                                        <span className="text-gray-400 ml-1 sm:ml-2 text-sm sm:text-base">
                                            /month
                                        </span>
                                    </div>
                                </div>

                                <ul>
                                   {plan.features.map((feature, featurekey)=>(
                                        <li key={featurekey}
                                        className="flex items-start space-x-2 sm:space-x-3"
                                        >
                                            <div className="shrink-0 w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center mt-0.5 bg-blue-500/20 rounded-full">
                                                <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400"/>
                                            </div>
                                            <span className="text-gray-300 text-xs sm:text-sm">
                                                {feature}
                                            </span>
                                        </li>
                                   ))}
                                </ul>

                                <button className={`w-full py-2.3 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-300 mt-4 sm:mt-auto hover:scale-102 text-sm sm:text-base cursor-pointer p-2 sm:p-0
                                    ${plan.mostPopular ? "bg-linear-to-b from-blue-500 to-cyan-500" 
                                        : "bg-white/5 border-white/10 hover:bg-white/10"
                                    }`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 sm:mt-12 text-center">
                        <p className="text-gray-400 text-base">
                            Need a customer plan?{" "}
                            <a href="#" className="text-blue-400 hover:text-blue-300">
                                Contact our sales team
                            </a>
                        </p>
                    </div>
                </div>
        </div>
    </section >
  )
}
