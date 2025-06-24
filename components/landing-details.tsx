"use client";

import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Rocket, Users, PenTool } from "lucide-react";
import { useRouter } from "next/navigation";

export function LandingDetails() {
    const router = useRouter();

    const handleStart = () => {
        router.push("/signup");
    };
    const handleExplore = () => {
        router.push("/feed");
    };


    return (
        <section className="bg-green-900 text-white">
            {/* FAQ Section */}
            <div className="mx-auto max-w-3xl px-4 py-16 bg-green-900 rounded-lg" id="questions">
                <h3 className="text-2xl font-semibold text-center mb-8 tracking-wide text-blue-cyan-50">
                    Frequently Asked Questions
                </h3>
                <Accordion type="multiple" className="space-y-4">
                    <AccordionItem value="profile" className="bg-white">
                        <AccordionTrigger className="px-4 py-2 text-lg font-bold text-emerald-700 hover:bg-emerald-50">
                            How do I set up my creator profile?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-base text-emerald-600">
                            Fill in your bio, link socials, upload your avatar/cover, and choose your content categories—this helps your audience discover you.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="publish" className="bg-white">
                        <AccordionTrigger className="px-4 py-2 text-lg font-bold text-emerald-700 hover:bg-emerald-50">
                            What content types can I publish?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-base bg-blue-cyan-50 text-emerald-600">
                            Articles, blogs, image galleries, audio, videos, or rich multimedia posts—all in one platform.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="monetize" className="bg-white">
                        <AccordionTrigger className="px-4 py-2 text-lg font-bold text-emerald-700 hover:bg-emerald-50">
                            How does monetization work?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-base text-emerald-600">
                            Choose what fits you: subscriptions, tips, or premium content. You keep 95% of what you earn—DreamDOT takes no cuts.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="collab" className="bg-white">
                        <AccordionTrigger className="px-4 py-2 text-lg font-bold text-emerald-700 hover:bg-emerald-50">
                            Can I collaborate with others?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-base text-emerald-600">
                            Absolutely. Invite collaborators, co-author posts, or build together in real-time using shared spaces.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="insights" className="bg-white">
                        <AccordionTrigger className="px-4 py-2 text-lg font-bold text-emerald-700 hover:bg-emerald-50">
                            Will I get analytics?
                        </AccordionTrigger>
                        <AccordionContent className="px-4 py-2 text-base text-emerald-600">
                            Yes. Access real-time dashboards tracking reach, growth, and engagement to optimize your creative journey.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            {/* Final Section: What’s Next */}
            <div className="bg-[#0C111A] py-20 text-center" id="explore">
                <h3 className="text-3xl font-bold mb-4">
                    Launch Your Creative Career with DreamDOT
                </h3>
                <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                    No gatekeepers. No limits. Just you, your content, and the tools to
                    turn your ideas into income. Whether you’re an artist, writer,
                    influencer, or visionary—you belong here.
                </p>

                <div className="grid gap-6 sm:grid-cols-3 max-w-5xl mx-auto mb-12 px-4">
                    <div className="bg-[#11151f] p-6 rounded-xl">
                        <Rocket className="w-8 h-8 text-green-400 mb-3 mx-auto" />
                        <h4 className="font-semibold text-lg">Instant Publishing</h4>
                        <p className="text-gray-400 text-sm mt-2">
                            Share content instantly across web, mobile, and social—no tech
                            skills required.
                        </p>
                    </div>
                    <div className="bg-[#11151f] p-6 rounded-xl">
                        <Users className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
                        <h4 className="font-semibold text-lg">Built-in Community</h4>
                        <p className="text-gray-400 text-sm mt-2">
                            Connect with fans, fellow creators, and collaborators. You own the
                            relationships.
                        </p>
                    </div>
                    <div className="bg-[#11151f] p-6 rounded-xl">
                        <PenTool className="w-8 h-8 text-green-400 mb-3 mx-auto" />
                        <h4 className="font-semibold text-lg">Total Creative Control</h4>
                        <p className="text-gray-400 text-sm mt-2">
                            Customize your space, your content, and your business—your way.
                        </p>
                    </div>
                </div>
                <div className="flex sm:flex-row gap-4 justify-center">
                <Button
                    size="lg"
                    className="bg-green-400 text-black hover:bg-green-400/90 px-10 py-6 text-lg font-semibold"
                    onClick={handleStart}
                >
                    Create My Free Account
                </Button>
                <Button
                    size="lg"
                    className="bg-blue-400 text-black hover:bg-blue-400/90 px-10 py-6 text-lg font-semibold"
                    onClick={handleExplore}
                >
                    Explore The Platform
                </Button>
                </div>
                
            </div>
        </section>
    );
}
