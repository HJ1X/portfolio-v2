import { Award } from "lucide-react";

const EducationDetails = ({ log }: { log: any }) => {
  return (
    <div className="flex-1 flex justify-between items-start mt-1 mb-2.5">
      <div className="flex flex-col">
        <h3 className="text-xl md:text-2xl font-extrabold text-foreground tracking-wide">
          {log.university}
        </h3>
        <div className="flex flex-col items-start gap-0 text-muted-foreground font-semibold">
          <p className="text-base md:text-lg">{log.title}</p>
          <p className="text-sm md:text-base text-foreground/50">{log.duration}</p>
        </div>
        {log.awards?.length > 0 && (
          <div className="flex flex-col items-start justify-start gap-0.5 mt-2.5">
            {log.awards.map((award: string) => (
              <div key={award} className="flex gap-2 items-start">
                <Award className="text-foreground/70 w-4.5 h-4.5 mt-1" />
                <span className="text-base md:text-lg text-foreground/80 max-w-2xl">
                  {award}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationDetails;
