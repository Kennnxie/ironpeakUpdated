"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
    {
        value: "services",
        trigger: "What services do you offer?",
        content: "We offer a wide range of services including but not limited to residential construction, home remodeling and innovations, commercial build outs, design services, concrete and structural work, and even consulting. ",
    },
    {
        value: "trust",
        trigger: "Why choose us?",
        content: "We have been trusted and doing business since 2014. Our clients are always satisfied with our works and we ensure you the most quality experience we can provide!",
    },
    {
        value: "expedite",
        trigger: "Can you do my project in a tight time frame?",
        content: "We will talk to you and see what our expected time frame to be and see if we can match your expectations. We want to provide you with the premium quality that we always ensure, in a timely manner for both us and yourself. ",
    },
    {
        value: "areas",
        trigger: "What areas do you serve?",
        content: "We serve San Jose, Santa Clara, Sunnyvale, Palo Alto, Fremont, and surrounding Bay Area communities.",
    },
    {
        value: "quote",
        trigger: "How can I get a quote for the job I need done? ",
        content: "You can contact us easily by our links on this website or calling us directly. You can also go into the office for some in person consultation as well. We are flexible and you can depend on us!",
    },
]

export default function Faq() {
    return (
        <section id="faq" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="max-w-3xl mx-auto mb-14 text-center">
                    <p className="text-brand-red text-xs font-bold tracking-[0.25em] uppercase mb-4">
                        Services, Quality, Certainty. IronPeak
                    </p>
                    <h2 className="text-4xl font-extrabold text-zinc-900 mb-6">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
                    <div className="w-full h-auto lg:h-[482px] rounded border border-zinc-800 bg-white p-6 md:p-8">
                        <Accordion type="single" collapsible defaultValue="services">
                            {items.map((item) => (
                                <AccordionItem key={item.value} value={item.value} className="py-2 border-b last:border-b-0 border-black">
                                    <AccordionTrigger>
                                        <span className="text-base font-bold text-md">{item.trigger}</span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="rounded border border-black bg-zinc-100 p-4 text-base">
                                            {item.content}
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div className="overflow-hidden rounded">
                        <img
                            src="/tools.avif"
                            alt="Construction project"
                            className="h-[482px] w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}