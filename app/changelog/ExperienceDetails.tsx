import { Award, Quote } from "lucide-react";

const ExperienceDetails = ({ log }: { log: any }) => {
  return (
    <div className="flex-1 flex justify-between items-start mt-1">
      <div className="flex flex-col">
        <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-wide">
          {log.company}
        </h3>
        <div className="flex flex-col items-start gap-0 text-muted-foreground font-semibold">
          <p className="text-base md:text-lg">{log.title}</p>
          <p className="text-sm md:text-base text-foreground/50">{log.duration}</p>
        </div>
        <p className="text-base md:text-lg text-foreground/80 leading-normal max-w-3xl pt-2.5">
          {log.description}
        </p>
        {log.description2 && (
          <p className="text-base md:text-lg text-foreground/80 leading-normal max-w-3xl pt-4">
            {log.description2}
          </p>
        )}
        {log.awards?.length > 0 && (
          <div className="flex flex-col items-start justify-start gap-0.5 mt-4">
            {log.awards.map((award: string) => (
              <div key={award} className="flex gap-2 items-start">
                <Award className="text-foreground/70 w-4.5 min-w-4.5 h-4.5 mt-1" />
                <span className="text-base md:text-lg text-foreground/80 max-w-2xl">
                  {award}
                </span>
              </div>
            ))}
          </div>
        )}
        {log.testimonials?.length > 0 && (
          <div className="flex flex-col items-start justify-start gap-0.5 mt-4">
            {log.testimonials.map((testimonial: any) => (
              <div
                key={testimonial.name}
                className="flex gap-2 items-start italic"
              >
                <Quote className="text-foreground/50 w-4.5 min-w-4.5 h-4.5 mt-1.5 -skew-x-6" />
                <div className="flex flex-col gap-1 text-foreground/60 max-w-2xl text-base md:text-lg">
                  <span className="text-base md:text-lg">{testimonial.content}</span>
                  <span className="">&mdash; {testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceDetails;
