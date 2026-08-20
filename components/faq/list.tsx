"use client";

import {motion} from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Badge} from "@/components/ui/badge";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {faqColumns, type FaqItem} from "@/lib/landing-content";
import {itemVariants, listVariants, revealViewport} from "@/lib/landing-motion";

const spring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 28,
  mass: 0.7,
};

const cardHover = {
  rest: {
    y: 0,
    borderColor: "rgba(23, 42, 73, 0.07)",
    boxShadow: "0 1px 0 rgba(23, 42, 73, 0.03), 0 28px 50px -28px rgba(23, 42, 73, 0)",
  },
  hover: {
    y: -6,
    borderColor: "rgba(255, 145, 77, 0.35)",
    boxShadow: "0 1px 0 rgba(23, 42, 73, 0.03), 0 28px 50px -28px rgba(23, 42, 73, 0.45)",
  },
};

export function FaqList() {
  return (
    <section className="bg-cream pb-16 sm:pb-20 lg:pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
          {faqColumns.map((column, columnIndex) => (
            <FaqColumn
              key={columnIndex}
              items={column}
              defaultValue={columnIndex === 0 ? column[0]?.id : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqColumn({
  items,
  defaultValue,
}: {
  items: readonly FaqItem[];
  defaultValue?: FaqItem["id"];
}) {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={defaultValue}
      className="flex flex-col gap-3"
    >
      <motion.ul
        className="flex flex-col gap-3"
        variants={listVariants}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
      >
        {items.map((item) => (
          <motion.li key={item.id} variants={itemVariants}>
            <AccordionItem value={item.id} className="border-0">
              <FaqCard item={item} />
            </AccordionItem>
          </motion.li>
        ))}
      </motion.ul>
    </Accordion>
  );
}

function FaqCard({item}: {item: FaqItem}) {
  return (
    <motion.div
      initial="rest"
      animate="rest"
      whileHover="hover"
      variants={cardHover}
      transition={{
        y: spring,
        borderColor: {duration: 0.4, ease: [0.22, 1, 0.36, 1]},
        boxShadow: {duration: 0.45, ease: [0.22, 1, 0.36, 1]},
      }}
    >
      <Card className="gap-0 overflow-hidden rounded-2xl border bg-white py-0 ring-0">
        <CardHeader className="p-0">
          <AccordionTrigger className="items-center gap-3 px-4 py-4 text-base hover:no-underline **:data-[slot=accordion-trigger-icon]:rounded-full **:data-[slot=accordion-trigger-icon]:bg-cream **:data-[slot=accordion-trigger-icon]:p-1.5 **:data-[slot=accordion-trigger-icon]:text-navy">
            <span className="flex min-w-0 items-center gap-3 pr-3">
              <Badge
                variant="secondary"
                className="size-7 shrink-0 justify-center bg-cream px-0 font-heading text-xs font-semibold text-navy"
              >
                {item.n}
              </Badge>
              <CardTitle className="font-heading text-base leading-snug font-semibold tracking-tight text-navy sm:text-lg">
                {item.question}
              </CardTitle>
            </span>
          </AccordionTrigger>
        </CardHeader>
        <AccordionContent className="px-4 pb-4">
          <CardContent className="rounded-xl bg-cream/80 px-4 py-3 text-sm leading-relaxed text-navy-muted sm:text-base">
            {item.answer}
          </CardContent>
        </AccordionContent>
      </Card>
    </motion.div>
  );
}
