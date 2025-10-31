import { ChevronDown } from "lucide-react";
import { useEffect, useState, } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { codeExamples } from "../data/CodeExamples";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const Hero = () => {

    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeTab, setActiveTab] = useState("App.tsx")

    useEffect(() => {

        function handleMouseMove(e: MouseEvent) {
            setMousePosition({ x: e.clientX, y: e.clientY });
            console.log(e.clientX, e.clientY)

        }

        window.addEventListener("mousemove", handleMouseMove)

        return () => { window.removeEventListener("mousemove", handleMouseMove) }
    }, [])
    return (
        <section className="relative min-h-screen flex justify-center items-center overflow-hidden pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0 opacity-30"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
                }}
            >
            </div>
            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="relative order-2 w-full">
                <div className="relative bg-white/5 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-2xl border border-white/10 p-3 sm:p-4">
                    <div className="bg-linear-to-br from-gray-900/20 to-gray-800/20 h-[280px] sm:h-[350px] lg:h-[450px] backdrop-blur-sm rounded-lg overflow-hidden border border-white/5">
                        {/* IDE HEADER */}
                        <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3  backdrop-blur-sm border-b border-white/10 bg-white/5">
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1 sm:space-x-2">
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                                </div>
                                <span className="text-xs sm:text-sm text-gray-300 ">
                                    CodeFlow AI
                                </span>
                            </div>
                            <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                        </div>

                        <div>
                            <div className="p-3 sm:p-4 flex items-center space-x-1 sm:space-x-2">
                                <button
                                    onClick={() => setActiveTab("App.tsx")}
                                    className={`text-xs sm:text-sm px-3 py-2 backdrop-blur-sm text-gray-300 border border-white/10 rounded-t-lg ${activeTab === "App.tsx" ? "bg-blue-500/30 text-white border-blue-400/20"
                                        : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10"} transition-all duration-200 whitespace-nowrap`}>
                                    App.tsx
                                </button>

                                <button
                                    onClick={() => setActiveTab("Hero.tsx")}
                                    className={`text-xs sm:text-sm px-3 py-2 backdrop-blur-sm text-gray-300 border border-white/10 rounded-t-lg ${activeTab === "Hero.tsx" ? "bg-blue-500/30 text-white border-blue-400/20"
                                        : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} transition-all duration-200 whitespace-nowrap`}>
                                    Hero.tsx
                                </button>

                                <button
                                    onClick={() => setActiveTab("Navbar.tsx")}
                                    className={`text-xs sm:text-sm px-3 py-2 backdrop-blur-sm text-gray-300 border border-white/10 rounded-t-lg ${activeTab === "Navbar.tsx" ? "bg-blue-500/30 text-white border-blue-400/20"
                                        : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"} transition-all duration-200 whitespace-nowrap`}>
                                    Navbar.tsx
                                </button>
                            </div>

                            {/* Code Content */}
                            <div className="relative overflow-hidden grow">
                                <SyntaxHighlighter language="tsx" style={nightOwl}
                                    customStyle={{
                                        margin: 0,
                                        borderRadius: "8px",
                                        fontSize: "11px",
                                        lineHeight: "1.4",
                                        height: "100%",
                                        border: "1px solid #3c3c3c",
                                        wordWrap: "break-word",
                                        whiteSpace: "pre-wrap",
                                        textAlign: "left",
                                    }}
                                >
                                    {codeExamples[activeTab]}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
