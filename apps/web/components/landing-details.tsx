"use client";

import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Rocket, Users, PenTool, Sparkles, TrendingUp, Shield, CircleDollarSign, BarChart } from "lucide-react";
import { useRouter } from "next/navigation";

export function LandingDetails() {
    const router = useRouter();

    const handleStart = () => {
        router.push("/signup");
    };
    const handleExplore = () => {
        router.push("/feed");
    };

    const faqItems = [
        {
            icon: Sparkles,
            value: "profile",
            question: "How do I set up my creator profile?",
            answer: "Fill in your bio, link socials, upload your avatar/cover, and choose your content categories—this helps your audience discover you.",
            gradient: "from-emerald-500/10 to-teal-500/10"
        },
        {
            icon: TrendingUp,
            value: "publish",
            question: "What content types can I publish?",
            answer: "Articles, blogs, image galleries, audio, videos, or rich multimedia posts—all in one platform.",
            gradient: "from-teal-500/10 to-green-500/10"
        },
        {
            icon: CircleDollarSign,
            value: "monetize",
            question: "How does monetization work?",
            answer: "Choose what fits you: subscriptions, tips, or premium content. You keep 95% of what you earn—DreamDOT takes no cuts.",
            gradient: "from-green-500/10 to-emerald-500/10"
        },
        {
            icon: Users,
            value: "collab",
            question: "Can I collaborate with others?",
            answer: "Absolutely. Invite collaborators, co-author posts, or build together in real-time using shared spaces.",
            gradient: "from-emerald-500/10 to-teal-500/10"
        },
        {
            icon: BarChart,
            value: "insights",
            question: "Will I get analytics?",
            answer: "Yes. Access real-time dashboards tracking reach, growth, and engagement to optimize your creative journey.",
            gradient: "from-teal-500/10 to-green-500/10"
        }
    ];

    return (
        <section className="bg-gradient-to-b from-green-900 via-teal-900 to-emerald-950 text-white">
            {/* FAQ Section */}
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20" id="questions">
                <div className="text-center mb-8 sm:mb-12">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-300 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                        Frequently Asked Questions
                    </h3>
                    <p className="text-emerald-200 text-base sm:text-lg px-4">
                        Everything you need to know to get started
                    </p>
                </div>
                
                <Accordion type="multiple" className="space-y-3 sm:space-y-4">
                    {faqItems.map((item) => {
                        const IconComponent = item.icon;
                        return (
                            <AccordionItem 
                                key={item.value}
                                value={item.value} 
                                className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm border border-emerald-500/20 rounded-xl sm:rounded-2xl overflow-hidden transition-all hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/10`}
                            >
                                <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-5 text-base sm:text-lg font-semibold text-emerald-50 hover:text-green-300 transition-colors group">
                                    <div className="flex items-center gap-3 sm:gap-4 text-left">
                                        <div className="p-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0">
                                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                        </div>
                                        <span>{item.question}</span>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-5 text-sm sm:text-base text-emerald-100 leading-relaxed">
                                    <div className="pl-10 sm:pl-14">
                                        {item.answer}
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>

            {/* Final Section: What's Next */}
            <div className="bg-[#0C111A] py-12 sm:py-16 md:py-20 text-center px-4 sm:px-6" id="explore">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                    Launch Your Creative Career with DreamDOT
                </h3>
                <p className="text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-4">
                    No gatekeepers. No limits. Just you, your content, and the tools to
                    turn your ideas into income. Whether you're an artist, writer,
                    influencer, or visionary—you belong here.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
                    <div className="bg-gradient-to-br from-[#11151f] to-[#1a202c] p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-emerald-500/20 hover:border-emerald-400/40 transition-all hover:shadow-lg hover:shadow-emerald-500/20 group">
                        <div className="bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-50">Instant Publishing</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Share content instantly across web, mobile, and social—no tech
                            skills required.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#11151f] to-[#1a202c] p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-teal-500/20 hover:border-teal-400/40 transition-all hover:shadow-lg hover:shadow-teal-500/20 group">
                        <div className="bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <Users className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-50">Built-in Community</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Connect with fans, fellow creators, and collaborators. You own the
                            relationships.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-[#11151f] to-[#1a202c] p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all hover:shadow-lg hover:shadow-green-500/20 group sm:col-span-2 lg:col-span-1">
                        <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-lg p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <PenTool className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-lg sm:text-xl mb-2 text-emerald-50">Total Creative Control</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Customize your space, your content, and your business—your way.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-green-400 to-emerald-500 text-black hover:from-green-500 hover:to-emerald-600 px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all w-full sm:w-auto"
                        onClick={handleStart}
                    >
                        Create My Free Account
                    </Button>
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-teal-400 to-green-500 text-black hover:from-teal-500 hover:to-green-600 px-8 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-all w-full sm:w-auto"
                        onClick={handleExplore}
                    >
                        Explore The Platform
                    </Button>
                </div>
            </div>
        </section>
    );
}
